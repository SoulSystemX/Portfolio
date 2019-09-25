<template>
  <div id="blog">
    <div id="pageIntroduction">
      <h1>Blog</h1>
    </div>
    <!-- <dd-post :postID="intpostID" /> -->
    <dd-posttile category="Blog"></dd-posttile>
  </div>
</template>

<script>
import PostTile from "@/components/PostTile";

export default {
  data: function() {
    return {};
  },
  components: {
    "dd-posttile": PostTile
  }
};
</script>

<style>
</style>