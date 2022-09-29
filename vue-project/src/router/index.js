import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReviewVueView from '../views/ReviewVueView.vue'
import SeriesFormView from '../views/SeriesFormView.vue'
import SeriesListView from '../views/SeriesListView.vue'
import EditFormView from '../views/EditFormView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/review',
      name: 'reviewVueView',
      component: ReviewVueView
    },
    {
      path: '/series-form',
      name: 'SeriesForm',
      component: SeriesFormView
    },
    {
      path: '/series-list',
      name: 'SeriesList',
      component: SeriesListView
    },
    {
      path: '/edit-series',
      name: 'EditSeries',
      component: EditFormView
    },
  ]
})

export default router
