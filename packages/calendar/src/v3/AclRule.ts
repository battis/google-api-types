import '@battis/google.base';

/**
 * @see https://developers.google.com/calendar/api/v3/reference/acl
 */
export type AclRule = {
  kind: 'calendar#aclRule';
  etag: etag;
  id: string;
  scope: {
    type: string;
    value: string;
  };
  role: string;
};
