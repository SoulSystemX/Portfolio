
<template>
  <header id="sticky-header" class="main-nav">
    <!-- <router-link :to="{ name: 'dd-home' }" class="navbar-brand"> -->
    <div class="navbar-brand">
      <a href="#home">
        <img src="./../assets/logo.png" />
      </a>
    </div>
    <nav>
      <div class="hamburger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <ul>
        <li class="nav-item">
          <span>
            <a href="#home" @click="removeOpenMenu">Home</a>
          </span>
        </li>
        <li class="nav-item">
          <span>
            <a href="#about" @click="removeOpenMenu">About</a>
          </span>
        </li>
        <li class="nav-item">
          <span>
            <a href="#websites" @click="removeOpenMenu">Websites</a>
          </span>
        </li>
        <li class="nav-item">
          <span>
            <a href="#games" @click="removeOpenMenu">Games</a>
          </span>
        </li>
        <li class="nav-item">
          <span>
            <a href="#artwork" @click="removeOpenMenu">Artwork</a>
          </span>
        </li>
        <li class="nav-item">
          <span>
            <a href="#contact" @click="removeOpenMenu">Contact Me</a>
          </span>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script src="./../lib/animatedheader.js"></script>
<script>
export default {
  name: "dd-header",
  data() {
    return {
      companyName: "Lee Maguire",
      collapsed: true
    };
  },
  methods: {
    toggleCollapsed: function(event) {
      this.collapsed = !this.collapsed;
    },
    removeOpenMenu: function() {
      document.querySelector("ul").classList.remove("open");
      document.querySelector(".hamburger").classList.toggle("hamanimation");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #d41666;
}

nav {
  width: auto;
  margin-left: auto;
  position: relative;
  margin-right: 20px;
}

.sticky {
  background-color: rgba(35, 31, 32, 0.85);
  height: 90px;

  padding-top: 10px;
  padding-left: 25px;
}

.sticky span {
  /*brand text when stuck */
  height: 90px;
  line-height: 11px;
  margin-top: 25px;
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  transition: all 0.7s;
}

.sticky .navbar-brand img {
  /*brand image when stuck*/
  height: 60px;
  width: 60px;
  /* margin-top: 0px; */
  font-size: 12px;
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  transition: all 0.7s;
}

/* Keep the nav menu independent of scrolling and on top of other items */
.main-nav {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  height: 0px;
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  transition: all 0.8s;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
}

.navbar-brand {
  font-size: 28px;
  margin-left: 5%;
  padding: 50px;
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  transition: all 0.7s;
}

.sticky .navbar-brand {
  font-size: 28px;
  margin-left: 0;
  padding: 0px;
  margin-top: 8px;
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  transition: all 0.7s;
}

.navbar-brand span {
  padding-left: 20px;
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  transition: all 0.7s;
}

.navbar-brand img {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  width: 125px;
  height: 125px;
}

.sticky {
  background-color: #d41666;
  height: 90px;
}

ul {
  display: flex;
  margin-right: auto;
  list-style-type: none;
  margin-top: 10px;
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  transition: all 0.7s;
}

.sticky ul {
  margin-top: 40px;
}

.nav-item {
  padding: 10px;
}

.sticky a {
  color: white;
}
.sticky a:hover {
  color: #51e898;
}

@media screen and (max-width: 1024px) {
  .line1,
  .line3 {
    width: 30px;
    height: 3px;
    background-color: white;
    margin: 5px;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }
  .line2 {
    width: 30px;
    height: 3px;
    background-color: white;
    margin: 5px;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
  }

  nav {
    position: relative;
  }

  .hamburger {
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    -webkit-transition: all 0.7s;
    -moz-transition: all 0.7s;
    transition: all 0.7s;
  }

  .navbar-brand span {
    padding-left: 0px;
    -webkit-transition: all 0.7s;
    -moz-transition: all 0.7s;
    transition: all 0.7s;
    font-size: 18px;
  }
  body {
    overflow-x: hidden;
  }
  ul {
    display: flex;
    position: fixed;
    flex-direction: column;
    background-color: #d41666;
    align-items: center;
    padding: 50px;
    margin: 0;
    right: 0;
    top: 50px;
    height: 100vh;
    transition: all 0.3s ease-out;
    transform: translateX(100%);
    pointer-events: none;
  }
  ul.open {
    transform: translateX(0%);
    transition: all 0.3s ease-out;
    pointer-events: all;
  }

  .hamanimation .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  .hamanimation .line2 {
    opacity: 0;
  }
  .hamanimation .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}
</style>