import { Reply } from './Reply';
import { User } from './User';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/comments
 */
export type Comment = {
  id: string;
  kind: string;
  createdTime: string;
  modifiedTime: string;
  resolved: boolean;
  anchor: string;
  replies: Reply[];
  author: User;
  deleted: boolean;
  htmlContent: string;
  content: string;
  quotedFileContent: {
    mimeType: string;
    value: string;
  };
};
