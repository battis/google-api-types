import { Label } from './Label';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/files/modifyLabels#response-body
 */
export type ModifiedLabelsList = {
  modifiedLabels: Label[];
  kind: string;
};
