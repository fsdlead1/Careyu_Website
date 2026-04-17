import {
  Boxes,
  ScanEye,
  Server,
  Layers,
  Package,
  type LucideIcon,
} from "lucide-react";
import asrsImg from "@/assets/asrs-product.jpg";
import robotsImg from "@/assets/product-robots.jpg";
import ecommerceImg from "@/assets/solution-ecommerce.jpg";
import manufacturingImg from "@/assets/solution-manufacturing.jpg";
import vlmImg from "@/assets/product-vlm.jpg";
import conveyorImg from "@/assets/product-conveyor.jpg";
import ptlImg from "@/assets/product-ptl.jpg";
import coldImg from "@/assets/solution-coldstorage.jpg";

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
