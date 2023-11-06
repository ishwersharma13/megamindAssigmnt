import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import VendorRegistration from "./components/VendorRegistration";
import VendorLogin from "./components/VendorLogin";
import Store from "./components/Store";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPage from "./components/BlogPage";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="register" element={<VendorRegistration />} />
          <Route path="login" element={<VendorLogin />} />
          <Route path="store" element={<Store />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<VendorLogin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
