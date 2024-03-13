import { File } from './File';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/files/list#response-body
 */
export type FilesList = {
  nextPageToken: string;
  kind: string;
  incompleteSearch: boolean;
  files: File[];
};
