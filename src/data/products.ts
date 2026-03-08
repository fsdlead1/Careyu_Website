export interface Product {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  icon: string;
}

export const products: Product[] = [
  {
    slug: "asrs",
    title: "ASRS — Automated Storage & Retrieval System",
    shortDesc: "High-density automated storage with precision crane/shuttle retrieval for maximum space utilization.",
    description: "Our ASRS solutions revolutionize warehouse operations by automating the storage and retrieval of goods. Using computer-controlled cranes and shuttles, these systems maximize vertical space utilization while dramatically reducing labor costs and improving accuracy.",
    features: [
      "Up to 85% floor space savings",
      "99.99% picking accuracy",
      "24/7 unmanned operation capability",
      "Real-time inventory tracking via WMS",
      "Handles 200-500+ cycles per hour",
      "Heights up to 30+ meters",
      "Temperature-controlled options",
      "Scalable modular design",
    ],
    specs: {
      "Max Height": "30+ meters",
      "Load Capacity": "Up to 2,500 kg per unit",
      "Throughput": "200-500+ cycles/hour",
      "Accuracy": "99.99%",
      "Temperature Range": "-30°C to +40°C",
      "Control System": "PLC + WMS Integration",
      "Power": "Energy-regenerative drives",
      "Maintenance": "Predictive via IoT sensors",
    },
    icon: "Boxes",
  },
  {
    slug: "vertical-lift-module",
    title: "Vertical Lift Module (VLM)",
    shortDesc: "Enclosed automated vertical storage delivering goods to an ergonomic pick window.",
    description: "Vertical Lift Modules are enclosed systems with trays stored in two columns with an automatic inserter/extractor in the center. They deliver trays to an ergonomic access window, maximizing vertical space while bringing goods to the worker.",
    features: [
      "Up to 90% floor space reduction",
      "Ergonomic pick access at waist height",
      "Enclosed system protects inventory",
      "LED pick-to-light indicators",
      "Batch picking support",
      "ESD-safe options available",
      "Integration with ERP/WMS",
      "Rapid installation",
    ],
    specs: {
      "Max Height": "16 meters",
      "Tray Width": "Up to 4,050 mm",
      "Tray Depth": "Up to 857 mm",
      "Load per Tray": "Up to 750 kg",
      "Throughput": "120+ trays/hour",
      "Accuracy": "99.9%+",
      "Power Supply": "380-480V, 3-phase",
      "Control": "Touchscreen + WMS",
    },
    icon: "ArrowUpFromLine",
  },
  {
    slug: "pick-to-light",
    title: "Pick-to-Light System",
    shortDesc: "LED-guided picking technology for ultra-fast and accurate order fulfillment.",
    description: "Our Pick-to-Light systems use LED indicators mounted on rack locations to guide operators to exact pick positions with quantity displays. This dramatically reduces picking time and errors while requiring minimal training.",
    features: [
      "50-60% faster picking speeds",
      "99.9%+ picking accuracy",
      "30-minute training for new workers",
      "Language-independent operation",
      "Multiple picking strategies supported",
      "Real-time performance analytics",
      "Wireless options available",
      "Scalable from 100 to 10,000+ locations",
    ],
    specs: {
      "Display Type": "Multi-color LED + numeric",
      "Pick Rate": "300-500 picks/hour",
      "Accuracy": "99.9%+",
      "Connectivity": "Ethernet/WiFi/RS485",
      "Power": "24V DC PoE",
      "Operating Temp": "0°C to 50°C",
      "IP Rating": "IP54",
      "Interface": "REST API + WMS",
    },
    icon: "Lightbulb",
  },
  {
    slug: "conveyor-systems",
    title: "Conveyor & Sorting Systems",
    shortDesc: "Automated material transport and sorting for streamlined warehouse flow.",
    description: "Our conveyor and sorting systems create the backbone of automated material flow within your facility. From roller conveyors to high-speed sorters, we design systems that connect storage, picking, packing, and shipping seamlessly.",
    features: [
      "Speeds up to 2.5 m/s",
      "Multiple conveyor types available",
      "Automatic label scanning & routing",
      "Merge, divert, and accumulate zones",
      "Energy-efficient motor design",
      "Modular & expandable",
      "Low noise operation",
      "Integrated safety systems",
    ],
    specs: {
      "Max Speed": "2.5 m/s",
      "Load Capacity": "Up to 50 kg/m",
      "Width Options": "400mm to 1,200mm",
      "Sort Rate": "Up to 12,000 items/hour",
      "Drive": "24V MDR / AC motor",
      "Control": "PLC with HMI",
      "Noise Level": "<65 dB",
      "Standards": "CE, ISO 9001",
    },
    icon: "ArrowRightLeft",
  },
  {
    slug: "warehouse-robots",
    title: "Warehouse Robotics (AMR/AGV)",
    shortDesc: "Autonomous mobile robots for intelligent material handling and goods-to-person fulfillment.",
    description: "Our warehouse robotics solutions include Autonomous Mobile Robots (AMRs) and Automated Guided Vehicles (AGVs) that handle material transport, rack movement, and goods-to-person delivery with minimal human intervention.",
    features: [
      "AI-powered navigation",
      "Dynamic obstacle avoidance",
      "Fleet management software",
      "Goods-to-person workflows",
      "Quick deployment (weeks, not months)",
      "Works in existing facilities",
      "Collaborative safety certified",
      "Battery swap or opportunity charging",
    ],
    specs: {
      "Payload": "Up to 1,500 kg",
      "Speed": "Up to 2.0 m/s",
      "Navigation": "SLAM + LiDAR",
      "Battery Life": "8-12 hours",
      "Charging": "Auto-dock / swap",
      "Fleet Size": "1 to 100+ units",
      "Safety": "ISO 3691-4",
      "Communication": "5G/WiFi 6",
    },
    icon: "Bot",
  },
];

export const getProduct = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
