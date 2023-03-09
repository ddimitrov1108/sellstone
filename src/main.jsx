import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./scss/index.scss";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey="6LeZJukkAAAAAHiTlAkxJilQ6ywJnNSIIOzu3iAD"
      scriptProps={{
        async: true, // optional, default to false,
        defer: false, // optional, default to false
        appendTo: "head", // optional, default to "head", can be "head" or "body",
        nonce: undefined, // optional, default undefined
      }}
    >
      <RouterProvider router={router} />
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
