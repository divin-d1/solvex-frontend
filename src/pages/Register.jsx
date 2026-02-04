import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ fullName: '', email: '', password: '', role: 'USER' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registered:", formData);
        navigate('/profile');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
                {/* Left Side - Illustration */}
                <div className="bg-[#e0e7ff] relative hidden md:flex items-center justify-center p-12 order-2 md:order-1">
                    <div className="absolute inset-0 bg-[#0825ff]/5"></div>
                    <div className="relative z-10 w-full max-w-xs">
                        <img src="/src/assets/login-signup.png" alt="Signup Illustration" className="w-full h-auto object-contain drop-shadow-xl" />
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-12 md:p-16 flex flex-col justify-center order-1 md:order-2">
                    <div className="max-w-md mx-auto w-full">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Join SolveX</h2>
                        <p className="text-slate-400 mb-8">Start your journey today.</p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Full Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-6 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-[#0825ff] focus:ring-1 focus:ring-[#0825ff] bg-slate-50/50 transition-all"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    required
                                />
                            </div>

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
                                    placeholder="Create a password"
                                    className="w-full px-6 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-[#0825ff] focus:ring-1 focus:ring-[#0825ff] bg-slate-50/50 transition-all"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full rounded-full bg-[#0825ff] hover:bg-blue-700 text-white py-4 text-lg shadow-lg shadow-blue-500/30 mt-4">
                                Sign Up
                            </Button>

                            <div className="mt-6 text-center text-sm text-slate-500">
                                Already have an account?{' '}
                                <Link to="/login" className="text-[#0825ff] font-bold hover:underline">
                                    Sign In
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
