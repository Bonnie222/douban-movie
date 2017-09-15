import Vue from 'vue'
import Router from 'vue-router'

//import Hello from '@/components/Hello'
import Movie_Hot from '@/components/movie-hot/movie-hot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/movie-hot'
    },
    {
      path: '/movie-hot',
      component: Movie_Hot
    }
  ]
})
