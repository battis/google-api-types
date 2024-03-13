import { App } from './App';

/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/apps/list#response-body
 */
export type AppsList = {
  defaultAppIds: string[];
  kind: string;
  selfLink: string;
  items: App[];
};
