import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Store from "./store.jsx";
import { AuthProvider } from "./auth/Authcontext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Provider store={Store}>
        <AuthProvider> {/* ✅ Wrap your app in AuthProvider */}
          <App />
        </AuthProvider>
      </Provider>
  </StrictMode>
);
