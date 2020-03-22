import * as singleSpa from "single-spa";

singleSpa.registerApplication(
  "micro-frontends-layout",
  () => import("micro-frontends-layout"),
  location => location.pathname.startsWith("/")
);

singleSpa.start();
