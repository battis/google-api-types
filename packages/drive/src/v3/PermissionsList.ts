import { Permission } from './Permission';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/permissions/list#response-body
 */
export type PermissionsList = {
  nextPageToken: string;
  kind: string;
  permissions: Permission[];
};
