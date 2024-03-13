import { Drive } from './Drive';
import { File } from './File';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/changes
 */
export type Change = {
  kind: string;
  removed: boolean;
  file: File;
  fileId: string;
  time: string;
  driveId: string;
  changeType: string;
  drive: Drive;
};
