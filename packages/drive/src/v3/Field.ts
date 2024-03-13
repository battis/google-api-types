import { User } from './User';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/Label#Field
 */
export type Field = {
  kind: string;
  id: string;
  valueType: string;
  dateString: string[];
  integer: string[];
  selection: string[];
  text: string[];
  user: User[];
};
