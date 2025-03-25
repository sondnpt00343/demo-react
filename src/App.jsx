import { BrowserRouter as Router } from "react-router-dom";

import ScrollTop from "@/components/ScrollTop";
import AppRoutes from "@/components/AppRoutes";
import "./App.css";

function App() {
    return (
        <Router>
            <ScrollTop />
            <AppRoutes />
        </Router>
    );
}

export default App;
