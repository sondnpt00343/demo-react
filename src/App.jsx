import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "@/components/AppRoutes";
import ScrollTop from "@/components/ScrollTop";
import UserProvider from "./components/UserProvider";
import "@/App.css";

function App() {
    return (
        <Router>
            <ScrollTop />
            <UserProvider />
            <AppRoutes />
        </Router>
    );
}

export default App;
