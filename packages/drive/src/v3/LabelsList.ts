import { Label } from './Label';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/files/listLabels#response-body
 */
export type LabelsList = {
  labels: Label[];
  nextPageToken: string;
  kind: string;
};
