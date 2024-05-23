import { createReducer, on } from '@ngrx/store';
import { orderBy } from 'lodash';

import { Notification } from 'src/API';
import { NotificationActions } from '../actions/notifications.actions';

export interface NotificationState {
  userNotifications: Notification[];
}

export const initialState: NotificationState = {
  userNotifications: [],
};

export const notificationsReducer = createReducer(
  initialState,
  on(
    NotificationActions.addUserNotifications,
    (state, { userNotifications }) => ({
      ...state,
      userNotifications: userNotifications,
    })
  ),
  on(
    NotificationActions.removerUserNotifications,
    (state, { userNotificationId }) => ({
      ...state,
      userNotifications: state.userNotifications.filter(
        (notification) => notification.id !== userNotificationId
      ),
    })
  ),
  on(
    NotificationActions.appendUserNotifications,
    (state, { userNotification }) => ({
      ...state,
      userNotifications: [userNotification, ...state.userNotifications],
    })
  )
);
