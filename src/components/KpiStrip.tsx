"use client";

import { LandParcel } from "@/data/mockParcels";
import { MapPin, IndianRupee, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function KpiStrip({ parcels }: { parcels: LandParcel[] }) {
  const totalHectares = (
    parcels.reduce((acc, p) => acc + p.areaSqMeters, 0) / 10000
  ).toFixed(2);

  const disbursedCrores = (
    parcels
      .filter((p) => p.status === "COMPENSATED" || p.status === "POSSESSED")
      .reduce((acc, p) => acc + p.baseValueLakhs + p.solatiumLakhs, 0) / 100
  ).toFixed(2);

  const pendingObjections = parcels.filter(
    (p) => p.status === "OBJECTION_PENDING"
  ).length;

  const possessedPct = Math.round(
    (parcels.filter((p) => p.status === "POSSESSED").length /
      Math.max(parcels.length, 1)) *
      100
  );

  const cards = [
    {
      label: "Total Area Notified",
      value: `${totalHectares} Ha`,
      icon: MapPin,
      color: "text-blue-400",
    },
    {
      label: "Compensation Disbursed",
      value: `₹ ${disbursedCrores} Cr`,
      icon: IndianRupee,
      color: "text-emerald-400",
    },
    {
      label: "Pending Objections",
      value: `${pendingObjections} Plots`,
      icon: AlertTriangle,
      color: "text-amber-400",
    },
    {
      label: "Possession Completed",
      value: `${possessedPct}%`,
      icon: CheckCircle2,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="fixed bottom-4 left-4 z-20 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {cards.map((c) => (
        <div
          key={c.label}
          className="flex items-center gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/85 px-4 py-3 backdrop-blur-md shadow-xl"
        >
          <div className={`rounded-xl bg-slate-800 p-2 ${c.color}`}>
            <c.icon className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[11px] text-slate-400">{c.label}</p>
            <p className="text-sm font-bold text-white">{c.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
