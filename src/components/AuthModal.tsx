'use client';

import React, { useState, useEffect } from 'react';
import { Lock, KeyRound, ShieldAlert, Check, X, ShieldCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setUsername('');
      setPassword('');
      setErrorMsg('');
      setIsSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // ตรวจสอบชื่อผู้ใช้และรหัสผ่านตามเงื่อนไขที่กำหนด
    if (username.trim() === 'armmy' && password.trim() === 'azzzarrz098') {
      setIsSuccess(true);
      setTimeout(() => {
        onLoginSuccess();
        onClose();
      }, 700);
    } else {
      setErrorMsg('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง (กรุณาตรวจสอบอีกครั้ง)');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="electric-glass rounded-2xl max-w-md w-full border border-sky-400 p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(56,189,248,0.4)] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-sky-950/80 border border-sky-400/40 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <Lock size={22} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              เข้าสู่ระบบผู้ดูแลระบบ (CMS)
            </h3>
            <p className="text-xs text-sky-300/80 font-mono">
              คีย์ลัดสำหรับเข้าถึง: Ctrl + Alt + P
            </p>
          </div>
        </div>

        {/* Success Alert */}
        {isSuccess ? (
          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 flex items-center gap-3 animate-pulse">
            <ShieldCheck size={24} className="text-emerald-400" />
            <div>
              <p className="font-bold text-sm">ยืนยันตัวตนสำเร็จ!</p>
              <p className="text-xs text-emerald-400/90">กำลังเปิดโหมดตกแต่งและจัดการเนื้อหา...</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/50 text-rose-300 text-xs flex items-center gap-2">
                <ShieldAlert size={16} className="text-rose-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <span>ชื่อผู้ใช้ (Username)</span>
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ระบุชื่อผู้ใช้"
                autoFocus
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-sky-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <KeyRound size={13} className="text-sky-400" />
                <span>รหัสผ่าน (Password)</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ระบุรหัสผ่าน"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-sky-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] transition"
            >
              เข้าสู่ระบบเพื่อแก้ไขเว็บ
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
