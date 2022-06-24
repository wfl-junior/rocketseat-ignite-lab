import "src/styles/global.css";
import "src/yup/config";

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "src/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
