import { createRouter, createWebHistory } from "vue-router";

// Default Pages
import Dashboard from "@/views/Dashboard.vue";
import MinerInfo from "@/views/MinerInfo.vue";
import MinerPaymentInfo from "@/views/MinerPaymentInfo";
import GeneralInfo from "@/views/GeneralInfo";
// Component Pages
import Valert from "../views/components/alert.vue";
import Vaccrodion from "../views/components/accordion.vue";
import Vbadges from "../views/components/badges.vue";
import Vbreadcumb from "../views/components/breadcumbs.vue";
import Vbutton from "../views/components/button.vue";
import Vcard from "../views/components/card.vue";
var appname = " - Hellonovo";

const routes = [
  // Routes
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { title: "Dashboard " + appname },
  },
  {
    path: "/miner-info",
    name: "Miner's Info",
    component: MinerInfo,
    meta: { title: "Miner Info " + appname },
  },
  {
    path: "/miner-payment-info",
    name: "Miner's Payment Info",
    component: MinerPaymentInfo,
    meta: { title: "Miner's Payment Info " + appname },
  },
  {
    path: "/general-info",
    name: "General Info",
    component: GeneralInfo,
    meta: { title: "General Info " + appname },
  },

  // Components based Routes
  {
    path: "/component/alert",
    name: "Valert",
    component: Valert,
    meta: { title: "Alert" + appname },
  },
  {
    path: "/component/accordion",
    name: "Vaccordion",
    component: Vaccrodion,
    meta: { title: "Accordion" + appname },
  },
  {
    path: "/component/badge",
    name: "Vbadge",
    component: Vbadges,
    meta: { title: "Badge" + appname },
  },
  {
    path: "/component/breadcumb",
    name: "Vbreadcumb",
    component: Vbreadcumb,
    meta: { title: "Breadcumb" + appname },
  },
  {
    path: "/component/button",
    name: "Vbutton",
    component: Vbutton,
    meta: { title: "Button" + appname },
  },
  {
    path: "/component/card",
    name: "Vcard",
    component: Vcard,
    meta: { title: "Card" + appname },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
