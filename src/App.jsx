import { BrowserRouter as Router } from "react-router-dom";

import ScrollTop from "@/components/ScrollTop";
import AppRoutes from "@/components/AppRoutes";
import "./App.css";

// 1. Multiple layouts
// 2. Protected route
// 3. FontAwesome Icon

// Bài tập tại lớp:
// 1. Xây dựng logic multiple layouts
// 2. Tạo thêm 2 layouts mới:
//      1. NoHeaderLayout
//      2. NoFooterLayout
// 3. Áp dụng mỗi layout vào mỗi page và demo được

function App() {
    return (
        <Router>
            <ScrollTop />
            <AppRoutes />
        </Router>
    );
}

export default App;
