import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Layout from "./components/Layout";
import ComingSoon from "./pages/ComingSoon";
function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="*" element={<ComingSoon />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
