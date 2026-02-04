import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';

const CreateProblem = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Creating Problem:", formData);
        // Simulate API call
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent" onClick={() => navigate(-1)}>
                <ArrowLeft size={16} /> Cancel
            </Button>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-slate-800">Post a New Problem</h1>
                    <p className="text-slate-500">Describe a real-world challenge for innovators to solve.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Problem Title"
                        name="title"
                        placeholder="e.g. Sustainable Packaging Solution"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />

                    <TextArea
                        label="Description"
                        name="description"
                        placeholder="Explain the problem in detail. What are the constraints? What is the desired outcome?"
                        value={formData.description}
                        onChange={handleChange}
                        rows={6}
                        required
                    />

                    <div className="pt-4 flex justify-end">
                        <Button type="submit" size="lg" className="w-full sm:w-auto">
                            <Plus size={18} /> Post Problem
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProblem;
