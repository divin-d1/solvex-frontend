import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Plus, User, LogIn } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
    const location = useLocation();
    const isAuthenticated = true; // Demo mode: Authenticated

    const NavLink = ({ to, children }) => {
        const isActive = location.pathname === to;
        return (
            <Link to={to} className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-[#0825ff] text-slate-600">
                {children}
                {isActive && (
                    <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0825ff] rounded-full"
                    />
                )}
            </Link>
        );
    };

    return (
        <nav className="sticky top-0 z-50 glass border-b border-[#0825ff]/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo - Align Left */}
                <Link to="/" className="flex items-center gap-2 group shrink-0">
                    <Rocket size={28} className="text-[#0825ff] transition-transform group-hover:scale-110" />
                    <span className="text-2xl font-bold text-slate-900 tracking-tight">
                        SolveX
                    </span>
                </Link>

                {/* Links - Centered Absolute? Or just mx-auto. 
            "Position the navbar in the middle" - I will center the links block in the available space.
        */}
                <div className="hidden md:flex items-center gap-8 bg-white/80 px-8 py-2.5 rounded-full border border-[#0825ff]/10 shadow-sm backdrop-blur-md absolute left-1/2 -translate-x-1/2">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/problems">Problems</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                </div>

                {/* Actions - Align Right */}
                <div className="flex items-center gap-4 shrink-0">
                    {isAuthenticated ? (
                        <>
                            <Link to="/problems/new" className="hidden sm:block">
                                <Button size="sm" variant="ghost" className="text-slate-600 hover:text-[#0825ff]">
                                    <Plus size={18} />
                                    <span>Post Problem</span>
                                </Button>
                            </Link>
                            <Link to="/profile">
                                <div className="h-10 w-10 rounded-full bg-[#0825ff]/5 flex items-center justify-center text-[#0825ff] font-bold border border-[#0825ff]/20 cursor-pointer hover:bg-[#0825ff]/10 transition-colors shadow-sm">
                                    <User size={20} />
                                </div>
                            </Link>
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link to="/login">
                                <Button size="sm" variant="ghost">Log In</Button>
                            </Link>
                            <Link to="/register">
                                <Button size="sm" className="bg-[#0825ff] hover:bg-blue-700 text-white border-0 shadow-md shadow-blue-500/20">Get Started</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
