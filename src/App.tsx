import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PDFTo from "./pages/PDFTo";
import ToPDF from "./pages/ToPDF";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pdfo" element={<PDFTo />} />
                <Route path="/topdf" element={<ToPDF />} />
            </Routes>
        </Router>
    );
}

export default App;
