import { createRouter, createWebHistory } from 'vue-router';

/* General
- Login / Register page
- Home page
- About page
- Development page
*/
const HomeView = () => import('../views/HomeView.vue');
const AboutView = () => import('../views/AboutView.vue');
const DevelopmentView = () => import('../views/DevelopmentView.vue');

/* Admin
  - Admin Main page
  - Add Exercise page
  - Add Exercise Plan page
  - Add Exercise History page
  - Add Exercise Statistic page
*/
const AdminView = () => import('../views/Admin/AdminView.vue');
const AdminAddExercise = () => import('../views/Admin/AdminAddExercise.vue');

/* Personal
- Profile page
- Statistic and progress page
- Exercise page
- Exercise history page
- Exercise plan page
*/
const PersonalView = () => import('../views/Personal/PersonalView.vue');
const ProfileView = () => import('../views/Personal/ProfileView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // General
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/dev', name: 'development', component: DevelopmentView },
    // Admin
    { path: '/admin', name: 'Admin', component: AdminView },
    { path: '/admin/addexercise', name: 'Adding Exercise', component: AdminAddExercise },
    // Personal
    { path: '/personal', name: 'Personal Pages', component: PersonalView },
    { path: '/personal/profile', name: 'My Profile', component: ProfileView },
  ],
});

export default router;
