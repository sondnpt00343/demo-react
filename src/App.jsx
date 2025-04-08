import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "@/components/AppRoutes";
import ScrollTop from "@/components/ScrollTop";
import "@/App.css";

function App() {
    return (
        <Router>
            <ScrollTop />
            <AppRoutes />
        </Router>
    );
}

export default App;
