/**
 * @see https://developers.google.com/calendar/api/v3/reference/colors
 */
export type Colors = {
  kind: 'calendar#colors';
  updated: datetime;
  calendar: {
    (key: string): {
      background: string;
      foreground: string;
    };
  };
  event: {
    (key: string): {
      background: string;
      foreground: string;
    };
  };
};