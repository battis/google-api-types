import { Change } from './Change';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/changes/list#response-body
 */
export type ChangesList = {
  kind: string;
  nextPageToken: string;
  newStartPageToken: string;
  changes: Change[];
};
