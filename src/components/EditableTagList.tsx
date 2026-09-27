'use client';

import React, { useState } from 'react';
import { Plus, X, Check, Edit2 } from 'lucide-react';

interface EditableTagListProps {
  items: string[];
  onUpdateList: (newList: string[]) => void;
  isAdmin: boolean;
  prefix?: string;
  pillClassName?: string;
  containerClassName?: string;
  addPlaceholder?: string;
}

export const EditableTagList: React.FC<EditableTagListProps> = ({
  items,
  onUpdateList,
  isAdmin,
  prefix = '#',
  pillClassName = 'text-xs font-mono text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-500/30',
  containerClassName = 'flex flex-wrap gap-2',
  addPlaceholder = 'เพิ่มรายการใหม่'
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newVal, setNewVal] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editDraft, setEditDraft] = useState('');

  const handleAdd = () => {
    if (newVal.trim()) {
      onUpdateList([...items, newVal.trim()]);
      setNewVal('');
      setIsAdding(false);
    }
  };

  const handleDelete = (index: number) => {
    const updated = items.filter((_, i) => i !== index);
    onUpdateList(updated);
  };

  const handleStartEdit = (index: number) => {
    setEditingIndex(index);
    setEditDraft(items[index]);
  };

  const handleSaveEdit = (index: number) => {
    if (editDraft.trim()) {
      const updated = [...items];
      updated[index] = editDraft.trim();
      onUpdateList(updated);
    }
    setEditingIndex(null);
  };

  return (
    <div className={containerClassName}>
      {items.map((item, index) => {
        if (isAdmin && editingIndex === index) {
          return (
            <span key={index} className="inline-flex items-center gap-1.5 p-1 rounded-md bg-slate-900 border border-sky-400">
              <input
                type="text"
                value={editDraft}
                onChange={(e) => setEditDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSaveEdit(index);
                  if (e.key === 'Escape') setEditingIndex(null);
                }}
                autoFocus
                className="bg-transparent text-xs text-white focus:outline-none w-28 px-1"
              />
              <button onClick={() => handleSaveEdit(index)} className="text-emerald-400 hover:text-emerald-300">
                <Check size={13} />
              </button>
              <button onClick={() => setEditingIndex(null)} className="text-rose-400 hover:text-rose-300">
                <X size={13} />
              </button>
            </span>
          );
        }

        return (
          <span
            key={index}
            className={`inline-flex items-center gap-1.5 transition ${pillClassName}`}
          >
            <span
              onClick={() => isAdmin && handleStartEdit(index)}
              className={isAdmin ? 'cursor-pointer hover:underline' : ''}
              title={isAdmin ? 'คลิกเพื่อแก้ไขข้อความ' : ''}
            >
              {prefix}{item}
            </span>

            {isAdmin && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
                title="ลบรายการนี้"
                className="text-slate-400 hover:text-rose-400 p-0.5 rounded transition"
              >
                <X size={12} />
              </button>
            )}
          </span>
        );
      })}

      {/* Add New Tag Button in Admin Mode */}
      {isAdmin && (
        isAdding ? (
          <span className="inline-flex items-center gap-1 p-1 rounded-md bg-slate-900 border border-sky-400">
            <input
              type="text"
              value={newVal}
              onChange={(e) => setNewVal(e.target.value)}
              placeholder={addPlaceholder}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAdd();
                if (e.key === 'Escape') setIsAdding(false);
              }}
              autoFocus
              className="bg-transparent text-xs text-white focus:outline-none w-28 px-1 placeholder-slate-500"
            />
            <button onClick={handleAdd} className="text-emerald-400 hover:text-emerald-300">
              <Check size={14} />
            </button>
            <button onClick={() => setIsAdding(false)} className="text-rose-400 hover:text-rose-300">
              <X size={14} />
            </button>
          </span>
        ) : (
          <button
            onClick={() => setIsAdding(true)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-sky-950/40 hover:bg-sky-900/60 border border-dashed border-sky-400/50 text-sky-400 text-xs transition"
          >
            <Plus size={12} />
            <span>เพิ่ม</span>
          </button>
        )
      )}
    </div>
  );
};
