import Vue from 'vue'
import Router from 'vue-router'

//import Hello from '@/components/Hello'
import Movie_Hot from '@/components/movie-hot/movie-hot'
import Movie_Detail from '@/components/movie-detail/movie-detail'
import Search from '@/components/search/search'

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
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/movie/:movieid',
      component:Movie_Detail,
      children:[
        // {
        //   path:'review/:reviewId',
        //   component:ReviewDetail
        // },
        // {
        //   path: ':discussType',
        //   component: AllDiscussion
        // }
      ]
    }
  ]
})
