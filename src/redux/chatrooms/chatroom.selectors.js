import { createSelector } from "reselect";

export const selectChatrooms = (state) => state.chatrooms;

export const selectAuthorisedChatrooms = createSelector(
  [selectChatrooms],
  (chatrooms) => chatrooms.chatrooms
);

export const selectActiveChatRoom = createSelector(
  [selectChatrooms],
  (chatrooms) => chatrooms.activeChatroom
);
