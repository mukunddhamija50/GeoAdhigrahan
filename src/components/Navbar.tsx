"use client";

import { Search, Radio, ShieldCheck } from "lucide-react";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedStatus: string;
  setSelectedStatus: (s: string) => void;
}

export default function Navbar({
  searchQuery,
  setSearchQuery,
  selectedStatus,
  setSelectedStatus,
}: NavbarProps) {
  return (
    <header className="fixed top-4 left-4 right-4 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/85 px-5 py-3 backdrop-blur-md shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-wide text-white">
            NATIONAL LAMS <span className="text-blue-400 font-normal">| NH-48 Corridor</span>
          </h1>
          <p className="text-[11px] text-slate-400">Real-Time Land Acquisition & Management</p>
        </div>
      </div>

      <div className="flex flex-1 max-w-xl items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Survey No., Village, or Owner..."
            className="w-full rounded-xl border border-slate-700 bg-slate-800/90 py-2 pl-9 pr-4 text-xs text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-800/90 px-3 py-2 text-xs text-slate-200 focus:border-blue-500 focus:outline-none"
        >
          <option value="ALL">All Stages</option>
          <option value="PROPOSED">Proposed</option>
          <option value="NOTIFIED_SEC11">Notified (Sec 11)</option>
          <option value="OBJECTION_PENDING">Objection Pending</option>
          <option value="COMPENSATED">Compensated</option>
          <option value="POSSESSED">Possessed</option>
        </select>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
        <Radio className="h-3.5 w-3.5 animate-pulse" />
        <span>Live Sync</span>
      </div>
    </header>
  );
}
