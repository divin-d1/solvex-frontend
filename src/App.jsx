import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

const ConditionalNavbar = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register'];

  if (hideNavbarPaths.includes(location.pathname)) return null;
  return <Navbar />;
};
import ProblemDetails from './pages/ProblemDetails';
import ProjectDetails from './pages/ProjectDetails';
import CreateProblem from './pages/CreateProblem';
import ProblemsList from './pages/ProblemsList';
import ProjectsList from './pages/ProjectsList';
import SubmitProject from './pages/SubmitProject';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        {/* Hide Navbar on login/register pages - optional but cleaner for auth pages */}
        <ConditionalNavbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/problems" element={<ProblemsList />} />
              <Route path="/projects" element={<ProjectsList />} />
              <Route path="/problems/new" element={<CreateProblem />} />
              <Route path="/problems/:id" element={<ProblemDetails />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/submit-project/:problemId" element={<SubmitProject />} />
              <Route path="/submit-project" element={<Navigate to="/problems" replace />} />
              <Route path="/profile" element={<UserProfile />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
