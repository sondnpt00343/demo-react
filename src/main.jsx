import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "@/App";
import { persistor, store } from "./store";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </ReduxProvider>
);
