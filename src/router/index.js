import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import MappingView from '../views/MappingView.vue';
import NewsView from '../views/NewsView.vue';
import OutputView from '../views/OutputView.vue';
import PartnerView from '../views/PartnerView.vue';
import ResourceView from '../views/ResourceView.vue';
import DevelopmentView from '../views/DevelopmentView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/mapping', name: 'mapping', component: MappingView },
    { path: '/news', name: 'news', component: NewsView },
    { path: '/outputs', name: 'outputs', component: OutputView },
    { path: '/partners', name: 'partners', component: PartnerView },
    { path: '/resources', name: 'resources', component: ResourceView },
    { path: '/dev', name: 'development', component: DevelopmentView },
  ],
});

export default router;
