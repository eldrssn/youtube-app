interface ThumbnailsType {
  url: string;
  width: number;
  height: number;
}

export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ThumbnailsType;
      medium: ThumbnailsType;
      high: ThumbnailsType;
      standard: ThumbnailsType;
      maxres: ThumbnailsType;
    };
    channelTitle: string;
    tags: Array<string>;
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}
