import { User } from './User';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/revisions#resource:-revision
 */
export type Revision = {
  id: string;
  mimeType: string;
  kind: string;
  published: boolean;
  exportLinks: {
    (key: string): string;
  };
  keepForever: boolean;
  md5Checksum: string;
  modifiedTime: string;
  publishAuto: boolean;
  publishedOutsideDomain: boolean;
  publishedLink: string;
  size: string;
  originalFilename: string;
  lastModifyingUser: User;
};
