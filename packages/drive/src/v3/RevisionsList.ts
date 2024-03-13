import { Revision } from './Revision';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/revisions/list#response-body
 */
export type RevisionsList = {
  nextPageToken: string;
  kind: string;
  revisions: Revision[];
};
