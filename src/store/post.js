import axios from "axios";

const state = {
  url: "https://jsonplaceholder.typicode.com",
  posts: [],
  users: [],
  comments: [],
};

const mutations = {
  addPost(state, newPost) {
    state.posts.push(newPost);
  },
  removePost(state, post) {
    state.posts = state.posts.map((value) => value.id !== post.id);
  },
  addComment(state, newComment) {
    state.comments.push(newComment);
  },
  clearAll() {
    state.posts = [];
    state.comments = [];
  }
};

const actions = {
  async downloadPosts(context) {
    const response = await axios
      .get(context.getters["getUrl"] + "/posts")
      .then((r) => r.data);
    for (let i of response) {
      context.commit("addPost", i);
    }
  },

  async downloadComments(context) {
    const response = await axios
      .get(context.getters["getUrl"] + "/comments")
      .then((r) => r.data);
    for (let i of response) {
      context.commit("addComment", i);
    }
  },
};

const getters = {
  getUrl(state) {
    return state.url;
  },
  getPosts(state) {
    return state.posts;
  },
  getCommentByPost(state) {
    return (id) => {
      return state.comments.filter((value) => {
        return value.postId === id;
      });
    };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
