import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const ProjectCard = ({ project }) => {
    return (
        <Card hover className="h-full flex flex-col relative group">
            <Link to={`/projects/${project.id}`} className="absolute inset-0 z-10" />
            <div className="mb-3">
                <div className="flex justify-between items-start mb-2">
                    {/* Placeholder for project thumbnail if needed, keeping it text-first for now */}


                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-[#0825ff] transition-colors">{project.name}</h3>
                <p className="text-xs text-[#0825ff] mb-3 font-medium relative z-20 w-fit">@{project.owner.fullName}</p>
                <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                    {project.description}
                </p>
            </div>

            <div className="mt-auto flex items-center justify-between text-slate-500">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-xs">
                        <span className="font-medium">{project.likes || 0} Likes</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                        <span className="font-medium">{project.comments || 0} Comments</span>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;
