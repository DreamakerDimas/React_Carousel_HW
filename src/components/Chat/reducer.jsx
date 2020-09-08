export default function funChatReducer(state, action) {
  switch (action.type) {
    case 'NEW_MSG': {
      const { users, messages } = state;
      const { message } = action;
      const msgFromUser = {
        ...message,
        user: users.get(message.userId),
      };
      const newMsg = [...messages, msgFromUser];
      return {
        ...state,
        messages: newMsg,
      };
    }
    case 'GET_SUCCESS': {
      const {
        data: { users, messages },
      } = action;
      const usersMap = new Map();
      users.forEach((u) => {
        usersMap.set(u.id, u);
      });
      const msgWithAuthors = messages.map((u) => ({
        ...u,
        author: usersMap.get(u.userId) ?? null,
      }));
      return {
        ...state,
        users: usersMap,
        messages: msgWithAuthors,
      };
    }
    default:
      return state;
  }
}
