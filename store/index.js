export const state = () => ({
  user: {},
  messages: [],
  users: [],
});

export const mutations = {
  SOCKET_newMessage(state, msg) {
    state.messages = [...state.messages, msg];
  },
  SOCKET_deleteMessage(state, msg) {
    state.messages = state.messages.map( x => {
      if(x.content === msg.content && x.name === msg.name) { 
        return {
          ...x,
          content: `this message is deleted by ${msg.name}`,
        }
      }
      return x;
    })
  },
  setUser(state, user) {
    state.user = user;
  },
  SOCKET_updateUsers(state, users) {
    state.users = users;
  },
  clearData(state) {
    state.user = {};
    state.messages = [];
    state.users = [];
  },
};

export const actions = {
  socketEmit(_, { action, payload }) {
    return this._vm.$socket.emit(action, payload);
  },
  deleteMessage({ dispatch }, msg) {
    console.log(msg);

    const payload = {
      name: msg.name,
      content: msg.content,
    };
    // delete msg di other client lewat socketEmit
    dispatch("socketEmit", {
      action: "deleteMessage",
      payload,
    });
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
  createImg({ dispatch, state }, img) {
    const { user } = state;
    const payload = {
      img,
      id: user.id,
    };

    dispatch("socketEmit", {
      action: "createImage",
      payload,
    });
  },
  createPdf({ dispatch, state }, pdf) {
    const { user } = state;
    const payload = {
      pdf,
      id: user.id,
    };

    dispatch("socketEmit", {
      action: "createPdf",
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
  leaveRoom({ commit, dispatch }) {
    dispatch("socketEmit", {
      action: "leaveRoom",
      payload: null,
    });

    commit("clearData");
  },
};
