<template>
  <section id="artwork">
    <div id="art">
      <div id="contentFormatter">
        <h1>Art</h1>
      </div>
      <div class="postDivider"></div>
      <div id="contentFormatter">
        <h2>Logo Work</h2>
        <p>Here is a sample of some of the logo work I have done, all were created using Adobe Illustrator.</p>

        <img @click="showSingle(waLogo)" src="./../assets/logos/worldAxisLogo.png" />

        <!-- <button @click="showMultiple">Show a group of pictures.</button> -->
        <VueEasyLightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></VueEasyLightbox>

        <!-- Component name: 'vue-easy-lightbox' -->
        <!--
      <vue-easy-lightbox
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
        -->

        <img @click="showSingle(rrLogo)" src="./../assets/logos/rebelrobotlogo.png" />
        <img @click="showSingle(ihLogo)" src="./../assets/logos/interhub.png" />
        <img
          @click="showSingle(snLogo)"
          style="background-color:black;"
          src="./../assets/logos/solarnaut-logo.png"
        />
        <h2>Game Art</h2>
        <p>I enjoy spending some of my free time programming games, this also leans into creating artwork for them as well, below are some samples of my work 2D and 3D.</p>
      </div>
      <div id="contentFormatter">
        <h4>Dungeon Game</h4>
        <p>Built in Unity3D, using blender3D and pyxel edit for artwork and assets.</p>

        <img @click="showSingle(oldWA)" src="./../assets/backgr.jpg" />
      </div>
      <div id="contentFormatter">
        <h4>Unreal 3 Level design - The haunting forest</h4>
        <div id="contentFormatter">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4lQg94wbT6w"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <br />
        <img @click="showSingle(hf1)" src="./../assets/games/img1.png" />
        <img @click="showSingle(hf2)" src="./../assets/games/img2.png" />
      </div>

      <div id="contentFormatter">
        <h4>3D Sci-fi, Sword in the stone</h4>
        <p>Built at university for my modelling module, created textured and animated in Blender 3D</p>
        <div id="contentFormatter">
          <div id="wrap">
            <iframe
              id="frame"
              src="https://www.youtube.com/embed/w3KlkaijWKU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  data: function() {
    return {
      imgs: "",
      waLogo: require(`./../assets/logos/worldAxisLogo.png`),
      rrLogo: require(`./../assets/logos/rebelrobotlogo.png`),
      ihLogo: require(`./../assets/logos/interhub.png`),
      snLogo: require(`./../assets/logos/solarnaut-logo.png`),
      oldWA: require(`./../assets/backgr.jpg`),
      hf1: require(`./../assets/games/img1.png`),
      hf2: require(`./../assets/games/img2.png`),
      visible: false,
      index: 0 // default};
    };
  },
  components: {
    VueEasyLightbox
  },
  methods: {
    showSingle(imageToShow) {
      this.imgs = imageToShow;
      this.show();
    },
    // showMultiple() {
    //   this.imgs = [
    //     "http://via.placeholder.com/350x150",
    //     "http://via.placeholder.com/350x150"
    //   ];
    //   this.index = 1; // index of imgList
    //   this.show();
    // },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
#art {
  padding-top: 100px;
  min-height: 100vh;
  text-align: left;
}

img {
  width: 12%;
  height: 12%;
  margin-left: 100px;
  margin-right: 100px;
  transition: 0.5s ease;
  z-index: 5;
}

img:hover {
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
}
</style>