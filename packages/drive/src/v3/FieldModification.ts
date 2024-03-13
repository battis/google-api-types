/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/files/modifyLabels#FieldModification
 */
export type FieldModification = {
  fieldId: string;
  kind: string;
  setDateValues: string[];
  setTextValues: string[];
  setSelectionValues: string[];
  setIntegerValues: string[];
  setUserValues: string[];
  unsetValues: boolean;
};
