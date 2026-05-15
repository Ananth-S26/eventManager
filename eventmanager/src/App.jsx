import Home from "./pages/Home";
import AdminDashboard from "./pages/admin/AdminDashboard";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import "./App.css";

/* LAYOUT */

function Layout() {

  const location = useLocation();

  const isAdminPage =
    location.pathname.startsWith("/admin");

  return (
    <>

      {/* HIDE NAVBAR IN ADMIN */}
      {!isAdminPage && <Navbar />}

      <Routes>

        {/* USER PAGE */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ADMIN PAGE */}
        <Route
          path="/admin/admindashboard"
          element={<AdminDashboard />}
        />

      </Routes>

      {/* HIDE FOOTER IN ADMIN */}
      {!isAdminPage && <Footer />}

    </>
  );
}

function App() {

  return (

    <BrowserRouter>

      <Layout />

    </BrowserRouter>

  );

}

export default App;