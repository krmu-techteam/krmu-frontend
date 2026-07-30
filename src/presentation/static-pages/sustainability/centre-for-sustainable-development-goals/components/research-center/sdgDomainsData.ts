export interface IndicatorRow {
  indicator: string;
  fy22_23: string;
  fy23_24: string;
  fy24_25: string;
  trend: string;
  target25_26: string;
}

export interface GoalCard {
  title: string;
  items: string[];
}

export interface ClusterData {
  id: string;
  title: string;
  heading: string;
  description: string;
  snapshotTitle: string;
  snapshot: string[];
  tableTitle?: string;
  tableHeaders: string[];
  tableRows: IndicatorRow[];
  cards: GoalCard[];
}

export const sdgClusters: ClusterData[] = [
  {
    id: "people",
    title: "PEOPLE CLUSTER SECTION (SDGs 1, 2, 3, 4, 5)",
    heading: "Human Development & Social Inclusion Initiatives",
    description:
      "K.R. Mangalam University promotes inclusive social development through sustainability-aligned research, community engagement initiatives, and student participation programmes. This cluster reflects the University’s commitment to advancing human well-being, equitable access to education, public health awareness, and community resilience in alignment with Sustainable Development Goals 1, 2, 3, 4 and 5.",
    snapshotTitle:
      "Key Human Development & Social Inclusion Performance Snapshot",
    snapshot: [
      "SDG Social Research Publications – 320 ↑",
      "Community Beneficiaries through Outreach –",
      "Student Participation in Sustainability Initiatives –",
      "Health & Well-being Programmes Conducted –",
    ],
    tableHeaders: [
      "Indicator",
      "FY 2022-23",
      "FY 2023-24",
      "FY 2024-25",
      "Performance Trend",
      "FY 2025-26 Target",
    ],
    tableRows: [
      {
        indicator:
          "SDG-aligned research publications in health, education & social sustainability",
        fy22_23: "44",
        fy23_24: "72",
        fy24_25: "320",
        trend: "↑ Strong multi-year growth",
        target25_26: "350",
      },
      {
        indicator:
          "Community beneficiaries through sustainability outreach programmes",
        fy22_23: "114",
        fy23_24: "58",
        fy24_25: "51",
        trend: "↑ Increased outreach initiatives",
        target25_26: "",
      },
      {
        indicator: "Student participation in social sustainability initiatives",
        fy22_23: "",
        fy23_24: "",
        fy24_25: "",
        trend: "↑ Enhanced engagement culture",
        target25_26: "",
      },
    ],
    cards: [
      {
        title: "Research Focus Areas",
        items: [
          "Public health, nutrition sustainability, and healthcare access research",
          "Inclusive and equitable education systems",
          "Gender equality and social empowerment studies",
          "Rural livelihood development and community resilience research",
          "Mental health and well-being interventions",
        ],
      },
      {
        title: "Research Output & Academic Contributions",
        items: [
          "SDG-aligned research publications in health, education, and social sustainability",
          "Funded interdisciplinary social development research projects",
          "Student research and field-based sustainability studies",
          "Academic conferences and knowledge dissemination initiatives",
        ],
      },
      {
        title: "Community Engagement & Outreach Outcomes",
        items: [
          "Implementation of health awareness programmes, wellness camps, and skill development initiatives",
          "Sustainability outreach projects benefiting local communities",
          "Student participation in social sustainability initiatives and volunteer programmes",
        ],
      },
      {
        title: "Institutional Impact & Policy Engagement",
        items: [
          "Policy briefs and research inputs shared with government agencies and civil society organisations",
          "Strategic partnerships and MoUs with social sector organisations",
          "Strategic partnerships and MoUs with social sector organisations",
        ],
      },
    ],
  },
  {
    id: "prosperity",
    title: "PROSPERITY CLUSTER (SDGs 7, 8, 9, 10, 11)",
    heading: "Sustainable Innovation & Inclusive Economic Growth",
    description:
      "K.R. Mangalam University advances sustainable economic development through innovation-driven research, renewable energy initiatives, green entrepreneurship support, and industry collaboration. This cluster reflects the University’s commitment to promoting responsible industrial growth, resilient infrastructure, and inclusive economic opportunities in alignment with Sustainable Development Goals 7, 8, 9, 10 and 11.",
    snapshotTitle:
      "Key Sustainable Innovation & Economic Growth Performance Snapshot",
    snapshot: [
      "SDG Innovation & Economic Sustainability Research Publications – 402 ↑",
      "Renewable Energy & Infrastructure Research Expansion – Significant growth ↑",
      "Inclusive Development & Smart Systems Research Engagement – Strengthened ↑",
      "Interdisciplinary Sustainability Innovation Output – Accelerated ↑",
    ],
    tableHeaders: [
      "Indicator",
      "FY 2022-23",
      "FY 2023-24",
      "FY 2024-25",
      "Performance Trend",
      "FY 2025-26 Target",
    ],
    tableRows: [
      {
        indicator:
          "SDG-aligned research publications in renewable energy, innovation, infrastructure & inclusive economic growth",
        fy22_23: "96",
        fy23_24: "148",
        fy24_25: "402",
        trend: "↑ Strong multi-year research growth",
        target25_26: "430",
      },
    ],
    cards: [
      {
        title: "Research Focus Areas",
        items: [
          "Renewable energy systems and energy transition technologies",
          "Sustainable infrastructure and climate-resilient urban development",
          "Smart cities and digital sustainability solutions",
          "Green entrepreneurship, start-up incubation, and innovation ecosystems",
          "Inclusive economic development and livelihood sustainability research",
        ],
      },
      {
        title: "Research Output & Academic Contributions",
        items: [
          "SDG-aligned research publications in engineering, innovation, and sustainable development",
          "Funded research projects on renewable energy, smart technologies, and infrastructure resilience",
          "Innovation prototypes, patents, and technology transfer initiatives",
          "Industry-academia collaborative research programmes",
        ],
      },
      {
        title: "Institutional Innovation & Industry Engagement",
        items: [
          "Development of green technology solutions and pilot implementations",
          "Entrepreneurship development programmes focused on sustainability",
          "Incubation and mentoring of start-ups addressing environmental and societal challenges",
        ],
      },
      {
        title: "Economic & Societal Impact",
        items: [
          "Contribution to sustainable business models and employment generation",
          "Technology-driven solutions supporting resilient urban and regional development",
          "Industry partnerships promoting responsible production and resource efficiency",
        ],
      },
    ],
  },
  {
    id: "planet",
    title: "PLANET CLUSTER (SDGs 6, 12, 13, 14, 15)",
    heading: "Environmental Stewardship & Climate Action",
    description:
      "K.R. Mangalam University is committed to environmental responsibility through integrated climate action strategies, resource conservation practices, renewable energy adoption, biodiversity enhancement, and circular economy initiatives. This cluster reflects the University’s efforts to strengthen ecological sustainability and climate resilience in alignment with Sustainable Development Goals 6, 12, 13, 14 and 15.",
    snapshotTitle:
      "Key Environmental Sustainability & Climate Action Performance Snapshot",
    snapshot: [
      "Environmental Sustainability Research Publications – 515",
      "Solar Renewable Energy Capacity – 310 kWp",
      "Wastewater Treatment Coverage – 80%",
      "Rainwater Harvesting Coverage – 9.24 lakh sq.ft",
      "Low-flow Water Fixtures – 933",
    ],
    tableTitle: "Planet Cluster – Operational Sustainability Performance",
    tableHeaders: [],
    tableRows: [],
    cards: [
      {
        title: "Research Focus Areas",
        items: [
          "Renewable energy systems and energy transition technologies",
          "Sustainable infrastructure and climate-resilient urban development",
          "Smart cities and digital sustainability solutions",
          "Green entrepreneurship, start-up incubation, and innovation ecosystems",
          "Inclusive economic development and livelihood sustainability research",
        ],
      },
      {
        title: "Research Output & Academic Contributions",
        items: [
          "SDG-aligned research publications in engineering, innovation, and sustainable development",
          "Funded research projects on renewable energy, smart technologies, and infrastructure resilience",
          "Innovation prototypes, patents, and technology transfer initiatives",
          "Industry-academia collaborative research programmes",
        ],
      },
      {
        title: "Institutional Innovation & Industry Engagement",
        items: [
          "Development of green technology solutions and pilot implementations",
          "Entrepreneurship development programmes focused on sustainability",
          "Incubation and mentoring of start-ups addressing environmental and societal challenges",
        ],
      },
      {
        title: "Economic & Societal Impact",
        items: [
          "Contribution to sustainable business models and employment generation",
          "Technology-driven solutions supporting resilient urban and regional development",
          "Industry partnerships promoting responsible production and resource efficiency",
        ],
      },
    ],
  },
  {
    id: "peace",
    title: "PEACE CLUSTER (SDG 16)",
    heading: "Governance, Ethics & Institutional Sustainability",
    description:
      "K.R. Mangalam University promotes responsible institutional governance through sustainability-oriented policies, ethical leadership practices, transparency mechanisms, and participatory decision-making processes. This cluster reflects the University’s commitment to strengthening institutional integrity, regulatory compliance, and inclusive governance systems in alignment with Sustainable Development Goal 16.",
    snapshotTitle:
      "Key Governance & Institutional Sustainability Performance Snapshot",
    snapshot: [
      "Governance & Institutional Sustainability Research Publications – 74 ↑",
      "Structured Campus Health & Well-being Ecosystem – Operational institutional framework",
      "Sustainability Governance Policies – Integrated across academic and administrative systems",
      "Stakeholder Participation in Sustainability Committees – Strengthening collaborative governance",
    ],
    tableTitle: "PEACE CLUSTER (SDG 16)",
    tableHeaders: [
      "Indicator",
      "FY 2022-23",
      "FY 2023-24",
      "FY 2024-25",
      "Performance Trend",
      "FY 2025-26 Target",
    ],
    tableRows: [
      {
        indicator:
          "SDG-aligned research publications in governance, ethics, justice & institutional sustainability",
        fy22_23: "28",
        fy23_24: "46",
        fy24_25: "74",
        trend: "↑ Steady academic growth",
        target25_26: "90",
      },
      {
        indicator:
          "Institutional sustainability governance framework implementation",
        fy22_23: "Foundational sustainability policies operational",
        fy23_24: "Governance coordination mechanisms strengthened",
        fy24_25: "Integrated sustainability governance model active",
        trend: "↑ Institutional governance maturity",
        target25_26: "ESG governance integration roadmap",
      },
      {
        indicator: "Campus health, wellness & ethical leadership initiatives",
        fy22_23: "Structured wellness programmes initiated",
        fy23_24: "Expanded participation ecosystem",
        fy24_25: "Holistic well-being support framework operational",
        trend: "↑ Inclusive campus culture strengthening",
        target25_26: "Preventive well-being strategy",
      },
      {
        indicator: "Stakeholder participation in sustainability",
        fy22_23: "Committee-level",
        fy23_24: "Departmental sustainability",
        fy24_25: "Multi-stakeholder sustainability",
        trend: "↑ Collaborative",
        target25_26: "Community sustainability",
      },
      {
        indicator: "governance processes",
        fy22_23: "engagement initiated",
        fy23_24: "coordination improving",
        fy24_25: "engagement visible",
        trend: "governance culture",
        target25_26: "governance platform",
      },
    ],
    cards: [
      {
        title: "Research Focus Areas",
        items: [
          "Sustainability governance frameworks and environmental policy analysis",
          "Ethical leadership models and responsible institutional management",
          "Legal literacy, access to justice, and sustainability law research",
          "Participatory governance and community decision-making systems",
        ],
      },
      {
        title: "Institutional Policy Contributions",
        items: [
          "Development and implementation of sustainability-related institutional policies",
          "Research inputs supporting governance reforms and accountability mechanisms",
          "Integration of ethical sustainability principles in academic and administrative processes",
        ],
      },
      {
        title: "Capacity Building & Awareness Initiatives",
        items: [
          "Legal awareness programmes and sustainability governance workshops",
          "Training sessions on ethical leadership and responsible citizenship",
          "Stakeholder engagement platforms promoting transparency and dialogue",
        ],
      },
      {
        title: "Institutional Impact",
        items: [
          "Strengthening of governance systems supporting sustainable development",
          "Promotion of inclusive, transparent, and accountable institutional practices",
        ],
      },
    ],
  },
  {
    id: "partnership",
    title: "PARTNERSHIP CLUSTER (SDG 17)",
    heading: "Global Collaboration & Sustainability Networks",
    description:
      "K.R. Mangalam University actively promotes collaborative approaches to sustainable development through strategic partnerships with international institutions, industry stakeholders, government agencies, and community organisations. This cluster reflects the University’s commitment to advancing global sustainability dialogue, interdisciplinary research collaboration, and knowledge exchange in alignment with Sustainable Development Goal 17.",
    snapshotTitle: "Key Sustainability Partnership Performance Snapshot",
    snapshot: [
      "International SDG Collaborative Research Output – Strong upward trend ↑",
      "Multi-country Sustainability Research Engagement – Expanding academic network ↑",
      "Interdisciplinary Institutional Research Partnerships – Strengthened collaboration ecosystem ↑",
      "Global Knowledge Exchange in Sustainability Themes – Increasing institutional visibility ↑",
    ],
    tableTitle: "PARTNERSHIP CLUSTER (SDG 17)",
    tableHeaders: [
      "Indicator",
      "FY 2022-23",
      "FY 2023-24",
      "FY 2024-25",
      "Performance Trend",
      "FY 2025-26 Target",
    ],
    tableRows: [
      {
        indicator:
          "International SDG-aligned collaborative research publications",
        fy22_23: "Verified collaboration present",
        fy23_24: "Collaboration volume increased",
        fy24_25: "Strong international co-authorship visibility",
        trend: "↑ Expanding global sustainability engagement",
        target25_26: "Strategic global research alliances",
      },
      {
        indicator:
          "Countries involved in sustainability research collaboration",
        fy22_23: "Emerging global academic linkage",
        fy23_24: "Expanded multi-country research network",
        fy24_25: "Structured international sustainability research presence",
        trend: "↑ Institutional internationalisation maturity",
        target25_26: "Targeted global SDG research partnerships",
      },
      {
        indicator: "Joint sustainability research",
        fy22_23: "Foundational interdisciplinary projects",
        fy23_24: "Strengthened applied sustainability",
        fy24_25: "Growing collaborative",
        trend: "↑ Partnership depth strengthening",
        target25_26: "Global sustainability",
      },
      {
        indicator: "Initiatives with academic / industry partners",
        fy22_23: "",
        fy23_24: "Research interface",
        fy24_25: "Innovation ecosystem",
        trend: "",
        target25_26: "Innovation platform",
      },
    ],
    cards: [
      {
        title: "Research Focus Areas",
        items: [
          "International sustainability collaborations and interdisciplinary research networks",
          "Industry-academia partnerships for sustainable technology development",
          "Community-driven sustainability innovation projects",
          "Policy dialogue platforms and global SDG benchmarking initiatives",
        ],
      },
      {
        title: "Collaborative Research Output",
        items: [
          "Joint publications and funded international sustainability research projects",
          "Knowledge exchange programmes and sustainability conferences",
          "Multistakeholder initiatives addressing regional and global sustainability challenges",
        ],
      },
      {
        title: "Community & Institutional Partnerships",
        items: [
          "Strategic MoUs with government bodies, NGOs, and international institutions",
          "Sustainability outreach programmes benefiting local communities",
          "Capacity-building initiatives promoting sustainable practices",
        ],
      },
      {
        title: "Global Impact & Outreach",
        items: [
          "Contribution to global sustainability discourse and SDG implementation efforts",
          "Enhanced institutional visibility through collaborative sustainability leadership",
        ],
      },
    ],
  },
];
