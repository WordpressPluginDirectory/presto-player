import { ActionBarConfig, YoutubeConfig } from '../../../../../interfaces';
export declare class PrestoActionBar {
    el: HTMLElement;
    player: any;
    config: ActionBarConfig;
    direction?: 'rtl';
    youtube?: YoutubeConfig;
    currentTime: number;
    duration: number;
    ended: boolean;
    componentWillLoad(): void;
    /** Watch for player changes on lazy load.*/
    handlePlayerChange(): void;
    setEnded(): void;
    setCurrentTime(e: any): void;
    /**
     * Remove listeners if destroyed
     */
    disconnectedCallback(): void;
    render(): any;
}
