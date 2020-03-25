import * as singleSpa from "single-spa";
import "zone.js";

singleSpa.registerApplication(
  "micro-frontends-layout",
  () => import("micro-frontends-layout"),
  location => location.pathname.startsWith("/")
);

singleSpa.registerApplication(
  "todolist",
  () => import("micro-frontends-todolist"),
  location => location.pathname.startsWith("/")
);

singleSpa.registerApplication(
  "angularapp",
  () => import("micro-frontends-weather"),
  location => location.pathname.startsWith("/")
);

singleSpa.start();
