"use client";

import { useState, useMemo } from "react";
import { INITIAL_PARCELS, LandParcel, ParcelStatus } from "@/data/mockParcels";
import Navbar from "@/components/Navbar";
import MapCanvas from "@/components/MapCanvas";
import KpiStrip from "@/components/KpiStrip";
import ParcelDrawer from "@/components/ParcelDrawer";

export default function HomePage() {
  const [parcels, setParcels] = useState<LandParcel[]>(INITIAL_PARCELS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("ALL");
  const [selectedParcelId, setSelectedParcelId] = useState<string | null>(null);

  const filteredParcels = useMemo(() => {
    return parcels.filter((p) => {
      const matchesStatus =
        selectedStatus === "ALL" || p.status === selectedStatus;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        p.surveyNumber.toLowerCase().includes(q) ||
        p.village.toLowerCase().includes(q) ||
        p.ownerName.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [parcels, searchQuery, selectedStatus]);

  const selectedParcel = useMemo(
    () => parcels.find((p) => p.id === selectedParcelId) || null,
    [parcels, selectedParcelId]
  );

  const handleAdvanceStatus = (parcelId: string, nextStatus: ParcelStatus) => {
    setParcels((prev) =>
      prev.map((p) =>
        p.id === parcelId ? { ...p, status: nextStatus, lastUpdated: "Just now" } : p
      )
    );
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      <MapCanvas
        parcels={filteredParcels}
        selectedParcelId={selectedParcelId}
        onSelectParcel={(p) => setSelectedParcelId(p.id)}
      />

      <KpiStrip parcels={filteredParcels} />

      <ParcelDrawer
        parcel={selectedParcel}
        onClose={() => setSelectedParcelId(null)}
        onAdvanceStatus={handleAdvanceStatus}
      />
    </main>
  );
}
