export interface Feature {
  id: string;
  title: string;
  description: string;
  badge?: string;
}

export interface ComparisonRow {
  parameter: string;
  cocoLign: string;
  plastic: string;
  styrofoam: string;
}

export interface ProductionStep {
  stepNumber: number;
  phase: 'Preparation' | 'Activation & Mixing' | 'Forming & Finishing';
  title: string;
  description: string;
  iconName: string;
}

export interface ImpactCard {
  title: string;
  metrics: {
    value: string;
    label: string;
    subtext: string;
    iconName: string;
  }[];
}

export interface RoadmapYear {
  year: string;
  topic: string;
  activity: string;
  output: string;
}

export interface TeamMember {
  name: string;
  role: 'Leader' | 'Member';
  university: string;
  avatarUrl?: string;
}

export const FEATURES: Feature[] = [
  {
    id: "biodegradable",
    title: "Fully Biodegradable",
    description: "Completely decomposes in soil within 60-90 days, returning organic matter naturally cleanly back to the earth.",
    badge: "Eco-Friendly"
  },
  {
    id: "heat",
    title: "High Heat Resistance",
    description: "Withstands temperature up to 120°C, dramatically outperforming standard single-use plastic and Styrofoam.",
    badge: "Industrial Grade"
  },
  {
    id: "antibacterial",
    title: "Natural Antibacterial",
    description: "Infused with organic citrus orange peel powder acting as a natural food antioxidant and antimicrobial agent.",
    badge: "Patented Innovation"
  },
  {
    id: "strength",
    title: "Solid Structural Rigidity",
    description: "Manufactured via hot-press molding providing durable, robust outer shell to survive transportation pressure.",
    badge: "High Durability"
  },
  {
    id: "food_safe",
    title: "Food-Safe Coating",
    description: "Protected with water-resistant natural beeswax coating, sealing against oils and light moisture effectively.",
    badge: "100% Non-Toxic"
  },
  {
    id: "zero_chemical",
    title: "Zero Synthetic Chemicals",
    description: "Uses activated natural lignin as biodegradable matrix binder. Formulated without synthetic glues or toxins.",
    badge: "Circular Economy"
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    parameter: "Tensile Strength & Rigidity",
    cocoLign: "Tall, solid & highly sturdy",
    plastic: "Medium, highly flexible but prone to tear",
    styrofoam: "Low, extremely fragile and easily broken"
  },
  {
    parameter: "Thermal Limit",
    cocoLign: "Withstands up to 120°C (Hot-press molded)",
    plastic: "Withstands up to 80°C - 100°C",
    styrofoam: "Withstands only up to 70°C"
  },
  {
    parameter: "Decomposition Rate",
    cocoLign: "Disintegrates beautifully in 60-90 days",
    plastic: "Prone to accumulate (Takes 400+ years)",
    styrofoam: "Non-degradable (Lasts indefinitely)"
  },
  {
    parameter: "Source Base material",
    cocoLign: "Upcycled coconut husk waste & lignin",
    plastic: "Fossil fuel petroleum polymers",
    styrofoam: "Fossil fuel expanded polystyrene"
  },
  {
    parameter: "Average Production Cost",
    cocoLign: "Highly competitive (Estimated Rp 730 / $0.035)",
    plastic: "Rp 1,200 - Rp 2,500 per unit",
    styrofoam: "Rp 1,000 - Rp 2,000 per unit"
  },
  {
    parameter: "Resource Influence",
    cocoLign: "Circular agricultural bio-waste utilization",
    plastic: "Depletes non-renewable petroleum reserves",
    styrofoam: "Depletes non-renewable petroleum reserves"
  },
  {
    parameter: "Eco Footprint",
    cocoLign: "Mitigates carbon, zero microplastics",
    plastic: "Severe water, ocean, and landfill pollution",
    styrofoam: "High toxic waste byproduct release"
  }
];

