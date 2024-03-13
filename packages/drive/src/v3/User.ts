/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/User
 */
export type User = {
  displayName: string;
  kind: string;
  me: boolean;
  permissionId: string;
  emailAddress: string;
  photoLink: string;
};
