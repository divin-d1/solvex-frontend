import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logged in:", formData);
        navigate('/profile');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
                {/* Left Side - Illustration */}
                <div className="bg-[#e0e7ff] relative hidden md:flex items-center justify-center p-12">
                    <div className="absolute inset-0 bg-[#0825ff]/5"></div>
                    {/* Using the user provided image if possible, or a placeholder illu style */}
                    <div className="relative z-10 w-full max-w-xs">
                        {/* Assuming the image is reachable via /src/assets or public. 
                    If it's in src/assets it needs valid import. 
                    I'll assume it's imported or I use a similar style. 
                    The user said "image used is in login-signup.png in assets".
                    So I will try to import it.
                */}
                        <img src="/src/assets/login-signup.png" alt="Login Illustration" className="w-full h-auto object-contain drop-shadow-xl" />
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-12 md:p-16 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Sign In</h2>
                        <p className="text-slate-400 mb-10">Unlock your world.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-6 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-[#0825ff] focus:ring-1 focus:ring-[#0825ff] bg-slate-50/50 transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Password <span className="text-red-500">*</span></label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-6 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-[#0825ff] focus:ring-1 focus:ring-[#0825ff] bg-slate-50/50 transition-all"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full rounded-full bg-[#0825ff] hover:bg-blue-700 text-white py-4 text-lg shadow-lg shadow-blue-500/30 mt-4">
                                Sign In
                            </Button>

                            <Link to="/register">
                                <Button type="button" variant="secondary" size="lg" className="w-full rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 py-4 mt-3">
                                    Create an account
                                </Button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
