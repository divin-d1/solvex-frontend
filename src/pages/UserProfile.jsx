import React from 'react';
import { User, Settings, Eye, Zap, CheckCircle, Lock, Globe } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';

// Dummy Data
const USER_DATA = {
    fullName: "Alex Developer",
    email: "alex@example.com",
    role: "INNOVATOR",
    joined: "January 2024",
    stats: {
        impressions: "12.5k",
        solutions: 8,
        impactScore: 92
    },
    projects: [
        {
            id: 1,
            name: "EcoTrack",
            description: "A mobile app that gamifies carbon footprint reduction for individuals.",
            visibility: "PUBLIC",
            status: "Active",
            views: 1240,
            likes: 45,
            comments: 12
        },
        {
            id: 2,
            name: "Stealthy AI",
            description: "Private research project for AI ethics.",
            visibility: "PRIVATE",
            status: "Draft",
            views: 5,
            likes: 0,
            comments: 0
        }
    ]
};

const UserProfile = () => {
    const user = USER_DATA;

    return (
        <div className="container py-8 max-w-6xl mx-auto px-4">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="h-24 w-24 rounded-full bg-[#0825ff]/10 flex items-center justify-center text-[#0825ff] border-4 border-white shadow-lg">
                    <User size={40} />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-2xl font-bold text-slate-900 mb-1">{user.fullName}</h1>
                    <p className="text-slate-500 mb-3">{user.email}</p>
                    <div className="flex justify-center md:justify-start gap-2">
                        <Badge variant="primary">{user.role}</Badge>
                        <span className="text-sm text-slate-400 py-0.5">Joined {user.joined}</span>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button variant="secondary" size="sm">
                        <Settings size={16} /> Settings
                    </Button>
                </div>
            </div>

            {/* Analytics Overview - Innovator Only */}
            {user.role === 'INNOVATOR' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <Card className="flex items-center gap-4 border-l-4 border-l-indigo-500">
                        <div className="h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                            <Eye size={24} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-sm font-medium">Total Impressions</p>
                            <h3 className="text-2xl font-bold text-slate-900">{user.stats.impressions}</h3>
                        </div>
                    </Card>

                    <Card className="flex items-center gap-4 border-l-4 border-l-emerald-500">
                        <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                            <Zap size={24} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-sm font-medium">Problems Solved</p>
                            <h3 className="text-2xl font-bold text-slate-900">{user.stats.solutions}</h3>
                        </div>
                    </Card>

                    <Card className="flex items-center gap-4 border-l-4 border-l-amber-500">
                        <div className="h-12 w-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                            <CheckCircle size={24} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-sm font-medium">Impact Score</p>
                            <h3 className="text-2xl font-bold text-slate-900">{user.stats.impactScore}</h3>
                        </div>
                    </Card>
                </div>
            )}

            {/* Projects Management */}
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">My Projects</h2>
                    <Button size="sm">Manage All</Button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                                <th className="p-4">Project Name</th>
                                <th className="p-4 text-center">Status</th>
                                <th className="p-4 text-center">Visibility</th>
                                <th className="p-4 text-right">Engagement</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {user.projects.length > 0 ? (
                                user.projects.map(project => (
                                    <tr key={project.id} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4">
                                            <p className="font-bold text-slate-800">{project.name}</p>
                                            <p className="text-xs text-slate-500 line-clamp-1 max-w-xs">{project.description}</p>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${project.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-1 text-xs font-medium text-slate-600">
                                                {project.visibility === 'PUBLIC' ? <Globe size={14} /> : <Lock size={14} />}
                                                {project.visibility}
                                            </div>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex flex-col items-end gap-1 text-xs text-slate-500">
                                                <span>{project.views} views</span>
                                                <span>{project.likes} likes</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-right">
                                            <Button variant="ghost" size="sm" className="text-[#0825ff] hover:text-blue-700 hover:bg-blue-50">Edit</Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-slate-400">
                                        No projects found. Submit your first solution!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
