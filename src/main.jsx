import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CustomConnectorProvider from "./context/WalletConnectProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomConnectorProvider>
      <App />
    </CustomConnectorProvider>
  </React.StrictMode>
);
