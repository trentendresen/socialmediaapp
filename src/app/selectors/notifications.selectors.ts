import { createFeatureSelector, createSelector } from '@ngrx/store';

import { NotificationState } from '../reducers/notifications.reducers';

export const selectNotificationsState =
  createFeatureSelector<NotificationState>('notifications');

export const selectUserNotifications = createSelector(
  selectNotificationsState,
  (state: NotificationState) => state.userNotifications
);
