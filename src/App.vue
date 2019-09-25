<template>
  <div id="app">
    <section id="home"></section>
    <dd-header />
    <div id="parallax" class="rellax">
      <div class="spacer"></div>
    </div>
    <div id="parallaxFast" class="rellax2">
      <h1>
        Hello, I'm
        <div style="color: #51e898;">
          <span style="background-color:#d41666; ">Lee Maguire</span>
        </div>
      </h1>
      <p>I'm a full stack web developer and hobbyist games developer.</p>

      <a href="#contact">
        <div id="button">Contact me</div>
      </a>
    </div>

    <div id="container">
      <div id="arrow"></div>
      <div id="content">
        <home></home>
      </div>
    </div>

    <dd-footer />
    <canvas class="background"></canvas>
  </div>
</template>


<script>
import DDheader from "@/components/Header";
import DDfooter from "@/components/Footer";
import home from "@/views/Home";
import Rellax from "@./../rellax";
import "./lib/animatedHeader.js";

export default {
  name: "App",
  components: {
    "dd-header": DDheader,
    "dd-footer": DDfooter,
    home: home
  },
  mounted() {
    var rellax = new Rellax(".rellax", {
      speed: -7,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    var rellax2 = new Rellax(".rellax2", {
      speed: 10,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Exo:400,800|Orbitron|Rajdhani&display=swap");

#wrap {
  width: 600px;
  height: 390px;
  padding: 0;
  overflow: hidden;
}
#frame {
  width: 560px;
  height: 315px;
  border: 1px solid black;
}
#frame {
  -ms-zoom: 0.75;
  -moz-transform: scale(0.75);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.75);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.75);
  -webkit-transform-origin: 0 0;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  #frame {
    zoom: 1;
  }
}

.spacer {
  height: 100vh;
  width: 100%;
  background: rgba(35, 31, 32, 1);
  background: linear-gradient(
    175deg,
    rgba(35, 31, 32, 1) 0%,
    rgba(35, 31, 32, 1) 20%,
    rgba(35, 31, 32, 0.4) 100%
  );
}

#arrow {
  position: absolute;
  top: 80vh;
  left: 49.5%;
  width: 50px;
  height: 50px;
  margin-left: -12px;
  border-left: 5px solid #d41666;
  border-bottom: 5px solid #d41666;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1s infinite;
  animation: sdb05 1s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb05 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb05 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}

#parallax {
  background-image: url(assets/backgr.jpg);
  background-position: 0px -150px;
  z-index: -1;
  background-size: 100vw;
}

#parallaxFast {
  width: 50%;
  height: 25%;
  position: absolute;
  left: 25%;
  right: 25%;
  top: 35%;
  color: white;
  /* background-color: rgba(0, 0, 0, 0.75); */
}

#parallaxFast h1 {
  font-size: 64px;
  text-align: center;
  font-family: "Orbitron", sans-serif;
}

.background {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: -1;
}

#parallaxFast p {
  font-size: 24px;
  text-align: center;
  font-family: "Orbitron", sans-serif;
}

#app {
  font-family: "Exo", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: transparent;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  /* background-image: url(assets/backgr.jpg); */
}
#container {
  width: 100%;
  background-color: white;
  padding: 30px;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
  display: flex;
  z-index: 1;
}

#content {
  width: 100%;
}

html {
  scroll-behavior: smooth;
}

@media screen and (max-width: 1024px) {
  #container {
    width: 100%;
    background-color: white;
    padding: 30px;
    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
    flex-direction: column;
  }

  #content {
    width: 100%;
  }

  #parallaxFast h1 {
    font-size: 28px;
    text-align: center;
    font-family: "Orbitron", sans-serif;
  }

  #parallaxFast p {
    font-size: 16px;
    text-align: center;
    font-family: "Orbitron", sans-serif;
  }

  #parallaxFast {
    width: 50%;
    height: 25%;
    position: absolute;
    left: 25%;
    right: 25%;
    top: 20%;
    color: white;
    /* background-color: rgba(0, 0, 0, 0.75); */
  }
}

/*GLOBAL CSS*/

#button {
  background-color: #51e89700;
  border: 5px solid #51e898;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  flex-direction: column;
  font-size: 16px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  margin-top: 20px;
  width: 163px;
  margin: auto;
}

#button:hover {
  background-color: #d41666;
  border: 5px solid #d41666;
  margin-top: 13px;
  padding: 22px 40px;
  width: 180px;
  color: white;
  text-decoration: none;
}

#button a {
  color: white;
  width: 180px;
  text-decoration: none;
}
#button a:hover {
  color: white;
  width: 180px;
  text-decoration: none;
}

button {
  background-color: #51e89700;
  border: 5px solid #51e898;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  flex-direction: column;
  font-size: 16px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  margin-top: 20px;
}

button:hover {
  background-color: #d41666;
  border: 5px solid #d41666;
  margin-top: 13px;
  padding: 22px 40px;
  color: white;
}

button a {
  color: white;
}
button a:hover {
  color: white;
  text-decoration: none;
}

h1 {
  text-align: left;
}

a {
  color: #51e898;
  text-decoration: none;
}

a:hover {
  color: #d41666;
  text-decoration: none;
}

a:active {
  color: #d41666;
  text-decoration: none;
}

#contentFormatter {
  width: 90%;
  margin: auto;
  padding-top: 40px;
}

.postDivider {
  border-bottom: grey solid 1px;
  margin: auto;
  width: 90%;
  padding: 20px;
  margin-bottom: 30px;
}

* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  display: flex;
  flex-direction: column;
}
body > * {
  flex-shrink: 0;
}

@media screen and (max-width: 1024px) {
  h1 {
    text-align: left;
    font-size: 36px;
  }

  h2 {
    text-align: left;
    font-size: 28px;
  }

  h3 {
    text-align: left;
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }

  #parallax {
    background-image: url();
    background: rgba(35, 31, 32, 1);
  }
}
</style>
