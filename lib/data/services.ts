import { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  icon: string;
}

export const services: Service[] = [
  { title: "EV Tech Training", icon: "GraduationCap" },
  { title: "Lithium Battery Training", icon: "Battery" },
  { title: "On Job Training (OJT)", icon: "Wrench" },
  { title: "Battery Repair", icon: "Settings" },
  { title: "Service Network", icon: "MapPin" },
  { title: "EV Lab", icon: "Cpu" },
  { title: "Training Franchise", icon: "Users" },
  { title: "Product Trading", icon: "Briefcase" },
];
