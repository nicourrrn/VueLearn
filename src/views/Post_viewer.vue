<template>
  <div class="downloader">
    <div class="buttons">
      <input type="button" @click="loadPosts" value="Load posts" />
    </div>
    <template v-for="(post, index) in posts" :key="index">
      <Post
        :name="post.title"
        :body="post.body"
        :user-id="post.userId"
        :post-id="post.id"
        @pointer="loadComment"
      ></Post>
    </template>
    <template v-for="(comment, index) in comments" :key="index">
      <Comment :name="comment.name" :body="comment.body" :email="comment.email" ></Comment>
    </template>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Post from "@/components/Post";
import Comment from "@/components/Comment"

export default {
  name: "Post viewer",
  components: { Post, Comment },
  data() {
    return {
      posts: [],
      comments: [],
    };
  },
  methods: {
    ...mapGetters("posts", ["getPosts", "getCommentByPost"]),
    loadPosts() {
      this.comments = [];
      this.$store.dispatch("posts/downloadPosts");
      this.posts = this.getPosts();
    },
    loadComment(id) {
      this.posts = [];
      this.$store.dispatch("posts/downloadComments");
      let getPosts = this.getCommentByPost();
      this.comments = getPosts(id);
    },
  },
  created() {
    this.loadPosts();
  },
};
</script>
