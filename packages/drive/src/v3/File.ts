import { ContentRestriction } from './ContentRestriction';
import { Label } from './Label';
import { Permission } from './Permission';
import { User } from './User';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/files#File
 */
export type File = {
  kind: string;
  driveId: string;
  fileExtension: string;
  copyRequiresWriterPermission: boolean;
  md5Checksum: string;
  contentHints: {
    indexableText: string;
    thumbnail: {
      image: string;
      mimeType: string;
    };
  };
  writersCanShare: boolean;
  viewedByMe: boolean;
  mimeType: string;
  exportLinks: {
    (key: string): string;
  };
  parents: string[];
  thumbnailLink: string;
  iconLink: string;
  shared: boolean;
  lastModifyingUser: User;
  owners: User[];
  headRevisionId: string;
  sharingUser: User;
  webViewLink: string;
  webContentLink: string;
  size: string;
  viewersCanCopyContent: boolean;
  permissions: Permission[];
  hasThumbnail: boolean;
  spaces: string[];
  folderColorRgb: string;
  id: string;
  name: string;
  description: string;
  starred: boolean;
  trashed: boolean;
  explicitlyTrashed: boolean;
  createdTime: string;
  modifiedTime: string;
  modifiedByMeTime: string;
  viewedByMeTime: string;
  sharedWithMeTime: string;
  quotaBytesUsed: string;
  version: string;
  originalFilename: string;
  ownedByMe: boolean;
  fullFileExtension: string;
  properties: {
    (key: string): value;
  };
  appProperties: {
    (key: string): value;
  };
  isAppAuthorized: boolean;
  teamDriveId: string;
  capabilities: {
    canChangeViewersCanCopyContent: boolean;
    canMoveChildrenOutOfDrive: boolean;
    canReadDrive: boolean;
    canEdit: boolean;
    canCopy: boolean;
    canComment: boolean;
    canAddChildren: boolean;
    canDelete: boolean;
    canDownload: boolean;
    canListChildren: boolean;
    canRemoveChildren: boolean;
    canRename: boolean;
    canTrash: boolean;
    canReadRevisions: boolean;
    canReadTeamDrive: boolean;
    canMoveTeamDriveItem: boolean;
    canChangeCopyRequiresWriterPermission: boolean;
    canMoveItemIntoTeamDrive: boolean;
    canUntrash: boolean;
    canModifyContent: boolean;
    canMoveItemWithinTeamDrive: boolean;
    canMoveItemOutOfTeamDrive: boolean;
    canDeleteChildren: boolean;
    canMoveChildrenOutOfTeamDrive: boolean;
    canMoveChildrenWithinTeamDrive: boolean;
    canTrashChildren: boolean;
    canMoveItemOutOfDrive: boolean;
    canAddMyDriveParent: boolean;
    canRemoveMyDriveParent: boolean;
    canMoveItemWithinDrive: boolean;
    canShare: boolean;
    canMoveChildrenWithinDrive: boolean;
    canModifyContentRestriction: boolean;
    canAddFolderFromAnotherDrive: boolean;
    canChangeSecurityUpdateEnabled: boolean;
    canAcceptOwnership: boolean;
    canReadLabels: boolean;
    canModifyLabels: boolean;
    canModifyEditorContentRestriction: boolean;
    canModifyOwnerContentRestriction: boolean;
    canRemoveContentRestriction: boolean;
  };
  hasAugmentedPermissions: boolean;
  trashingUser: User;
  thumbnailVersion: string;
  trashedTime: string;
  modifiedByMe: boolean;
  permissionIds: string[];
  imageMediaMetadata: {
    flashUsed: boolean;
    meteringMode: string;
    sensor: string;
    exposureMode: string;
    colorSpace: string;
    whiteBalance: string;
    width: integer;
    height: integer;
    location: {
      latitude: number;
      longitude: number;
      altitude: number;
    };
    rotation: integer;
    time: string;
    cameraMake: string;
    cameraModel: string;
    exposureTime: number;
    aperture: number;
    focalLength: number;
    isoSpeed: integer;
    exposureBias: number;
    maxApertureValue: number;
    subjectDistance: integer;
    lens: string;
  };
  videoMediaMetadata: {
    width: integer;
    height: integer;
    durationMillis: string;
  };
  shortcutDetails: {
    targetId: string;
    targetMimeType: string;
    targetResourceKey: string;
  };
  contentRestrictions: ContentRestriction[];
  resourceKey: string;
  linkShareMetadata: {
    securityUpdateEligible: boolean;
    securityUpdateEnabled: boolean;
  };
  labelInfo: {
    labels: Label[];
  };
  sha1Checksum: string;
  sha256Checksum: string;
};
