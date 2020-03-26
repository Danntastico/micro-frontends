import * as singleSpa from "single-spa";
import "zone.js";

function appFilter(routes) {
  return function(location) {
    return routes.some(route => location.pathname === route);
  };
}

singleSpa.registerApplication(
  "micro-frontends-layout",
  () => import("micro-frontends-layout"),
  appFilter(["/"])
);

singleSpa.registerApplication(
  "todolist",
  () => import("micro-frontends-todolist"),
  appFilter(["/"])
);

singleSpa.registerApplication(
  "angularapp",
  () => import("micro-frontends-weather"),
  appFilter(["/"])
);
singleSpa.registerApplication(
  "login",
  () => import("micro-frontends-login"),
  appFilter(["/login"])
);

singleSpa.start();
