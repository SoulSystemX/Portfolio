<template>
  <div id="games">
    <div id="contentFormatter">
      <h1>Games</h1>
    </div>
    <div class="postDivider"></div>
    <div id="gamesContent">
      <div id="imageContainer">
        <img src="./../assets/logos/worldAxisLogo.png" />
      </div>
      <p>
        My current hobby game project is
        <i>World Axis</i>
        , An action-RPG with pixel art graphics and a story inspired by tabletop RPG's.
      </p>
    </div>
    <div id="gamesContent">
      <div id="contentFormatter">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hMar_6SuUuQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div id="contentFormatter">
        <h4>Pocket pet (Tamagotchi-like)</h4>
        <p>Pet simulator game built in 12 hours in unity.</p>
      </div>
    </div>
    <div id="gamesContent">
      <div id="contentFormatter">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6x8xXgyg1nI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div id="contentFormatter">
        <h4>Dungeon Game - Prototype</h4>
        <p>I wanted to experiment with a top down game with partial 3D/2D elements, with dynamic lighting, this is what I came up with.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style scoped>
#games {
  padding-top: 100px;
  text-align: left;
  min-height: 100vh;
}

#gamePosts {
  padding-left: 6%;
  padding-right: 6%;
}

#gamesContent {
  width: 96%;
  padding-left: 6%;
  padding-right: 6%;
  margin: auto;

  margin-bottom: 40px;
  margin-top: 80px;
  display: flex;
}
p {
  margin: auto; /* Important */
}

#imageContainer {
  width: 300px;
  height: 300px;
}

img {
  max-width: 100%;
  max-height: 100%;
}
</style>
