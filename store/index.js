export const state = () => ({
  user: {},
  messages: [],
  users: [],
});

export const mutations = {
  SOCKET_newMessage(state, msg) {
    state.messages = [...state.messages, msg];
  },
  setUser(state, user) {
    state.user = user;
  },
  SOCKET_updateUsers(state, users) {
    state.users = users;
  },
};

export const actions = {
  socketEmit(_, { action, payload }) {
    return this._vm.$socket.emit(action, payload);
  },
  createMessage({ dispatch, state }, msg) {
    const { user } = state;
    const payload = {
      msg,
      id: user.id,
    };

    dispatch("socketEmit", {
      action: "createMessage",
      payload,
    });
  },
  async createUser({ dispatch, commit }, user) {
    const { id } = await dispatch("socketEmit", {
      action: "createUser",
      payload: user,
    });

    commit('setUser', { ...user, id });
  },
};
