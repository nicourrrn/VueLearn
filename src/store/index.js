import Vuex from "vuex";

import postState from "./post";

const modules = {
  posts: postState,
};

export default new Vuex.Store({
  modules,
});
