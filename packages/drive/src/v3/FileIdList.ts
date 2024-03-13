/**
 * @see https://developers.google.com/drive/api/reference/rest/v3/files/generateIds#response-body
 */
export type FileIdList = {
  ids: string[];
  space: string;
  kind: string;
};
