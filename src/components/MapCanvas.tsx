"use client";

import { useState } from "react";
import { LandParcel, STATUS_CONFIG } from "@/data/mockParcels";
import { Layers } from "lucide-react";

interface MapCanvasProps {
  parcels: LandParcel[];
  selectedParcelId: string | null;
  onSelectParcel: (parcel: LandParcel) => void;
}

export default function MapCanvas({
  parcels,
  selectedParcelId,
  onSelectParcel,
}: MapCanvasProps) {
  const [showCorridor, setShowCorridor] = useState(true);
  const [showForestBuffer, setShowForestBuffer] = useState(true);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-slate-950">
      {/* Subtle GIS Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(#334155 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Left Layer Controls */}
      <div className="fixed left-4 top-24 z-20 w-52 rounded-2xl border border-slate-700/60 bg-slate-900/85 p-3.5 backdrop-blur-md shadow-xl">
        <div className="mb-2.5 flex items-center gap-2 text-xs font-semibold text-slate-200">
          <Layers className="h-4 w-4 text-blue-400" />
          <span>GIS Layers</span>
        </div>
        <div className="space-y-2 text-xs text-slate-300">
          <label className="flex items-center justify-between cursor-pointer">
            <span>NH-48 Corridor</span>
            <input
              type="checkbox"
              checked={showCorridor}
              onChange={(e) => setShowCorridor(e.target.checked)}
              className="accent-blue-500"
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span>Forest Buffer Zone</span>
            <input
              type="checkbox"
              checked={showForestBuffer}
              onChange={(e) => setShowForestBuffer(e.target.checked)}
              className="accent-emerald-500"
            />
          </label>
        </div>

        <div className="mt-4 border-t border-slate-800 pt-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Status Legend
          </p>
          <div className="space-y-1.5">
            {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
              <div key={key} className="flex items-center gap-2 text-[11px] text-slate-300">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: cfg.color }}
                />
                <span>{cfg.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive SVG Spatial Map */}
      <svg
        viewBox="0 0 900 500"
        className="h-full w-full cursor-grab active:cursor-grabbing"
      >
        {/* Forest Buffer Layer */}
        {showForestBuffer && (
          <path
            d="M 50 380 Q 250 320 450 400 T 850 360 L 850 500 L 50 500 Z"
            fill="#064e3b"
            fillOpacity="0.25"
            stroke="#10b981"
            strokeOpacity="0.3"
            strokeDasharray="6 4"
          />
        )}

        {/* Highway Corridor Alignment */}
        {showCorridor && (
          <path
            d="M 80 220 L 780 145"
            stroke="#38bdf8"
            strokeWidth="22"
            strokeOpacity="0.12"
            fill="none"
          />
        )}

        {/* Land Parcels */}
        {parcels.map((parcel) => {
          const cfg = STATUS_CONFIG[parcel.status];
          const isSelected = parcel.id === selectedParcelId;
          return (
            <g
              key={parcel.id}
              onClick={() => onSelectParcel(parcel)}
              className="cursor-pointer transition-all duration-200 hover:opacity-90"
            >
              <polygon
                points={parcel.polygonPoints}
                fill={cfg.color}
                fillOpacity={isSelected ? 0.65 : 0.35}
                stroke={isSelected ? "#ffffff" : cfg.color}
                strokeWidth={isSelected ? 3 : 1.5}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
