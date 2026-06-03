import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "../components/HomeComponent.vue";
import AboutusComponent from "../components/AboutusComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";
import Registration from "../components/Registration.vue";

const routes = [
  { path: "/", name: "Home", component: HomeComponent },
  { path: "/about", name: "About", component: AboutusComponent },
  { path: "/registration", name: "Registration", component: Registration },
  { path: "/contact", name: "Contact", component: ContactComponent },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});