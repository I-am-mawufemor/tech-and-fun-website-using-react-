import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Gallery from "./pages/gallery";
import Blog from "./pages/blog";
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
