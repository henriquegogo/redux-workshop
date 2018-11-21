export const NOTIFICATION_ACTION = 'NOTIFICATION_ACTION';

export function notification(message) {
  return { type: NOTIFICATION_ACTION, notification: message }
}
