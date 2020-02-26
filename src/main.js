import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Home from "@/views/home";
import Settings from "@/views/settings";
import SettingsRight from "@/views/settings-right";
import Feedback from "@/components/settings/feedback";
import PersonalizeMenu from "@/components/settings/personalize-menu";
import PersonalizeLayout from "@/components/settings/personalize-layout";
import PersonalizeTheme from "@/components/settings/personalize-theme";

import SettingsMenu from "@/components/settings/settings-menu";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Home },
    {
      path: "/settings",
      name: "settings",
      redirect: { name: "personalize" },
      component: Settings,
      children: [
        {
          path: "personalize",
          name: "personalize",
          redirect: { name: "layout" },
          components: {
            left: SettingsMenu,
            right: SettingsRight
          },
          children: [
            {
              path: "layout",
              name: "layout",
              components: {
                "top-right": PersonalizeMenu,
                "bottom-right": PersonalizeLayout
              }
            },
            {
              path: "theme",
              name: "theme",
              components: {
                "top-right": PersonalizeMenu,
                "bottom-right": PersonalizeTheme
              }
            }
          ]
        },
        {
          path: "feedback",
          name: "feedback",
          components: {
            left: SettingsMenu,
            right: Feedback
          }
        }
      ]
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

//preferences
//  theme black blue
//  layout list detail
//
//general
//  feedback
//  --
