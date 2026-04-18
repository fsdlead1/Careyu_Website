import {
  Boxes,
  ScanEye,
  Server,
  Layers,
  Package,
  type LucideIcon,
} from "lucide-react";

// Utilizing high-resolution external real-world stock photos
const asrsImg = "https://images.unsplash.com/photo-1586528116311-ad8ed7c1515f?q=80&w=1200&auto=format&fit=crop";
const robotsImg = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop";
const ecommerceImg = "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop";
const manufacturingImg = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop";
const vlmImg = "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1200&auto=format&fit=crop";
const conveyorImg = "https://images.unsplash.com/photo-1622322306260-ebd1b66ec068?q=80&w=1200&auto=format&fit=crop";
const ptlImg = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop";
const coldImg = "https://images.unsplash.com/photo-1580983546524-7833a6f19451?q=80&w=1200&auto=format&fit=crop";

const iconMap: Record<string, LucideIcon> = {
  Boxes,
  ScanEye,
  Server,
  Layers,
};

const imageMap: Record<string, string> = {
  asrs: asrsImg,
  robots: robotsImg,
  ecommerce: ecommerceImg,
  manufacturing: manufacturingImg,
  vlm: vlmImg,
  conveyor: conveyorImg,
  ptl: ptlImg,
  cold: coldImg,
};

export const getCategoryIcon = (name: string): LucideIcon =>
  iconMap[name] ?? Package;

export const getCategoryImage = (key: string): string =>
  imageMap[key] ?? asrsImg;
