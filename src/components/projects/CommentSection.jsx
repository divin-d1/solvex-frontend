import React, { useState } from 'react';
import { User } from 'lucide-react';
import Button from '../ui/Button';

const CommentSection = ({ comments = [] }) => {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle submission
        console.log("Submitted:", newComment);
        setNewComment('');
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <h3 className="text-xl font-bold mb-6">Comments ({comments.length})</h3>

            <div className="space-y-6 mb-8">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="flex gap-4">
                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200 flex-shrink-0">
                                <User size={20} />
                            </div>
                            <div className="flex-1">
                                <div className="bg-slate-50 p-4 rounded-lg rounded-tl-none border border-slate-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-semibold text-sm">{comment.author}</span>
                                        <span className="text-xs text-slate-400">{comment.date}</span>
                                    </div>
                                    <p className="text-slate-700 text-sm">{comment.content}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-slate-400 py-4">No comments yet. Be the first to share your thoughts!</p>
                )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 border border-indigo-200 flex-shrink-0">
                    <span className="font-bold">ME</span>
                </div>
                <div className="flex-1">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 min-h-[80px] resize-y"
                    />
                    <div className="flex justify-end mt-2">
                        <Button size="sm" type="submit" disabled={!newComment.trim()}>Post Comment</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CommentSection;
