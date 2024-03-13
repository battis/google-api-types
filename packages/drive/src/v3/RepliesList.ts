import { Reply } from './Reply';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/replies/list#response-body
 */
export type RepliesList = {
  kind: string;
  replies: Reply[];
  nextPageToken: string;
};
