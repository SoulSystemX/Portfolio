<template>
  <section id="about">
    <div id="contentFormatter">
      <h1>About me</h1>
    </div>
    <div class="postDivider"></div>
    <div id="flexContain">
      <div id="imgFormatter">
        <div class="img-circle">
          <img src="./../assets/index.png" />
        </div>
      </div>
      <div id="contentFormatter">
        <p>I’m a full stack web and games developer. Most of my days are spent wrangling my daughter but between that I'm coding or designing. I like to build interactive experiences be that games or websites. I've worked in software development for a few years now as well as in brand and design agencies for a few more.</p>
      </div>
      <div id="contentFormatter">
        <div id="skillContainer">
          <div id="skill">
            <div id="title">Unity3D</div>
            <progress max="100" value="80"></progress>
            <div id="progressValue">80%</div>
          </div>
          <div id="skill">
            <div id="title">C#</div>
            <progress max="100" value="70"></progress>
            <div id="progressValue">70%</div>
          </div>
          <div id="skill">
            <div id="title">Photoshop</div>
            <progress max="100" value="70"></progress>
            <div id="progressValue">70%</div>
          </div>
          <div id="skill">
            <div id="title">Illustrator</div>
            <progress max="100" value="60"></progress>
            <div id="progressValue">60%</div>
          </div>
          <div id="skill">
            <div id="title">Vue.js</div>
            <progress max="100" value="70"></progress>
            <div id="progressValue">70%</div>
          </div>
          <div id="skill">
            <div id="title">Javascript</div>
            <progress max="100" value="60"></progress>
            <div id="progressValue">60%</div>
          </div>
          <div id="skill">
            <div id="title">HTML</div>
            <progress max="100" value="60"></progress>
            <div id="progressValue">60%</div>
          </div>
          <div id="skill">
            <div id="title">CSS</div>
            <progress max="100" value="50"></progress>
            <div id="progressValue">50%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
#about {
  padding-top: 100px;
  min-height: 100vh;
}

#flexContain {
  display: flex;
  flex-direction: row;
}

#contentFormatter {
  padding-right: 20px;
}

#imgFormatter {
  padding: 20px;
  width: 40%;
  padding-left: 6%;
  margin: auto;
  padding-top: 40px;
}

.img-circle img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 5%;
}

#skillContainer {
  display: flex;
  flex-direction: column;
}

#skill {
  display: flex;
  width: 75%;
  height: 34px;
}

#title {
  padding-right: 10px;
  padding-left: 10px;
  height: 30px;
  width: 125px;
  text-align: left;
  vertical-align: middle;
  border: #d41666 solid 2px;
}

#progressValue {
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 2px;
  text-align: center;
  vertical-align: middle;
}

progress {
  border: 0px solid #231f20;
  width: 25vw;
  height: 30px;
  background-color: #231f20;
}

progress[value]::-webkit-progress-value {
  background-image: -webkit-linear-gradient(left, #d41666, #d41666);
  border-radius: 2px;
  background-size: 35px 35px, 100% 100%, 100% 100%;
}

progress[value]::-moz-progress-bar {
  background-image: -moz-linear-gradient(left, #d41666, #d41666);
  border-radius: 2px;
  background-size: 35px 35px, 100% 100%, 100% 100%;
}

@media screen and (max-width: 1024px) {
  #contentFormatter {
    justify-content: center;
    flex-direction: column;
  }

  #skillContainer {
    width: 100%;
    justify-content: center;
  }

  #skill {
    justify-content: center;
  }

  #flexContain {
    flex-direction: column;
  }
}
</style>
