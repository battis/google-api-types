import { Field } from './Field';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/Label
 */
export type Label = {
  id: string;
  revisionId: string;
  kind: string;
  fields: {
    (key: string): Field;
  };
};
