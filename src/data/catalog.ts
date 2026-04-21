// Centralized catalog: 4 main categories + sub-products
// Mirrors the official CareYu sitemap

import spr from "../assets/subcatelog/spr.jpg";
import shuttle from "../assets/subcatelog/shuttle.jpg";
import fourWayShuttle from "../assets/subcatelog/4WayShuttle.jpg";
import Cantilever from "../assets/subcatelog/Cantilever.jpg";
import HDS from "../assets/subcatelog/HDS.jpg";
import LongSpan from "../assets/subcatelog/Long-Span.jpg";
import MotherShuttle from "../assets/subcatelog/MotherShuttle.jpg";
import ddr from "../assets/subcatelog/ddr.jpg";
import drivein from "../assets/subcatelog/drivein.jpg";
import mShelving from "../assets/subcatelog/mShelving.jpg";
import mezzanine from "../assets/subcatelog/mezzanine.jpg";
import miniASRS from "../assets/subcatelog/miniasrs.jpg";

export interface SubProduct {
  slug: string;
  name: string;
  short: string;
  image?: string;
  description: string;
  features: string[];
  subProducts?: SubProduct[];
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string; // lucide icon name
  image: string; // imported asset key
  subProducts: SubProduct[];
}

export const categories: Category[] = [
  {
    slug: "material-handling",
    name: "Material Handling & Storage Automation",
    tagline: "End-to-end automated storage, racking & retrieval systems",
    description:
      "From traditional pallet racks to fully automated shuttle systems, we design and integrate storage solutions that maximize space, accuracy, and throughput across every warehouse type.",
    icon: "Boxes",
    image: "asrs",
    subProducts: [
      {
        slug: "warehouse-consulting",
        name: "Warehouse Consulting",
        short: "Expert layout, flow & automation strategy consulting.",
        description:
          "Full-service warehouse consulting covering site assessment, flow analysis, ROI modelling, and a phased automation roadmap tailored to your SKU profile and growth plan.",
        features: [
          "Site survey & layout simulation",
          "SKU velocity & slotting analysis",
          "ROI & payback modelling",
          "Phased automation roadmap",
        ],
      },
      {
        slug: "solution-provider",
        name: "Solution Provider",
        short: "Single-window turnkey automation delivery.",
        description:
          "Turnkey delivery across design, manufacturing, integration, commissioning, and support — one accountable partner for the full lifecycle of your automation project.",
        features: [
          "Turnkey project execution",
          "Multi-vendor integration",
          "On-site commissioning",
          "AMC & lifecycle support",
        ],
      },
      {
        slug: "industrial-heavy-duty-racks",
        name: "Industrial Heavy Duty Racks",
        short: "Engineered racking for the most demanding loads.",
        description:
          "Heavy-duty rack systems engineered for industrial loads — designed, manufactured and installed in-house with seismic-grade structural compliance.",
        features: [
          "Seismic-rated heavy duty racking",
          "Pallet, Cantilever, & Drive-In systems",
          "ASRS-ready structures",
        ],
        subProducts: [
          {
            slug: "spr-selective-pallet-racking",
            name: "SPR – Selective Pallet Racking",
            short: "Universal direct-access pallet storage.",
            image: spr,
            description:
              "The most widely adopted pallet storage system, offering 100% direct access to every pallet — ideal for warehouses with high SKU variety and moderate density needs.",
            features: [
              "100% pallet selectivity",
              "Adjustable beam levels",
              "Compatible with all forklifts",
              "Fast deployment",
            ],
          },
          {
            slug: "double-deep-racking",
            name: "Double Deep Racking",
            short: "2x density with reach-truck access.",
            image: ddr,
            description:
              "Pallets stored two-deep, doubling storage density while keeping a high level of selectivity. Best used with specialised reach trucks for fast cycle times.",
            features: [
              "Up to 2x density vs. SPR",
              "Reduced aisle count",
              "Good selectivity (~50%)",
              "FIFO/LIFO compatible",
            ],
          },
          {
            slug: "drive-in-racking",
            name: "Drive-In Racking",
            short: "Maximum density LIFO bulk storage.",
            image: drivein,
            description:
              "Forklift drives directly into the rack lane, allowing extremely high-density storage of homogeneous SKUs — perfect for cold storage, beverages, and bulk inventory.",
            features: [
              "Up to 75% space utilisation",
              "Ideal for low-SKU, high-volume",
              "LIFO inventory rotation",
              "Cold-storage compatible",
            ],
          },
          {
            slug: "mezzanine-floor",
            name: "Mezzanine Floor",
            short: "Double your usable floor area.",
            image: mezzanine,
            description:
              "Custom-engineered mezzanine structures that create new floor levels within existing buildings — ideal for picking, light assembly, or office space without expanding your footprint.",
            features: [
              "2–3x floor area gain",
              "Custom load capacity",
              "Integrated staircases & lifts",
              "Modular & relocatable",
            ],
          },
          {
            slug: "shuttle-racking",
            name: "Shuttle Racking",
            short: "Semi-automated high-density pallet flow.",
            image: shuttle,
            description:
              "A radio-controlled shuttle handles pallet movement deep inside the rack, combining the density of drive-in with much faster cycle times and FIFO/LIFO flexibility.",
            features: [
              "High-density + fast cycles",
              "FIFO or LIFO operation",
              "Reduced forklift movement",
              "Battery-powered shuttle",
            ],
          },
          {
            slug: "four-way-shuttle-racking",
            name: "Four-Way Shuttle Racking",
            short: "Omnidirectional shuttle for grid storage.",
            image: fourWayShuttle,
            description:
              "Advanced shuttle moving in four directions across an entire rack grid, enabling flexible routing, multi-aisle access, and dramatically improved throughput per shuttle.",
            features: [
              "Omnidirectional movement",
              "Cross-aisle flexibility",
              "High SKU mix support",
              "Software-coordinated fleet",
            ],
          },
          {
            slug: "mother-child-shuttle-racking",
            name: "Mother-Child Shuttle Racking",
            short: "Mother carrier with child shuttle for ultra-deep lanes.",
            image: MotherShuttle,
            description:
              "A mother shuttle transports a smaller child shuttle across aisles, which then handles deep-lane storage — combining ASRS-class throughput with very high density.",
            features: [
              "Ultra-deep lane storage",
              "ASRS-grade throughput",
              "Reduced shuttle count",
              "Ideal for cold storage",
            ],
          },
          {
            slug: "mini-load",
            name: "Mini Load (Tote-to-Person)",
            short: "Goods-to-person tote handling automation.",
            image: miniASRS,
            description:
              "Automated mini-load cranes deliver totes and cartons directly to ergonomic pick stations — ideal for e-commerce, spare parts, and small-item fulfilment.",
            features: [
              "Goods-to-person workflow",
              "Up to 1,000 totes/hour",
              "Ergonomic pick stations",
              "Tight integration with WMS",
            ],
          },
          {
            slug: "mobile-shelving-iot",
            name: "Mobile Shelving Racks (IoT Integrated)",
            short: "Compact mobile racks with IoT controls.",
            image: mShelving,
            description:
              "Motorised mobile shelving on rails with IoT controls, delivering up to 80% more storage in the same footprint — fully integrated with WMS and access controls.",
            features: [
              "Up to 80% more capacity",
              "IoT & WMS integration",
              "Access-controlled aisles",
              "Safety light curtains",
            ],
          },
          {
            slug: "heavy-duty-shelving",
            name: "Heavy Duty Shelving",
            short: "Robust, hand-loaded storage for bulky or heavy items.",
            image: HDS,
            description:
              "Engineered for high-density manual loading, featuring reinforced steel decks or timber inserts capable of supporting up to 1,000 kg per shelf — perfect for engine parts, archival boxes, and industrial equipment.",
            features: [
              "Up to 1,000 kg UDL per shelf",
              "Boltless or nut-and-bolt assembly",
              "Adjustable shelf heights",
              "Reinforced steel or chipboard decking",
              "Scratch-resistant powder coat finish",
            ],
          },
          {
            slug: "cantilever-racks",
            name: "Cantilever Racks",
            short: "Long-load storage for pipes, lumber & profiles.",
            image: Cantilever,
            description:
              "Open-arm cantilever systems for storing long, awkward loads — pipes, timber, extrusions and steel profiles — with full forklift access from the front.",
            features: [
              "Open-front access",
              "Single or double sided",
              "Adjustable arm heights",
              "Indoor/outdoor variants",
            ],
          },
          {
            slug: "long-span-shelving",
            name: "Long-Span Shelving",
            short: "Hand-loaded shelving for medium loads.",
            image: LongSpan,
            description:
              "Boltless long-span shelving for hand-picked items up to 1,000 kg per level — perfect for spare parts, cartons and archival storage with full visibility.",
            features: [
              "Up to 1,000 kg per level",
              "Boltless assembly",
              "Adjustable shelves",
              "Multi-tier configuration",
            ],
          },
        ]
      }
    ]
  },
  {
    slug: "vision-based-solutions",
    name: "Vision-based Solutions",
    tagline: "AI-powered vision for inspection, tracking & automation",
    description:
      "Industrial vision systems that bring intelligence to every conveyor, pick station and quality checkpoint — combining cameras, AI models and PLC control for real-time decisioning.",
    icon: "ScanEye",
    image: "robots",
    subProducts: [
      {
        slug: "ai-quality-inspection",
        name: "AI Quality Inspection",
        short: "Real-time defect detection on production lines.",
        description:
          "Deep-learning vision models that inspect products on the line, flagging defects, dimensional drift and surface flaws within milliseconds — eliminating manual QC.",
        features: [
          "Sub-100ms inference",
          "Self-learning defect models",
          "Auto-rejection integration",
          "Full traceability logs",
        ],
      },
      {
        slug: "barcode-vision-tracking",
        name: "Barcode & Vision Tracking",
        short: "Omnidirectional code reading on conveyors.",
        description:
          "High-speed multi-camera tunnels read 1D/2D barcodes and DPM codes from any orientation, enabling sortation, dimensioning and traceability without manual scanning.",
        features: [
          "Reads damaged/low-contrast codes",
          "Omnidirectional capture",
          "Up to 12,000 reads/hour",
          "WMS/sorter integration",
        ],
      },
      {
        slug: "robotic-vision-guidance",
        name: "Robotic Vision Guidance",
        short: "3D vision for pick-and-place robots.",
        description:
          "3D vision systems that guide robotic arms for bin picking, depalletising and assembly — handling random part orientations with sub-millimetre accuracy.",
        features: [
          "3D point-cloud sensing",
          "Random bin picking",
          "Sub-mm pick accuracy",
          "Works with major robot brands",
        ],
      },
    ],
  },
  {
    slug: "wms-solutions",
    name: "WMS Solutions",
    tagline: "Warehouse Management Software & integration",
    description:
      "Enterprise-grade Warehouse Management Software that orchestrates inventory, labour, equipment and orders in real time — with deep integration into ERP, ASRS and robotics.",
    icon: "Server",
    image: "ecommerce",
    subProducts: [
      {
        slug: "core-wms",
        name: "Core WMS Platform",
        short: "Real-time inventory, receiving, picking & shipping.",
        description:
          "A modular WMS covering the complete warehouse lifecycle — from inbound receiving and putaway to wave picking, packing and dispatch — with mobile and RF support.",
        features: [
          "Real-time inventory visibility",
          "Wave & batch picking",
          "Mobile/RF operations",
          "Multi-site, multi-client",
        ],
      },
      {
        slug: "erp-integration",
        name: "ERP & E-commerce Integration",
        short: "Plug-and-play SAP, Oracle & marketplace connectors.",
        description:
          "Pre-built connectors for SAP, Oracle, Microsoft Dynamics, Shopify and major marketplaces, with a low-code integration layer for any custom system.",
        features: [
          "SAP / Oracle / MS Dynamics",
          "Shopify, Amazon, Flipkart",
          "REST & EDI APIs",
          "Low-code integration studio",
        ],
      },
      {
        slug: "analytics-dashboards",
        name: "Analytics & Dashboards",
        short: "Operational KPIs and predictive insights.",
        description:
          "Live dashboards for throughput, accuracy, labour productivity and equipment utilisation — with predictive insights to spot bottlenecks before they hit operations.",
        features: [
          "Live KPI dashboards",
          "Labour productivity tracking",
          "Predictive bottleneck alerts",
          "Custom report builder",
        ],
      },
    ],
  }
];

export const getCategory = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

export const getSubProduct = (
  categorySlug: string,
  subSlug: string,
): { category: Category; subProduct: SubProduct } | undefined => {
  const category = getCategory(categorySlug);
  if (!category) return undefined;
  const subProduct = category.subProducts.find((s) => s.slug === subSlug);
  if (!subProduct) return undefined;
  return { category, subProduct };
};

export const getNestedSubProduct = (
  categorySlug: string,
  subSlug: string,
  nestedSlug: string
): { category: Category; subProduct: SubProduct; nestedProduct: SubProduct } | undefined => {
  const result = getSubProduct(categorySlug, subSlug);
  if (!result || !result.subProduct.subProducts) return undefined;
  const nestedProduct = result.subProduct.subProducts.find(s => s.slug === nestedSlug);
  if (!nestedProduct) return undefined;
  return { ...result, nestedProduct };
};
