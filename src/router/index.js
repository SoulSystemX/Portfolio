import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Games from '@/views/Games';
import Art from '@/views/Art';
import About from '@/views/About';
import Websites from '@/views/Websites';
import Blog from '@/views/Blog';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dd-home',
      component: Home
    },
    {
      path: '/games',
      name: 'dd-home',
      component: Home
    },
    {
      path: '/art',
      name: 'dd-home',
      component: Home
    },
    {
      path: '/about',
      name: 'dd-home',
      component: Home
    },
    // {
    //   path: "/blog",
    //   name: "dd-blog",
    //   component: Home
    // },
    {
      path: '/websites',
      name: 'dd-websites',
      component: Home
    }
    //, 
    // {
    //   path: '/post/:id',
    //   name: 'dd-post',
    //   component: Post,
    //   props: true
    // }
  ]
})
