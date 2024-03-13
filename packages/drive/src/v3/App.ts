import { Icon } from './Icon';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/apps#App
 */
export type App = {
  name: string;
  objectType: string;
  supportsCreate: boolean;
  productUrl: string;
  primaryMimeTypes: string[];
  secondaryMimeTypes: string[];
  primaryFileExtensions: string[];
  secondaryFileExtensions: string[];
  id: string;
  supportsImport: boolean;
  installed: boolean;
  authorized: boolean;
  icons: Icon[];
  useByDefault: boolean;
  kind: string;
  shortDescription: string;
  longDescription: string;
  supportsMultiOpen: boolean;
  productId: string;
  openUrlTemplate: string;
  createUrl: string;
  createInFolderTemplate: string;
  supportsOfflineCreate: boolean;
  hasDriveWideScope: boolean;
};
