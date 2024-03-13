import { User } from './User';
import '@battis/google.base';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/about
 */
export type About = {
  kind: string;
  storageQuota: {
    limit: string;
    usageInDrive: string;
    usageInDriveTrash: string;
    usage: string;
  };
  driveThemes: {
    id: string;
    backgroundImageLink: string;
    colorRgb: string;
  }[];
  canCreateDrives: boolean;
  importFormats: {
    (key: string): value;
  };
  exportFormats: {
    (key: string): value;
  };
  appInstalled: boolean;
  user: User;
  folderColorPalette: string[];
  maxImportSizes: {
    (key: string): string;
  };
  maxUploadSize: string;
  teamDriveThemes: {
    id: string;
    backgroundImageLink: string;
    colorRgb: string;
  }[];
  canCreateTeamDrives: boolean;
};
