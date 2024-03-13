import { User } from './User';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/replies#Reply
 */
export type Reply = {
  id: string;
  kind: string;
  createdTime: string;
  modifiedTime: string;
  action: string;
  author: User;
  deleted: boolean;
  htmlContent: string;
  content: string;
};
