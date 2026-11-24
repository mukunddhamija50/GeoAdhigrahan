"use client";

import { LandParcel, ParcelStatus, STATUS_CONFIG } from "@/data/mockParcels";
import { X, ArrowRight, FileText, UserCheck } from "lucide-react";

interface ParcelDrawerProps {
  parcel: LandParcel | null;
  onClose: () => void;
  onAdvanceStatus: (parcelId: string, nextStatus: ParcelStatus) => void;
}

export default function ParcelDrawer({
  parcel,
  onClose,
  onAdvanceStatus,
}: ParcelDrawerProps) {
  if (!parcel) return null;

  const cfg = STATUS_CONFIG[parcel.status];
  const totalAward = (parcel.baseValueLakhs + parcel.solatiumLakhs).toFixed(2);

  return (
    <aside className="fixed right-4 top-24 bottom-4 z-30 w-80 sm:w-96 flex flex-col rounded-2xl border border-slate-700/60 bg-slate-900/95 p-5 backdrop-blur-md shadow-2xl overflow-y-auto">
      <div className="flex items-start justify-between border-b border-slate-800 pb-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
            Survey No. {parcel.surveyNumber}
          </span>
          <h2 className="text-lg font-bold text-white">
            {parcel.village}, {parcel.tehsil}
          </h2>
          <p className="text-xs text-slate-400">
            {parcel.district}, {parcel.state}
          </p>
        </div>
        <button
          onClick={onClose}
          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-400">Current Stage</span>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${cfg.bgClass} ${cfg.textClass}`}
        >
          {cfg.label}
        </span>
      </div>

      <div className="mt-5 space-y-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs">
        <div className="flex items-center gap-2 font-semibold text-slate-200">
          <UserCheck className="h-4 w-4 text-blue-400" />
          <span>Stakeholder & Valuation</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>Recorded Owner</span>
          <span className="font-medium text-white">{parcel.ownerName}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>Total Area</span>
          <span className="font-medium text-white">
            {parcel.areaSqMeters.toLocaleString()} sq.m
          </span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>Base Land Value</span>
          <span className="font-medium text-white">₹ {parcel.baseValueLakhs} L</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>100% Solatium (RFCTLARR)</span>
          <span className="font-medium text-white">₹ {parcel.solatiumLakhs} L</span>
        </div>
        <div className="flex justify-between border-t border-slate-800 pt-2 text-sm font-bold text-emerald-400">
          <span>Total Award</span>
          <span>₹ {totalAward} Lakhs</span>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-200">
          <FileText className="h-4 w-4 text-slate-400" />
          <span>Statutory Documents</span>
        </div>
        <ul className="space-y-1.5 text-xs text-blue-400">
          <li className="cursor-pointer hover:underline">• 30-Year Encumbrance Certificate.pdf</li>
          <li className="cursor-pointer hover:underline">• Section 11 Gazette Notification.pdf</li>
        </ul>
      </div>

      <div className="mt-auto pt-6">
        {cfg.next ? (
          <button
            onClick={() => onAdvanceStatus(parcel.id, cfg.next!)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
          >
            <span>Advance to {STATUS_CONFIG[cfg.next].label}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 py-3 text-center text-xs font-semibold text-purple-300">
            Acquisition & Mutation Complete
          </div>
        )}
      </div>
    </aside>
  );
}
