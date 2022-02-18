<template>
  <div class="post">
    <p class="post_name" @click="pointer">{{ name }}</p>
    <span class="post_body">{{ body }}</span>
    <span class="author">Written by {{userId}} </span>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["name", "body", "userId", "postId"],
  methods: {
    pointer() {
      this.$emit("pointer", this.postId)
    }
  }
}
</script>

<style scoped lang="sass">

.post
  display: flex
  flex-direction: column
  margin-bottom: 5%

  .post_name
    text-align: left
    margin-left: 10%
    color: #42b983
    font-weight: bold
    &:hover
      color: #205b40
      cursor: pointer

  .post_body
    text-align: left

  .author
    text-align: right
    margin-right: 5%


</style>