import { FieldModification } from './FieldModification';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/files/modifyLabels#labelmodification
 */
export type LabelModification = {
  labelId: string;
  fieldModifications: FieldModification[];
  removeLabel: boolean;
  kind: string;
};
