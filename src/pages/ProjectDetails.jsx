import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Heart, Flag, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import CommentSection from '../components/projects/CommentSection';

// Dummy Data
const PROJECT_DATA = {
    id: 1,
    name: "EcoTrack",
    description: "A mobile app that gamifies carbon footprint reduction for individuals by tracking daily activities and offering eco-friendly alternatives. It connects with smart home devices to monitor real-time energy usage.",
    usefulLinks: "https://github.com/example/ecotrack, https://ecotrack.demo",
    visibility: "PUBLIC",
    owner: { fullName: "Jane Doe", email: "jane@example.com" },
    likes: 45,
    createdAt: "2024-03-20",
    problem: { id: 1, title: "Global Warming Solution" },
    comments: [
        { id: 1, author: "Alice Smith", content: "This looks amazing! Have you considered adding a leaderboard feature?", date: "2 days ago" },
        { id: 2, author: "Bob Jones", content: "Great UI. I'd love to contribute to the backend.", date: "1 day ago" }
    ]
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = PROJECT_DATA;

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Link to={`/problems/${project.problem.id}`} className="inline-flex items-center text-slate-500 hover:text-[#0825ff] mb-6 transition-colors">
                <ArrowLeft size={16} className="mr-1" /> Back to Problem
            </Link>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
                <div className="h-48 bg-slate-50 flex items-center justify-center border-b border-slate-100">
                    <h1 className="text-4xl font-bold text-slate-900 tracking-tight">{project.name}</h1>
                </div>

                <div className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                By {project.owner.fullName}
                                <Badge variant="neutral">Innovator</Badge>
                            </h2>
                            <p className="text-slate-500 text-sm mt-1">Solving: <Link to={`/problems/${project.problem.id}`} className="text-[#0825ff] hover:underline">{project.problem.title}</Link></p>
                        </div>

                        <div className="flex gap-2">
                            <Button variant="secondary" size="sm" className="gap-2">
                                <Heart size={18} className="text-pink-500" /> Like ({project.likes})
                            </Button>
                            <Button variant="ghost" size="sm" className="text-slate-400">
                                <Flag size={18} />
                            </Button>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none text-slate-700 mb-8">
                        <h3 className="text-lg font-bold text-slate-900">Project Description</h3>
                        <p>{project.description}</p>
                    </div>

                    {project.usefulLinks && (
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                            <h4 className="font-semibold text-sm text-slate-700 mb-2 uppercase tracking-wide">Useful Links</h4>
                            <div className="flex flex-col gap-2">
                                {project.usefulLinks.split(',').map((link, i) => (
                                    <a key={i} href={link.trim()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#0825ff] hover:underline">
                                        <ExternalLink size={14} className="mr-2" /> {link.trim()}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <CommentSection comments={project.comments} />
        </div>
    );
};

export default ProjectDetails;
