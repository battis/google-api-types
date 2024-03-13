import { Comment } from './Comment';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/comments/list#response-body
 */
export type CommentsList = {
  kind: string;
  comments: Comment[];
  nextPageToken: string;
};
