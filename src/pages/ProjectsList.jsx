import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import ProjectCard from '../components/projects/ProjectCard';

// Dummy Data
const ALL_PROJECTS = [
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
    },
    {
        id: 5,
        name: "Smart HVAC Control",
        description: "AI-driven HVAC management system for skyscrapers.",
        visibility: "PUBLIC",
        owner: { fullName: "Tech Solutions Inc." },
        likes: 120,
        comments: 45,
        link: "#"
    },
    {
        id: 6,
        name: "Community Gardens",
        description: "Platform for organizing and managing local community gardens.",
        visibility: "PUBLIC",
        owner: { fullName: "Green Earth" },
        likes: 56,
        comments: 9,
        link: "#"
    },
    {
        id: 7,
        name: "Solarify",
        description: "Marketplace for affordable solar panels.",
        visibility: "PRIVATE",
        owner: { fullName: "Energy Plus" },
        likes: 5,
        comments: 1,
        link: "#"
    },
    {
        id: 8,
        name: "EduTech VR",
        description: "VR classrooms for immersive history lessons.",
        visibility: "PUBLIC",
        owner: { fullName: "Teacher Tom" },
        likes: 89,
        comments: 23,
        link: "#"
    },
    {
        id: 9,
        name: "MediDrone",
        description: "Drone delivery for emergency medical supplies.",
        visibility: "PUBLIC",
        owner: { fullName: "Health Wings" },
        likes: 145,
        comments: 34,
        link: "#"
    },
    {
        id: 10,
        name: "AgriSense",
        description: "Soil analysis using AI and satellite imagery.",
        visibility: "PUBLIC",
        owner: { fullName: "Farm Tech" },
        likes: 67,
        comments: 11,
        link: "#"
    }
];

const ProjectsList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // FILTER: Only show PUBLIC projects
    const publicProjects = ALL_PROJECTS.filter(p => p.visibility === 'PUBLIC');

    const filteredProjects = publicProjects.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container py-12 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div className="flex justify-between items-center w-full md:w-auto">
                    <h1 className="text-3xl font-bold text-slate-900">Discover Projects</h1>

                </div>
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0825ff]/20 focus:border-[#0825ff] transition-all font-sans"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                        <p className="text-slate-500 mb-2">No projects found matching "{searchTerm}"</p>
                        <Button variant="ghost" onClick={() => setSearchTerm('')}>Clear Search</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsList;
