import { createActionGroup, props } from '@ngrx/store';
import { Notification } from 'src/API';

export const NotificationActions = createActionGroup({
  source: 'Notifications',
  events: {
    'Add User Notifications': props<{ userNotifications: Notification[] }>(),
    'Append User Notifications': props<{ userNotification: Notification }>(),
    'Remover User Notifications': props<{ userNotificationId: string }>(),
  },
});
