<template>
  <div class="comment">
    <p class="title">
      {{ name }} <i>({{ email }})</i> <b>say:</b>
    </p>
    <p class="body">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "Commentaries",
  props: ["name", "email", "body"],
};
</script>

<style scoped lang="sass">

@keyframes comment-color
  from
    background-color: white
  to
    background-color: #5df6b0


.comment
  margin-bottom: 5%
  &:hover
    animation-name: comment-color
    animation-duration: .5s

.title
  text-align: right
  margin-right: 5%
  b
    color: #42b983

.body
  text-align: left
  margin-left: 2%
</style>
