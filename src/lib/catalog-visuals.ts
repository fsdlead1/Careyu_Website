import {
  Boxes,
  ScanEye,
  Server,
  Layers,
  Package,
  type LucideIcon,
} from "lucide-react";

// ✅ Static imports (correct way for assets)
import asrsImg from "../assets/catelog/asrs.jpg";
import robotsImg from "../assets/catelog/robots.avif";
import ecommerceImg from "../assets/catelog/ecommerce.avif";
import manufacturingImg from "../assets/catelog/manufacturing.avif";
import vlmImg from "../assets/catelog/vlm.avif";
import conveyorImg from "../assets/catelog/conveyor.jpg";
import ptlImg from "../assets/catelog/ptl.avif";
import coldImg from "../assets/catelog/cold.avif";

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