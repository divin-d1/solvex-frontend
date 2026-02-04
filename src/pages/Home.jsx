import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import ProblemCard from '../components/problems/ProblemCard';
import ProjectCard from '../components/projects/ProjectCard';

// Dummy Data
const FEATURED_PROBLEMS = [
    {
        id: 1,
        title: "Global Warming Solution",
        description: "Looking for innovative ideas to reduce carbon footprint in urban areas using IoT and AI.",
        createdAt: "2024-03-10",
        solutionCount: 12
    },
    {
        id: 2,
        title: "Clean Water Access",
        description: "Developing a low-cost filtration system for rural communities with limited access to electricity.",
        createdAt: "2024-03-12",
        solutionCount: 5
    },
    {
        id: 3,
        title: "Sustainable Packaging",
        description: "Alternatives to single-use plastics in the food delivery industry.",
        createdAt: "2024-03-15",
        solutionCount: 8
    }
];

const RECENT_PROJECTS = [
    {
        id: 1,
        name: "EcoTrack",
        description: "A mobile app that gamifies carbon footprint reduction for individuals.",
        visibility: "PUBLIC",
        owner: { fullName: "Jane Doe" },
        likes: 45,
        comments: 12,
        link: "#"
    },
    {
        id: 2,
        name: "PureFlow",
        description: "Solar-powered water purification unit for remote villages.",
        visibility: "PUBLIC",
        owner: { fullName: "John Smith" },
        likes: 32,
        comments: 8,
        link: "#"
    },
    {
        id: 3,
        name: "GreenBox",
        description: "Biodegradable takeout containers made from agricultural waste.",
        visibility: "PUBLIC",
        owner: { fullName: "Alice Johnson" },
        likes: 28,
        comments: 15,
        link: "#"
    },
    {
        id: 4,
        name: "Urban Harvest",
        description: "Vertical farming modules for city apartments.",
        visibility: "PRIVATE",
        owner: { fullName: "Bob Wilson" },
        likes: 10,
        comments: 2,
        link: "#"
    }
];

const Home = () => {
    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden w-full">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white"></div>
                <div className="max-w-4xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-white text-[#0825ff] text-sm font-medium mb-8 shadow-sm border border-slate-100">
                            <Sparkles size={14} /> transform ideas into impact
                        </span>
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Solve Real Problems.</span><br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600">Build the Future.</span>
                        </h1>
                        <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Connect with innovators, submit your projects, and collaborate on solutions that matter.
                            The world is waiting for your next big idea.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <Link to="/problems">
                                <Button size="lg" className="shadow-xl shadow-[#0825ff]/20 bg-[#0825ff] hover:bg-blue-700 text-white border-0">
                                    Explore Problems
                                </Button>
                            </Link>
                            <Link to="/submit-project/new"> {/* Placeholder, usually needs problem ID */}
                                <Button size="lg" variant="secondary" className="border-slate-200">
                                    Submit Project <ArrowRight size={18} />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats / Social Proof */}
            <section className="w-full border-y border-slate-100 bg-white/50 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 py-12 px-4">
                    {[
                        { label: "Innovators", value: "2k+" },
                        { label: "Problems Solved", value: "150+" },
                        { label: "Active Projects", value: "300+" },
                        { label: "Countries", value: "25+" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Problems */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-3 text-slate-900">Featured Problems</h2>
                        <p className="text-slate-500 text-lg">Challenges that need your attention right now.</p>
                    </div>
                    <Link to="/problems">
                        <Button variant="ghost" className="text-[#0825ff] hover:bg-blue-50">View All Problems <ArrowRight size={16} /></Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURED_PROBLEMS.map(problem => (
                        <ProblemCard key={problem.id} problem={problem} />
                    ))}
                </div>
            </section>

            {/* Recent Projects */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-3 text-slate-900">Recent Submissions</h2>
                        <p className="text-slate-500 text-lg">See what others are building in public.</p>
                    </div>
                    <Link to="/projects">
                        <Button variant="ghost" className="text-[#0825ff] hover:bg-blue-50">View All Projects <ArrowRight size={16} /></Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {RECENT_PROJECTS.filter(p => p.visibility === 'PUBLIC').map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>


        </div>
    );
};

export default Home;
