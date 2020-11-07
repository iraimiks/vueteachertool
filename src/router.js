import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


let component3 = {
  template: `<div class="title">Page 3</div>`,
};

const router = new VueRouter({
  routes: [
    {
      path: "/searchtools",
      name: "SearchTool",
      component: () => import('./views/SearchTools.vue'),
    },
    {
      path: "/TeacherView",
      name: "Teacher View",
      component: () => import('./views/TeacherMainView.vue'),
    },
    {
      path: "/page3",
      name: "Page 3",
      component: component3,
    },
    { path: "*", redirect: "/page1" },
  ],
});

export default router;