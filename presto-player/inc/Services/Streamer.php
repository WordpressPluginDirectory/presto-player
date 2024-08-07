<?php

namespace PrestoPlayer\Services;

class Streamer {

	private $path   = '';
	private $stream = '';
	private $buffer = 0;
	private $start  = -1;
	private $end    = -1;
	private $size   = 0;
	private $type   = '';

	function __construct( $file_path, $file_type, $buffer = 102400 ) {
		$this->path   = $file_path;
		$this->type   = $file_type;
		$this->buffer = $buffer;
	}

	/**
	 * Start streaming video content
	 */
	function start() {
		$this->open();
		$this->set_header();
		$this->stream();
		$this->end();
	}

	/**
	 * Open stream
	 */
	private function open() {

		$this->stream = fopen( $this->path, 'rb' );

		if ( ! $this->stream ) {
			die( 'Could not open stream for reading' );
		}
	}

	/**
	 * Set proper header to serve the video content
	 */
	private function set_header() {

		$this->start = 0;
		$this->size  = filesize( $this->path );
		$this->end   = $this->size - 1;

		ob_get_clean();
		header( 'Content-Type: ' . $this->type );
		header( 'Cache-Control: max-age=2592000, public' );
		header( 'Expires: ' . gmdate( 'D, d M Y H:i:s', time() + 2592000 ) . ' GMT' );
		header( 'Last-Modified: ' . gmdate( 'D, d M Y H:i:s', @filemtime( $this->path ) ) . ' GMT' );
		header( 'Accept-Ranges: 0-' . $this->end );

		if ( isset( $_SERVER['HTTP_RANGE'] ) ) {

			$c_start = $this->start;
			$c_end   = $this->end;

			list(, $range) = explode( '=', $_SERVER['HTTP_RANGE'], 2 );
			if ( strpos( $range, ',' ) !== false ) {
				header( 'HTTP/1.1 416 Requested Range Not Satisfiable' );
				header( "Content-Range: bytes $this->start-$this->end/$this->size" );
				exit;
			}
			if ( '-' == $range ) {
				$c_start = $this->size - substr( $range, 1 );
			} else {
				$range   = explode( '-', $range );
				$c_start = $range[0];
				$c_end   = ( isset( $range[1] ) && is_numeric( $range[1] ) ) ? $range[1] : $c_end;
			}
			$c_end = ( $c_end > $this->end ) ? $this->end : $c_end;
			if ( $c_start > $c_end || $c_start > $this->size - 1 || $c_end >= $this->size ) {
				header( 'HTTP/1.1 416 Requested Range Not Satisfiable' );
				header( "Content-Range: bytes $this->start-$this->end/$this->size" );
				exit;
			}
			$this->start = $c_start;
			$this->end   = $c_end;
			$length      = $this->end - $this->start + 1;
			fseek( $this->stream, $this->start );
			header( 'HTTP/1.1 206 Partial Content' );
			header( 'Content-Length: ' . $length );
			header( "Content-Range: bytes $this->start-$this->end/" . $this->size );
		} else {

			header( 'Content-Length: ' . $this->size );
		}
	}

	/**
	 * perform the streaming of calculated range
	 */
	private function stream() {

		$i = $this->start;
		set_time_limit( 0 );

		while ( ! feof( $this->stream ) && $i <= $this->end ) {
			$bytes_to_read = $this->buffer;
			if ( ( $i + $bytes_to_read ) > $this->end ) {
				$bytes_to_read = $this->end - $i + 1;
			}
			$data = fread( $this->stream, $bytes_to_read );
			echo $data;
			flush();
			$i += $bytes_to_read;
		}
	}

	/**
	 * close curretly opened stream
	 */
	private function end() {
		fclose( $this->stream );
		exit;
	}
}
