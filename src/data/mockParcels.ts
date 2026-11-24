export type ParcelStatus =
  | "PROPOSED"
  | "NOTIFIED_SEC11"
  | "OBJECTION_PENDING"
  | "COMPENSATED"
  | "POSSESSED";

export interface LandParcel {
  id: string;
  surveyNumber: string;
  village: string;
  tehsil: string;
  district: string;
  state: string;
  areaSqMeters: number;
  status: ParcelStatus;
  ownerName: string;
  baseValueLakhs: number;
  solatiumLakhs: number;
  polygonPoints: string; // SVG polygon coordinates
  lastUpdated: string;
}

export const STATUS_CONFIG: Record<
  ParcelStatus,
  { label: string; color: string; bgClass: string; textClass: string; next?: ParcelStatus }
> = {
  PROPOSED: {
    label: "Proposed",
    color: "#64748B",
    bgClass: "bg-slate-500/20 border-slate-500/40",
    textClass: "text-slate-300",
    next: "NOTIFIED_SEC11",
  },
  NOTIFIED_SEC11: {
    label: "Notified (Sec 11)",
    color: "#2563EB",
    bgClass: "bg-blue-500/20 border-blue-500/40",
    textClass: "text-blue-300",
    next: "OBJECTION_PENDING",
  },
  OBJECTION_PENDING: {
    label: "Objection Pending",
    color: "#D97706",
    bgClass: "bg-amber-500/20 border-amber-500/40",
    textClass: "text-amber-300",
    next: "COMPENSATED",
  },
  COMPENSATED: {
    label: "Compensated",
    color: "#10B981",
    bgClass: "bg-emerald-500/20 border-emerald-500/40",
    textClass: "text-emerald-300",
    next: "POSSESSED",
  },
  POSSESSED: {
    label: "Possessed",
    color: "#7C3AED",
    bgClass: "bg-purple-500/20 border-purple-500/40",
    textClass: "text-purple-300",
  },
};

export const INITIAL_PARCELS: LandParcel[] = [
  {
    id: "P-101",
    surveyNumber: "402/1A",
    village: "Bagru",
    tehsil: "Sanganer",
    district: "Jaipur",
    state: "Rajasthan",
    areaSqMeters: 12400,
    status: "POSSESSED",
    ownerName: "Rameshwar Choudhary",
    baseValueLakhs: 45.0,
    solatiumLakhs: 45.0,
    polygonPoints: "120,180 230,160 250,240 140,260",
    lastUpdated: "2 mins ago",
  },
  {
    id: "P-102",
    surveyNumber: "402/2B",
    village: "Bagru",
    tehsil: "Sanganer",
    district: "Jaipur",
    state: "Rajasthan",
    areaSqMeters: 9800,
    status: "COMPENSATED",
    ownerName: "Sita Devi & Sons",
    baseValueLakhs: 36.5,
    solatiumLakhs: 36.5,
    polygonPoints: "240,160 350,145 370,225 260,240",
    lastUpdated: "14 mins ago",
  },
  {
    id: "P-103",
    surveyNumber: "405/1",
    village: "Chhitroli",
    tehsil: "Sanganer",
    district: "Jaipur",
    state: "Rajasthan",
    areaSqMeters: 15200,
    status: "OBJECTION_PENDING",
    ownerName: "Mahendra Singh Rathore",
    baseValueLakhs: 58.0,
    solatiumLakhs: 58.0,
    polygonPoints: "360,145 480,130 500,215 380,225",
    lastUpdated: "1 hr ago",
  },
  {
    id: "P-104",
    surveyNumber: "408/3",
    village: "Chhitroli",
    tehsil: "Sanganer",
    district: "Jaipur",
    state: "Rajasthan",
    areaSqMeters: 8400,
    status: "NOTIFIED_SEC11",
    ownerName: "Kailash Narayan",
    baseValueLakhs: 28.0,
    solatiumLakhs: 28.0,
    polygonPoints: "490,130 600,120 620,200 510,215",
    lastUpdated: "3 hrs ago",
  },
  {
    id: "P-105",
    surveyNumber: "410/2",
    village: "Dudu",
    tehsil: "Dudu",
    district: "Jaipur",
    state: "Rajasthan",
    areaSqMeters: 18500,
    status: "PROPOSED",
    ownerName: "Gram Panchayat Common Land",
    baseValueLakhs: 62.0,
    solatiumLakhs: 62.0,
    polygonPoints: "610,120 740,105 760,190 630,200",
    lastUpdated: "Yesterday",
  },
  {
    id: "P-106",
    surveyNumber: "412/1",
    village: "Bagru",
    tehsil: "Sanganer",
    district: "Jaipur",
    state: "Rajasthan",
    areaSqMeters: 11000,
    status: "COMPENSATED",
    ownerName: "Bhagwan Sahai",
    baseValueLakhs: 41.0,
    solatiumLakhs: 41.0,
    polygonPoints: "145,270 255,250 275,335 160,350",
    lastUpdated: "35 mins ago",
  },
];
