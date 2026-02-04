import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const ProblemCard = ({ problem }) => {
    return (
        <Card hover className="h-full flex flex-col relative group">
            <Link to={`/problems/${problem.id}`} className="absolute inset-0 z-10" />
            <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                    <Badge variant="neutral">Problem</Badge>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar size={12} /> {problem.createdAt}
                    </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-[#0825ff] transition-colors">{problem.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-grow">
                    {problem.description}
                </p>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between relative z-20">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Users size={14} />
                    <span>{problem.solutionCount || 0} solutions</span>
                </div>
                <div className="flex gap-2">
                    <Link to={`/submit-project/${problem.id}`}>
                        <Button variant="primary" size="sm" className="h-8 px-3 text-xs bg-[#0825ff] hover:bg-blue-700 text-white">
                            Solve
                        </Button>
                    </Link>
                    <Link to={`/problems/${problem.id}`}>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                            <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default ProblemCard;
