import { User } from './User';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/files#File.ContentRestriction
 */
export type ContentRestriction = {
  readOnly: boolean;
  reason: string;
  type: string;
  restrictingUser: User;
  restrictionTime: string;
  ownerRestricted: boolean;
  systemRestricted: boolean;
};
