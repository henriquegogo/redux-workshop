import { NOTIFICATION_ACTION } from '../actions/notification';

const header = (state = { notification: '' }, action) => {
  switch(action.type) {
    case NOTIFICATION_ACTION:
      return { ...state, notification: action.notification }
    default:
      return state;
  }
}

export default header;
