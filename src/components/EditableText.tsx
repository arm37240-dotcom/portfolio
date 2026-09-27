'use client';

import React, { useState } from 'react';
import { Edit3, Check, X } from 'lucide-react';

interface EditableTextProps {
  value: string;
  onSave: (newValue: string) => void;
  isAdmin: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  multiline?: boolean;
}

export const EditableText: React.FC<EditableTextProps> = ({
  value,
  onSave,
  isAdmin,
  className = '',
  as: Component = 'span',
  multiline = false
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  if (!isAdmin) {
    return <Component className={className}>{value}</Component>;
  }

  const handleSave = () => {
    onSave(draft);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(value);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <span className="inline-flex items-center gap-2 relative z-20 my-1">
        {multiline ? (
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="w-full min-h-[80px] p-2 text-sm bg-slate-900 text-sky-200 border border-sky-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-lg"
            rows={3}
            autoFocus
          />
        ) : (
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="px-2 py-1 text-sm bg-slate-900 text-sky-200 border border-sky-400 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-lg"
            autoFocus
          />
        )}
        <button
          onClick={handleSave}
          title="บันทึก"
          className="p-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition shadow"
        >
          <Check size={14} />
        </button>
        <button
          onClick={handleCancel}
          title="ยกเลิก"
          className="p-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-md transition shadow"
        >
          <X size={14} />
        </button>
      </span>
    );
  }

  return (
    <span
      onClick={() => setIsEditing(true)}
      title="คลิกเพื่อแก้ไขข้อความ (Admin Edit Mode)"
      className={`group relative cursor-pointer inline-flex items-center rounded transition-all duration-200 hover:outline-dashed hover:outline-1 hover:outline-sky-400/80 px-1 -mx-1 ${className}`}
    >
      <Component className={className}>{value}</Component>
      <span className="opacity-0 group-hover:opacity-100 ml-1.5 p-0.5 text-sky-400 bg-sky-950/80 border border-sky-500/30 rounded inline-flex transition">
        <Edit3 size={12} />
      </span>
    </span>
  );
};
