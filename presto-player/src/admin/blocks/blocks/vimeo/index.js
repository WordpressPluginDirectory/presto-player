const { __ } = wp.i18n;
import edit from "./edit";
import blockOptions from "../block-options";

/**
 * Block Name
 */
export const name = "presto-player/vimeo";

/**
 * Block Options
 */
export const options = {
  ...blockOptions,

  usesContext: ["presto-player/playlist-media-id"],

  attributes: {
    ...blockOptions.attributes,
    video_id: {
      type: String,
    },
  },

  title: __("Presto Vimeo Video", "presto-player"),

  description: __(
    "A vimeo video wrapped in an awesome player.",
    "presto-player"
  ),

  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="presto-block-icon"
    >
      <path d="M22.875 10.063c-2.442 5.217-8.337 12.319-12.063 12.319-3.672 0-4.203-7.831-6.208-13.043-.987-2.565-1.624-1.976-3.474-.681l-1.128-1.455c2.698-2.372 5.398-5.127 7.057-5.28 1.868-.179 3.018 1.098 3.448 3.832.568 3.593 1.362 9.17 2.748 9.17 1.08 0 3.741-4.424 3.878-6.006.243-2.316-1.703-2.386-3.392-1.663 2.673-8.754 13.793-7.142 9.134 2.807z" />
    </svg>
  ),

  edit,
};
