import React from 'react';

const Input = ({ label, error, className = '', ...props }) => {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
            <input
                className={`
          px-4 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all
          ${error
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-200'
                    }
        `}
                {...props}
            />
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
};

export default Input;
