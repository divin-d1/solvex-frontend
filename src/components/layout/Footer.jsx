import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Rocket } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 bg-slate-50 relative z-10">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-12 md:p-16 relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Left Side: Brand */}
                        <div className="space-y-6">
                            <Link to="/" className="flex items-center gap-2 group">
                                <Rocket size={24} className="text-slate-900" />
                                <span className="text-xl font-bold text-slate-900 tracking-tight">
                                    SolveX™
                                </span>
                            </Link>
                            <p className="text-slate-900 max-w-sm text-sm leading-relaxed">
                                We offer a platform to solve real-world problems through community innovation and collaboration. From local fixes to global challenges.
                            </p>
                            <div className="flex items-center gap-4 pt-2">
                                <a href="#" className="bg-white text-slate-900 hover:bg-slate-900 hover:text-white border border-slate-200 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm">
                                    <Instagram size={16} />
                                </a>
                                <a href="#" className="bg-white text-slate-900 hover:bg-slate-900 hover:text-white border border-slate-200 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm">
                                    <Facebook size={16} />
                                </a>
                                <a href="#" className="bg-white text-slate-900 hover:bg-slate-900 hover:text-white border border-slate-200 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm">
                                    <Twitter size={16} />
                                </a>
                                <a href="#" className="bg-white text-slate-900 hover:bg-slate-900 hover:text-white border border-slate-200 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm">
                                    <Youtube size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Links */}
                        <div className="grid grid-cols-2 gap-8 text-slate-900">
                            <div>
                                <h4 className="font-bold mb-6 text-sm">Extra links</h4>
                                <ul className="space-y-4 text-sm font-medium">
                                    <li><Link to="/" className="hover:underline">Home</Link></li>
                                    <li><Link to="/problems" className="hover:underline">Problems</Link></li>
                                    <li><Link to="/projects" className="hover:underline">Projects</Link></li>
                                    <li><Link to="#" className="hover:underline">Our team</Link></li>
                                    <li><Link to="#" className="hover:underline">About Us</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-6 text-sm">Contact</h4>
                                <ul className="space-y-4 text-sm font-medium">
                                    <li>123 Example Road<br />New York, NY 12345</li>
                                    <li><a href="mailto:email@example.com" className="hover:underline">email@example.com</a></li>
                                    <li>(555) 555-5555</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
