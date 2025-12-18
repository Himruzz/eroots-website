export interface Product {
  title: string;
  desc: string;
  icon: string;
  color: string;
}

export const products: Product[] = [
  {
    title: "Lithium Batteries",
    desc: "High-efficiency packs for all purposes",
    icon: "BatteryCharging",
    color: "from-green-400 to-green-600",
  },
  {
    title: "EV Fast Chargers",
    desc: "Rapid charging for 2-wheelers",
    icon: "Zap",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Li-Ion Inverters",
    desc: "Next-gen power backup solutions",
    icon: "Cpu",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Charging Stations",
    desc: "Complete infrastructure setup",
    icon: "MapPin",
    color: "from-purple-400 to-purple-600",
  },
];
