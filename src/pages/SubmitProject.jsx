import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Link as LinkIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';

const SubmitProject = () => {
    const { problemId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        visibility: 'PUBLIC',
        usefulLinks: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Project:", { ...formData, problemId });
        // Simulate API call
        setTimeout(() => {
            navigate('/problems/' + problemId);
        }, 1000);
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent" onClick={() => navigate(-1)}>
                <ArrowLeft size={16} /> Cancel
            </Button>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-slate-800">Submit Your Solution</h1>
                    <p className="text-slate-500">Share your innovation with the world.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Project Name"
                        name="name"
                        placeholder="e.g. EcoTrack"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <TextArea
                        label="Description"
                        name="description"
                        placeholder="Describe your solution in detail..."
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />

                    <TextArea
                        label="Useful Links"
                        name="usefulLinks"
                        placeholder="GitHub Repo, Demo URL (comma separated)"
                        value={formData.usefulLinks}
                        onChange={handleChange}
                    />

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-700">Visibility</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="visibility"
                                    value="PUBLIC"
                                    checked={formData.visibility === 'PUBLIC'}
                                    onChange={handleChange}
                                    className="text-[#0825ff] focus:ring-[#0825ff]"
                                />
                                <span className="text-sm text-slate-700">Public</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="visibility"
                                    value="PRIVATE"
                                    checked={formData.visibility === 'PRIVATE'}
                                    onChange={handleChange}
                                    className="text-[#0825ff] focus:ring-[#0825ff]"
                                />
                                <span className="text-sm text-slate-700">Private</span>
                            </label>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button type="submit" size="lg" className="w-full sm:w-auto">
                            <Save size={18} /> Submit Project
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmitProject;
