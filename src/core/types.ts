export type GifObject = {
  id?: string;
  title: string;
  url?: string;
  images: {
    original: {
      url: string;
    };
    original_still?: {
      url: string;
    };
    preview_gif: {
      url: string;
    };
    [key: string]: any; // For other image formats
  };
  user?: {
    avatar_url: string;
    username: string;
    display_name: string;
  };
  rating: string; // e.g., "g", "pg", "pg-13" etc.
  import_datetime?: string; // Date-time the GIF was added to Giphy's collection
  trending_datetime?: string; // Date-time the GIF became trending, if applicable
};
