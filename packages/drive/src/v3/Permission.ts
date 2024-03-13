/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/permissions#Permission
 */
export type Permission = {
  id: string;
  displayName: string;
  type: string;
  kind: string;
  permissionDetails: {
    permissionType: string;
    inheritedFrom: string;
    role: string;
    inherited: boolean;
  }[];
  photoLink: string;
  emailAddress: string;
  role: string;
  allowFileDiscovery: boolean;
  domain: string;
  expirationTime: string;
  teamDrivePermissionDetails: {
    teamDrivePermissionType: string;
    inheritedFrom: string;
    role: string;
    inherited: boolean;
  }[];
  deleted: boolean;
  view: string;
  pendingOwner: boolean;
};
