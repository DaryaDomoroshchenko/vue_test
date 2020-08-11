export default {
  actions: {
    async fetchPosts({ commit }) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await res.json();

      commit("updatePosts", posts);
    },

    async fetchUsers({ commit }) {
      const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
      );
      const users = await res.json();

      commit("updateUsers", users);
    },

    async fetchComments({ commit }) {
      const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
      );
      const comments = await res.json();

      commit("updateComments", comments);
    }
  },

  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },

    updateUsers(state, users) {
      state.users = users;
    },

    updateComments(state, comments) {
      state.comments = comments;
    },
  },

  state: {
    posts: [],

    users: [],

    comments: []
  },

  getters: {
    allPosts(state) {
      return state.posts;
    },

    allUsers(state) {
      return state.users;
    },

    allComments(state) {
      return state.comments;
    }
  }
}
