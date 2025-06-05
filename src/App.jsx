import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PlansPage from "./pages/PlansPage"; // Nova página de Planos
import Tools from "./pages/Tools";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import LegalPrivacy from "./pages/LegalPrivacy";
import LegalTerms from "./pages/LegalTerms";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CitiesPage from "./pages/destinations/CitiesPage";
import ArticlePage from "./blog/ArticlePage"; 
import EditorDashboard from "./pages/admin/EditorDashboard";
import CriadorDeSonhosPage from "./pages/tools/CriadorDeSonhosPage"; // Nova rota
import Dash1Page from "./pages/Dash1Page"; // Dashboard para acesso free sem qualify
import Dash2Page from "./pages/Dash2Page"; // Dashboard para acesso free COM qualify
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-silver font-figtree">
        <Header />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/criador-de-sonhos" element={<CriadorDeSonhosPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/legal/privacy" element={<LegalPrivacy />} />
            <Route path="/legal/terms" element={<LegalTerms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/destinations" element={<CitiesPage />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            <Route path="/admin/dashboard" element={<EditorDashboard />} /> {/* Rota do Painel do Editor */}
            <Route path="/dash1" element={<Dash1Page />} />
            <Route path="/dash2" element={<Dash2Page />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
