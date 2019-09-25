<template>
  <div id="websites">
    <div id="contentFormatter">
      <h1>Websites</h1>
    </div>
    <div class="postDivider"></div>
    <div id="contentFormatter">
      <h3>
        I currently don't have any sites to show here just yet, perhaps you would like to be
        <a
          href="#contact"
        >first?</a>
        <p>In the meanwhile my portfolio is built in Vue.js, Javascript, CSS and HTML.</p>
      </h3>
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
#websites {
  padding-top: 100px;
  min-height: 100vh;
}

a {
  color: white;
  background-color: #d41666;
}

a:hover {
  color: #51e898;
}

@media screen and (max-width: 1024px) {
  h3 {
    text-align: center;
  }
}
</style>