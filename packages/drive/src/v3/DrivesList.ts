import { Drive } from './Drive';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/drives/list#response-body
 */
export type DrivesList = {
  nextPageToken: string;
  kind: string;
  drives: Drive[];
};
