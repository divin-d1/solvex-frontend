import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import ProblemCard from '../components/problems/ProblemCard';

// Dummy Data
const ALL_PROBLEMS = [
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
    },
    {
        id: 4,
        title: "Educational Equity",
        description: "Platform to connect volunteer tutors with underprivileged students in remote areas.",
        createdAt: "2024-03-18",
        solutionCount: 20
    },
    {
        id: 5,
        title: "Renewable Energy Storage",
        description: "New battery technologies for storing solar energy efficiently.",
        createdAt: "2024-03-20",
        solutionCount: 3
    },
    {
        id: 6,
        title: "Smart Waste Management",
        description: "IoT sensors for optimizing garbage collection routes.",
        createdAt: "2024-03-21",
        solutionCount: 7
    },
    {
        id: 7,
        title: "Remote Healthcare",
        description: "Telemedicine platform for rural areas with low bandwidth.",
        createdAt: "2024-03-22",
        solutionCount: 15
    },
    {
        id: 8,
        title: "Digital Literacy",
        description: "Gamified learning for seniors to adapt to modern technology.",
        createdAt: "2024-03-23",
        solutionCount: 4
    },
    {
        id: 9,
        title: "Food Waste Reduction",
        description: "App connecting restaurants with food banks.",
        createdAt: "2024-03-24",
        solutionCount: 22
    },
    {
        id: 10,
        title: "Ocean Plastic Cleanup",
        description: "Autonomous drone swarms for collecting ocean plastic.",
        createdAt: "2024-03-25",
        solutionCount: 9
    },
    {
        id: 11,
        title: "Affordable Housing",
        description: "Modular construction techniques for low-cost housing.",
        createdAt: "2024-03-28",
        solutionCount: 6
    },
    {
        id: 12,
        title: "Mental Health Support",
        description: "AI chatbot for initial mental health screening and support.",
        createdAt: "2024-03-30",
        solutionCount: 18
    },
    {
        id: 13,
        title: "Sustainable Agriculture",
        description: "Vertical farming solutions for urban environments.",
        createdAt: "2024-04-01",
        solutionCount: 10
    },
    {
        id: 14,
        title: "Disaster Preparedness",
        description: "Early warning systems for natural disasters using satellite imagery.",
        createdAt: "2024-04-03",
        solutionCount: 14
    },
    {
        id: 15,
        title: "Elderly Care Innovation",
        description: "Robotics for assisting elderly with daily tasks and companionship.",
        createdAt: "2024-04-05",
        solutionCount: 7
    }
];

const ProblemsList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProblems = ALL_PROBLEMS.filter(problem =>
        problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        problem.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container py-12 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div className="flex justify-between items-center w-full md:w-auto mb-4 md:mb-0">
                    <h1 className="text-3xl font-bold text-slate-900">Explore Problems</h1>
                    <Link to="/problems/new" className="md:hidden">
                        <Button variant="primary" className="bg-[#0825ff] hover:bg-blue-700 text-white">
                            <Plus size={18} /> Post Problem
                        </Button>
                    </Link>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search problems..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0825ff]/20 focus:border-[#0825ff] transition-all font-sans"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Link to="/problems/new">
                        <Button>
                            <Plus size={18} /> Post Problem
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProblems.length > 0 ? (
                    filteredProblems.map(problem => (
                        <ProblemCard key={problem.id} problem={problem} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                        <p className="text-slate-500 mb-2">No problems found matching "{searchTerm}"</p>
                        <Button variant="ghost" onClick={() => setSearchTerm('')}>Clear Search</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProblemsList;
