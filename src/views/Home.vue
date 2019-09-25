<template>
  <div id="home">
    <div id="contentFormatter"></div>
    <about></about>
    <websites></websites>
    <games></games>
    <artwork></artwork>
  </div>
</template>

<script>
import about from "@/views/About";
import games from "@/views/Games";
import artwork from "@/views/Art";
import websites from "@/views/Websites";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    about: about,
    games: games,
    artwork: artwork,
    websites: websites
  }
};
</script>

<style>
ul {
  list-style-type: none;
}
</style>