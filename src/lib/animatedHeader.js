import Particles from 'particlesjs';

window.onload = function () {
  var body = document.body
  var stickyHeaderTop = body.offsetTop + 80

  var particles = '';

  const hamburger = document.querySelector('.hamburger')
  const ul = document.querySelector('ul')
  // console.log('[stickyheadertop]', stickyHeaderTop)

  function NavManager (screenWatcher) {
    console.log(document.getElementsByClassName('hamburger'))
    if (document.getElementsByClassName('hamburger').visibility === 'hidden') {
      particles = Particles.init({
        selector: '.background',
        color: '#51e898',
        connectParticles: true,
        minDistance: 60,
        maxParticles: 20,
        sizeVariations: 3
      })
    } else {
      particles = Particles.init({
        selector: '.background',
        color: '#51e898',
        connectParticles: true,
        minDistance: 140,
        maxParticles: 80,
        sizeVariations: 3
      })
    }

    if (screenWatcher.matches) {
      document.getElementById('sticky-header').classList.add('sticky')
    } else {
      if (window.pageYOffset < stickyHeaderTop) {
        document.getElementById('sticky-header').classList.remove('sticky')
        ul.classList.remove('open')
      }
    }

    window.onscroll = function () {
      // if (window.pageYOffset > stickyHeaderTop && !screenWatcher.matches) {
      if (window.pageYOffset > stickyHeaderTop || screenWatcher.matches) {
        document.getElementById('sticky-header').classList.add('sticky')
      } else {
        document.getElementById('sticky-header').classList.remove('sticky')
        ul.classList.remove('open')
      }
    }
  }

  var screenWatcher = window.matchMedia('(max-width: 1024px)')
  NavManager(screenWatcher)
  screenWatcher.addListener(NavManager)

  hamburger.addEventListener('click', () => {
    ul.classList.toggle('open')
    hamburger.classList.toggle('hamanimation')
  })
};
// Add <div id='sticky-header'></div> and <script src="../js/animatedheader/stickyAnimatedHeader.js"></script>
// import the js file into vue (boot-app) : import './js/animatedheader/stickyAnimatedHeader'
// and put in the entire nav-bar, you can then add the sticky class to the div so when you scroll down
// the navigation can adjust
