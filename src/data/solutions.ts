export interface Solution {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  challenges: string[];
  howWeHelp: string[];
  benefits: string[];
  icon: string;
}

export const solutions: Solution[] = [
  {
    slug: "warehouse-automation",
    title: "Warehouse Automation",
    subtitle: "End-to-end warehouse automation from storage to shipping",
    description: "Transform your warehouse operations with integrated automation solutions. We combine ASRS, conveyor systems, robotics, and intelligent software to create highly efficient, error-free warehouse environments.",
    challenges: [
      "Rising labor costs and workforce shortages",
      "Increasing order volumes with faster delivery expectations",
      "Limited floor space for growing inventory",
      "High error rates in manual picking and packing",
      "Difficulty scaling operations during peak seasons",
    ],
    howWeHelp: [
      "Complete warehouse assessment and automation roadmap",
      "ASRS implementation for high-density storage",
      "Automated picking with PTL and robotic systems",
      "Conveyor networks for seamless material flow",
      "WMS integration for end-to-end visibility",
    ],
    benefits: [
      "60-80% labor cost reduction",
      "85% improvement in space utilization",
      "99.9%+ order accuracy",
      "50% faster order fulfillment",
      "24/7 operational capability",
    ],
    icon: "Warehouse",
  },
  {
    slug: "e-commerce-fulfillment",
    title: "E-Commerce Fulfillment",
    subtitle: "High-speed fulfillment solutions for online retail",
    description: "Meet the demands of e-commerce with micro-fulfillment solutions that enable same-day and next-day delivery. Our automated systems handle high SKU counts with rapid, accurate picking.",
    challenges: [
      "Same-day/next-day delivery expectations",
      "High SKU count with variable demand",
      "Seasonal volume spikes (2-5x normal)",
      "Returns processing complexity",
      "Last-mile delivery cost pressures",
    ],
    howWeHelp: [
      "Micro-fulfillment center design",
      "Goods-to-person robotic picking",
      "Automated sorting and packing",
      "Returns processing automation",
      "Real-time inventory management",
    ],
    benefits: [
      "Same-day dispatch capability",
      "Handle 3x volume without added staff",
      "Reduce pick errors to near-zero",
      "Process returns 5x faster",
      "Lower cost-per-order by 40%",
    ],
    icon: "ShoppingCart",
  },
  {
    slug: "manufacturing-automation",
    title: "Manufacturing & Production Automation",
    subtitle: "Smart factory solutions for modern manufacturing",
    description: "Upgrade your production lines with Industry 4.0 automation. From raw material storage to finished goods handling, we automate the complete production support lifecycle.",
    challenges: [
      "Manual material handling slowing production",
      "Quality inconsistencies in assembly",
      "Poor visibility into WIP inventory",
      "Unplanned equipment downtime",
      "Difficulty meeting compliance standards",
    ],
    howWeHelp: [
      "Automated raw material storage and retrieval",
      "Production line feeding systems",
      "WIP tracking and buffer management",
      "Finished goods automated warehousing",
      "IoT-enabled predictive maintenance",
    ],
    benefits: [
      "30% increase in production throughput",
      "50% reduction in material handling labor",
      "Real-time WIP visibility",
      "Reduced unplanned downtime by 40%",
      "Full traceability and compliance",
    ],
    icon: "Factory",
  },
  {
    slug: "cold-storage-automation",
    title: "Cold Storage & Pharma Automation",
    subtitle: "Temperature-controlled automated storage for sensitive goods",
    description: "Specialized automation for cold chain, pharmaceutical, and controlled environment storage. Our systems operate reliably at temperatures from -30°C to +8°C while maintaining strict compliance.",
    challenges: [
      "Worker safety in extreme cold environments",
      "Energy costs for temperature-controlled facilities",
      "Strict regulatory compliance (GDP, GMP)",
      "Product integrity during handling",
      "Limited time for manual operations in cold zones",
    ],
    howWeHelp: [
      "Cold-rated ASRS systems (-30°C capable)",
      "Automated pallet handling in freezer zones",
      "Air-lock integration to minimize temperature loss",
      "Batch tracking and expiry management",
      "Validated systems for pharma compliance",
    ],
    benefits: [
      "90% reduction in worker cold exposure",
      "30% energy savings through reduced door openings",
      "Complete batch traceability",
      "GDP/GMP compliance built-in",
      "2x throughput in cold zones",
    ],
    icon: "Snowflake",
  },
];

export const getSolution = (slug: string): Solution | undefined => {
  return solutions.find((s) => s.slug === slug);
};
