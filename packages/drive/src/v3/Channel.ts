/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/channels#Channel
 */
export type Channel = {
  payload: boolean;
  id: string;
  resourceId: string;
  resourceUri: string;
  token: string;
  expiration: string;
  type: string;
  address: string;
  params: {
    (key: string): string;
  };
  kind: string;
};