export const PRODUCTION_STEPS: ProductionStep[] = [
  {
    stepNumber: 1,
    phase: "Preparation",
    title: "Waste Sorting & Washing",
    description: "Coconut husks are sourced from local industrial agriculture and thoroughly cleaned in running water to remove impurities and odor.",
    iconName: "Droplets"
  },
  {
    stepNumber: 2,
    phase: "Preparation",
    title: "Oven Drying",
    description: "Clean coco-pulp is placed in low-temperature ovens to drive out moisture, curbing bacterial growth and preserving organic fibers.",
    iconName: "Flame"
  },
  {
    stepNumber: 3,
    phase: "Preparation",
    title: "Coarse Grinding",
    description: "The dried coconut residue undergoes coarse milling. This keeps fiber lengths optimal for reinforcing structural strength.",
    iconName: "Hammer"
  },
  {
    stepNumber: 4,
    phase: "Activation & Mixing",
    title: "Lignin Dissolution",
    description: "Natural lignin is dissolved completely in hot water at specific temperatures to activate its chemical binder traits.",
    iconName: "Waves"
  },
  {
    stepNumber: 5,
    phase: "Activation & Mixing",
    title: "Homogeneous Blending",
    description: "Ground fibers & lignin solution are thoroughly blended in a 70:30 ratio with orange peel powder added as a bioactive agent.",
    iconName: "Shuffle"
  },
  {
    stepNumber: 6,
    phase: "Forming & Finishing",
    title: "Hot-Press Molding",
    description: "The paste is injected into high-precision molds to undergo thermo-compression curing. This bonds the custom composite.",
    iconName: "Cpu"
  },
  {
    stepNumber: 7,
    phase: "Forming & Finishing",
    title: "Stabilization",
    description: "Molded products are cooled uniformly under monitored room temperatures to fix structural shapes and prevent warp.",
    iconName: "Thermometer"
  },
  {
    stepNumber: 8,
    phase: "Forming & Finishing",
    title: "Beeswax Barrier Spray",
    description: "Trays receive a fine coating of organic beeswax to repel oil & water, followed by a final drying session for distribution.",
    iconName: "Layers"
  }
];

export const IMPACT_METRICS: ImpactCard[] = [
  {
    title: "Environmental Impact",
    metrics: [
      {
        value: "1.16 kg",
        label: "CO2eq Savings",
        subtext: "Carbon footprint saved for every 1 kilogram of traditional polystyrene (Styrofoam) replaced.",
        iconName: "Leaf"
      },
      {
        value: "180 Tons",
        label: "Landfill Abatement",
        subtext: "Target waste diverted safely from local Indonesian landfills by 2028 through organic decay.",
        iconName: "Trash2"
      }
    ]
  },
  {
    title: "Sustainable Economics",
    metrics: [
      {
        value: "Rp 730",
        label: "Optimized Unit Cost",
        subtext: "Stunningly cheap unit production ($0.035), easily outcompeting bagasse board alternatives ($0.052).",
        iconName: "Coins"
      },
      {
        value: "32M Tons",
        label: "Biomass Resource",
        subtext: "Secured supply chain potential across ASEAN's Coconut Belt (Indonesia, Philippines, Vietnam).",
        iconName: "Network"
      }
    ]
  },
  {
    title: "Strategic/Social Scalability",
    metrics: [
      {
        value: "150K+",
        label: "Active Daily Users",
        subtext: "Target network of eco-minded consumers and wholesale food sellers using Coco-Lign by 2031.",
        iconName: "Users"
      },
      {
        value: "ISO 17088",
        label: "Regulatory Compliant",
        subtext: "Engineered in complete alignment with SNI 8218:2024 standards and international biodegradability rules.",
        iconName: "Award"
      }
    ]
  }
];

export const ROADMAP_YEARS: RoadmapYear[] = [
  {
    year: "2026",
    topic: "Development & Foundation",
    activity: "Developing and testing the COCO-LIGN PACK MVP in the local Indonesian market, gathering restaurant feedback.",
    output: "MVP ready, first batch prototyping, active initial local testing."
  },
  {
    year: "2027",
    topic: "Process Enhancement",
    activity: "Refining key product features, upgrading temperature limits, and setting up initial local supply channels.",
    output: "Upgraded moisture barrier, custom mold shapes, scale to first 5,000 active users."
  },
  {
    year: "2028",
    topic: "Automation & Analytics",
    activity: "Integrating production-line optimization software, scaling thermal press automation, and reducing manual labor.",
    output: "Semi-automated factory floor active, targets 180 tons of plastic replaced."
  },
  {
    year: "2029",
    topic: "Commercial Market Scale",
    activity: "Building high-volume restaurant agreements, partnering with delivery platforms, and extending wholesale distribution.",
    output: "Expansion of domestic retail connections, securing over 100,000 transactional orders."
  },
  {
    year: "2030",
    topic: "International Outreach",
    activity: "Introducing COCO-LIGN PACK trademark to Asia-Pacific distributors and obtaining global compost certifications.",
    output: "Export channel channels established, expanding community awareness to 15+ countries."
  },
  {
    year: "2031",
    topic: "Global Impact & Replication",
    activity: "Franchising production facilities across ASEAN's Coconut Belt and replicating localized green circular models.",
    output: "Decentralized factories active in Vietnam/Philippines, complete global brand footprint."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Kadek Diandra Prisha Hersaputri",
    role: "Leader",
    university: "Brawijaya University"
  },
  {
    name: "A.A. Ngurah Oka Saraswateswara Udayaditya Warmar",
    role: "Member",
    university: "Brawijaya University"
  },
  {
    name: "Made Puja Rajistha AW",
    role: "Member",
    university: "Brawijaya University"
  },
  {
    name: "Luh Kade Ari Lestari",
    role: "Member",
    university: "Brawijaya University"
  },
  {
    name: "Muhammad Heisyan Aleandro",
    role: "Member",
    university: "Primakara University"
  }
];
