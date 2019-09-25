<template>
  <div id="footer">
    <div id="section1">
      <img src="./../assets/logo.png" />
    </div>

    <div id="section2">
      <h3>Contact me!</h3>
      <section id="contact">
        <form action="https://formspree.io/lee.maguire.dev@gmail.com" method="POST" target="_blank">
          <label>Name:</label>
          <input type="text" name="name" required />
          <br />
          <label>Your Email:</label>
          <input type="email" name="_replyto" required />
          <br />
          <label>Your message:</label>
          <br />
          <textarea name="message" rows="10" cols="35" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>

    <div id="section3">
      <h3>Follow me on Social Media!</h3>
      <ul>
        <li>
          Twitter:
          <a href="https://twitter.com/SoulSystemX">@SoulSystemX</a>
        </li>
        <li>
          LinkedIn:
          <a href="https://www.linkedin.com/in/lee-maguire-6ba92064/">@LinkedIn</a>
        </li>
        <li>
          Github:
          <a href="https://github.com/SoulSystemX">@Github</a>
        </li>
      </ul>
    </div>
    <div id="copyrightNotice">© Lee Maguire</div>
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
label {
  width: 150px;
}
input {
  background-color: #231f20;
  border: 3px solid #51e898;
  width: 260px;
  color: white;
}

textarea {
  background-color: #231f20;
  color: white;
  border: 3px solid #51e898;
  margin-left: 154px;
  width: 260px;
  margin-top: -32px;
}

#footer {
  background-color: rgba(35, 31, 32, 1);
  padding: 50px;
  color: white;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
  height: auto;
  display: flex;
  position: relative;
  padding-top: 50px;
}

#section1 {
  width: 30%;

  border-right: 1px solid darkgrey;
}

#section2 {
  width: 30%;
  padding-left: 40px;
  padding-right: 40px;
  border-right: 1px solid darkgrey;
}

#section3 {
  width: 30%;
}

#copyrightNotice {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
}

img {
  margin-top: 40px;
  height: 140px;
  width: 140px;
}
ul {
  padding-left: 40px;
}
li {
  text-align: left;
  list-style-type: none;
}

form {
  padding: 20px;
  text-align: left;
}

@media screen and (max-width: 1024px) {
  #footer {
    background-color: rgba(35, 31, 32, 1);

    padding: 50px;
    color: white;
    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
    flex-direction: column;
  }
  #section1 {
    width: 100%;
    height: 40vh;
    border-bottom: 1px solid darkgrey;
    border-right: 0px solid;
    margin-bottom: 20px;
  }

  #section2 {
    width: 100%;
    border-bottom: 1px solid darkgrey;
    border-right: 0px solid;
    margin-bottom: 20px;
  }

  #section3 {
    width: 100%;
  }

  textarea {
    background-color: #231f20;
    color: white;
    border: 3px solid #51e898;
    clear: both;
    margin-left: 0px;
    width: 260px;
    margin-top: 0px;
  }

  img {
    height: 80px;
    width: 80px;
  }
}
</style>


