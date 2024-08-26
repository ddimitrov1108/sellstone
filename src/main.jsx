import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_CAPTCHA_KEY}
      scriptProps={{
        async: true,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <RouterProvider router={router} />
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
