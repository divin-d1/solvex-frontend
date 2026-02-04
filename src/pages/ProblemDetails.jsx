import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Plus } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProjectCard from '../components/projects/ProjectCard';

// Dummy Data (replace with API)
const PROBLEM_DATA = {
    id: 1,
    title: "Global Warming Solution",
    description: "Looking for innovative ideas to reduce carbon footprint in urban areas using IoT and AI. Specifically, we are interested in solutions that can monitor energy consumption in real-time and suggest optimizations for large commercial buildings.",
    createdAt: "2024-03-10",
    solutions: [
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
            id: 101, // Different ID
            name: "Smart HVAC Control",
            description: "AI-driven HVAC management system for skyscrapers.",
            visibility: "PUBLIC",
            owner: { fullName: "Tech Solutions Inc." },
            likes: 120,
            comments: 45,
            link: "#"
        }
    ]
};

const ProblemDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // In a real app, fetch data using id
    const problem = PROBLEM_DATA;

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent" onClick={() => navigate(-1)}>
                <ArrowLeft size={16} /> Back to Problems
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                        <div className="flex items-center gap-2 mb-4">
                            <Badge>Open Challenge</Badge>
                            <span className="text-slate-400 text-sm flex items-center gap-1">
                                <Calendar size={14} /> Posted on {problem.createdAt}
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-6">{problem.title}</h1>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p>{problem.description}</p>
                            {/* More dummy text for layout */}
                            <p className="mt-4">
                                We encourage submissions that utilize open-source technologies and provide scalable architectures.
                                The goal is to implement a pilot project within 6 months.
                            </p>
                        </div>
                    </section>

                    <section>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-slate-800">Submitted Solutions ({problem.solutions.length})</h2>
                            <Link to={`/submit-project/${id}`}>
                                <Button>
                                    <Plus size={18} /> Submit Solution
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {problem.solutions.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="project-card glass-panel p-6 sticky top-24">
                        <h3 className="font-bold text-lg mb-4">About this Context</h3>
                        <p className="text-sm text-slate-500 mb-6">
                            This problem is part of the "Sustainable Cities 2024" initiative.
                            Top solutions will receive mentorship and funding opportunities.
                        </p>
                        <Button className="w-full justify-center">Share Challenge</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemDetails;
