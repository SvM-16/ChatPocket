import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PockiProvider } from "./Context/ChatContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PockiProvider>
      <App />
    </PockiProvider>
  </React.StrictMode>
);

