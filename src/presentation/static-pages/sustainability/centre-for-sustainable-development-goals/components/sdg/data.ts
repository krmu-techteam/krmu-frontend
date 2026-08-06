import { Variants } from "framer-motion";

export interface SustainReportLink {
  label: string;
  url: string;
}

export interface SustainTrigger {
  id: string;
  label: string;
  reports?: SustainReportLink[];
}

export interface SdgBadgeCard {
  title: string;
  image: string;
}

export const sustainTriggers: SustainTrigger[] = [
  { id: "sustain-panel-1", label: "Sustainability" },
  {
    id: "sustain-panel-14",
    label: "SDG Annual Report",
    reports: [
      {
        label: "Sustainability Report 2022-2023",
        url: "https://krmangalam.edu.in/pdfs/sdg/annual-report-2022-23.pdf",
      },
      {
        label: "Sustainability Report 2024-2025",
        url: "https://krmangalam.edu.in/pdfs/sustainable/KRMU-Annual-Sustainibility-Report-2024-25.pdf",
      },
    ],
  },
  {
    id: "sustain-panel-3",
    label: "Energy Conservation Measures",
    reports: [
      {
        label: "9001-2025",
        url: "https://krmangalam.edu.in/pdfs/9001-2025-1.pdf",
      },
      {
        label: "Energy Audit - KRMU - 23-05-2025",
        url: "https://krmangalam.edu.in/pdfs/sustainable/energy-audit-krmu-23-05-2025.pdf",
      },
      {
        label: "Environmental Audit - KRMU - 23-05-2025",
        url: "https://krmangalam.edu.in/pdfs/sustainable/environmental-audit-krmu-23-05-2025.pdf",
      },
      {
        label: "Green Audit - KRMU - 23-05-2025",
        url: "https://krmangalam.edu.in/pdfs/sustainable/green-audit-krmu-23-05-2025.pdf",
      },
      {
        label: "ISO 50001-2025",
        url: "https://krmangalam.edu.in/pdfs/sustainable/iso-50001-2025.pdf",
      },
      {
        label: "ISO14001-2025",
        url: "https://krmangalam.edu.in/pdfs/sustainable/iso14001-2025.pdf",
      },
      {
        label: "ISO Certificates",
        url: "https://krmangalam.edu.in/pdfs/sustainable/iso-certificates.pdf",
      },
      {
        label: "Energy Audit Report 2019",
        url: "https://krmangalam.edu.in/pdfs/sustainable/energy-audit-report-2019.pdf",
      },
      {
        label: "Energy Audit Report 2020",
        url: "https://krmangalam.edu.in/pdfs/sustainable/energy-audit-report-2020.pdf",
      },
      {
        label: "Energy Audit Report 2021",
        url: "https://krmangalam.edu.in/pdfs/sustainable/energy-audit-report-2021.pdf",
      },
      {
        label: "Energy Audit Report 2022",
        url: "https://krmangalam.edu.in/pdfs/sustainable/energy-audit-report-2022.pdf",
      },
      {
        label: "Energy Audit Report 2023",
        url: "https://krmangalam.edu.in/pdfs/sustainable/energy-audit-report-2023.pdf",
      },
      {
        label: "Environmental Audit Report 2019",
        url: "https://krmangalam.edu.in/pdfs/sustainable/enviromenta-audit-report-2019.pdf",
      },
      {
        label: "Environmental Audit Report 2020",
        url: "https://krmangalam.edu.in/pdfs/sustainable/environment-audit-report-2020.pdf",
      },
      {
        label: "Environmental Audit Report 2021",
        url: "https://krmangalam.edu.in/pdfs/sustainable/environment-audit-report-2021.pdf",
      },
      {
        label: "Environmental Audit Report 2022",
        url: "https://krmangalam.edu.in/pdfs/sustainable/enviroment-audit-report-2022.pdf",
      },
      {
        label: "Environmental Audit Report 2023",
        url: "https://krmangalam.edu.in/pdfs/sustainable/environment-audit-report-2023.pdf",
      },
      {
        label: "Solar Energy",
        url: "https://krmangalam.edu.in/pdfs/sustainable/solar-write-up.pdf",
      },
      {
        label: "LED Conservation",
        url: "https://krmangalam.edu.in/pdfs/sustainable/led-conservation.pdf",
      },
      {
        label: "D. Sensor",
        url: "https://krmangalam.edu.in/pdfs/sustainable/d-sensor.pdf",
      },
    ],
  },
  { id: "sustain-panel-4", label: "Waste Management" },
  { id: "sustain-panel-5", label: "Water Conservation" },
  { id: "sustain-panel-6", label: "Green Campus Initiatives" },
  { id: "sustain-panel-13", label: "Eco Friendly Transport" },
  { id: "sustain-panel-7", label: "Barrier Free Environment" },
  { id: "sustain-panel-8", label: "Social Responsibility and Harmony" },
  { id: "sustain-panel-9", label: "Code of Conduct" },
  { id: "sustain-panel-10", label: "Best Practices" },
  { id: "sustain-panel-11", label: "Institutional Distinctiveness" },
  { id: "sustain-panel-15a", label: "Good Governance" },
  { id: "sustain-panel-16a", label: "Social Impact" },
  { id: "sustain-panel-17a", label: "Environment Sustainability Report" },
  {
    id: "sustain-panel-18a",
    label: "Campus Health Wellness and Well Being Ecosystem",
  },
  { id: "sustain-panel-19a", label: "Knowledge Exchange" },
];

export const sdgCards: SdgBadgeCard[] = [
  {
    title: "Good Health and Well-Being",
    image: "/images/sustainability/badge/good-health.jpg",
  },
  {
    title: "Clean Water and Sanitation",
    image: "/images/sustainability/badge/clear-water.jpg",
  },
  {
    title: "Affordable and Clean Energy",
    image: "/images/sustainability/badge/affordable.jpg",
  },
  {
    title: "Responsible Consumption and Production",
    image: "/images/sustainability/badge/responsible.jpg",
  },
  {
    title: "Climate Action",
    image: "/images/sustainability/badge/climate.jpg",
  },
  {
    title: "Partnerships for the Goals",
    image: "/images/sustainability/badge/partnership.jpg",
  },
];

export const accordionVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
      opacity: { duration: 0.2, ease: "linear" },
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.3, delay: 0.1, ease: "easeOut" },
    },
  },
};

export const wasteManagementData = {
  sections: [
    {
      title: "Solid waste management:",
      description:
        "The University has tie-ups with authorized vendors to collect garbage and paper waste from designated places. 100% usage of disposable products like paper glass helps to reduce solid waste in the campus. Students and staff members are encouraged to make the campus plastic-free. The University has placed waste bins in every area as per requirement with colour coding for e.g. green, blue and yellow. The compost pits to dump green waste, which is utilised for manure preparation and for maintaining a green campus. The wet waste is recycled along with cafeteria waste for soil manure/fertilisers after being processed in a pit. Standard operating procedure for disposal of chemical and microbial waste is in practice.",
    },
    {
      title: "Liquid waste management:",
      description:
        "The University has Sewage Treatment Plant of one lakh litre capacity, which is utilized for gardening. There is 100% utilization of liquid waste within the campus. Water from wash basins and hostel rooms are stored in tanks and further utilized for gardens. Low flush cistern has been installed in washrooms. Water squirting has been enabled in all taps. In view of the National Mission on Clean and Green Environment, we have taken steps for plantation inside as well as outside the campus. This activity is monitored by NSS every year. Tanks with the required storage capacity are available for rainwater harvesting.",
    },
    {
      title: "Biomedical waste management:",
      description:
        "Biomedical waste from university’s animal house is collected in separate bins. The University has signed a contract with authorized bio-medical waste management contractor who collects the waste from the designated place and disposes it according to bio-medical waste management rules.",
    },
    {
      title: "E-waste management:",
      description:
        "A Standard Operating Procedure is being followed for the management of “The Hazardous Lab & other Waste Disposal”. The e-waste generated from hardware which cannot be reused or recycled is disposed of centrally through the authorized vendors. Disposing of old, out dated and non-functioning electronic items such as monitors, computers, keyboards, mouse, power supplies, printers, batteries etc. is a major problem because such materials contain toxic chemicals and improper disposal of these items is injurious for living beings. The institute has identified certified vendors for E-waste disposal. The electronic equipment to be disposed is collected at a central store and then handed over to the concerned vendors.",
    },
    {
      title: "Waste recycling system:",
      description:
        "Faculty and staff members participate in the recycling effort by following the principle of separation of recyclable and non-recyclable materials and placing them in appropriately marked recycling bins. Students are motivated to participate in campus recycling efforts.",
    },
    {
      title: "Hazardous chemicals waste management:",
      description:
        "All kinds of hazardous chemicals like lead batteries, waste diesel from DG set and other chemical storage glass bottles are disposed-off according to the standard disposal norm, taking special care that no harm is caused to any living beings. The University has signed a contract with authorized waste management contractor who collects the waste from the designated place and disposes it according to waste management rules",
    },
  ],
  images: [
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/dustbin.png",
      alt: "Dustbin",
      caption: "Dustbin",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/ffhfhfgh.png",
      alt: "Waste Management Facility 1",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/hjgj.png",
      alt: "Waste Management Facility 2",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/fghfgh.png",
      alt: "Waste Management Facility 3",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/ytu.png",
      alt: "Waste Management Facility 4",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/njgndfjg.png",
      alt: "Waste Management Facility 5",
    },
  ],
};

export const waterConservationData = {
  sections: [
    {
      title: "Rainwater harvesting",
      description:
        "Conserving and preserving of water is a key issue that has been addressed by the University in the form of rainwater harvesting. The campus has been practicing rainwater harvesting mechanism in an area of 24.3 acres. There are 17 rainwater harvesting pits all over the campus. This mechanism ensures increase in water table index. This water is used for gardening & flushing toilets. The details of rainwater harvesting system have been designed by a certified architect and have been implemented throughout the campus.",
    },
    {
      title: "Borewell /Open well recharge",
      description:
        "Borewells are also one of the major water resources in the University. It is 3inches wide & 220 fts. deep which fulfills water requirement of the 24.3 acre campus.",
    },
    {
      title: "Construction of tanks and bunds",
      description:
        "The University campus consists of underground tank (Pump Room) of total capacity 4 lakh liters near Block A (Pump Room) wherein underground tanks no.1 & no.2 have a capacity of 1 lakh liters each for domestic use and underground tanks no.3 & no.4 have a capacity of 1 lakh liters each for Fire Fighting purpose & overhead tanks on block A, B, C & hostel building. Each block has two tanks for domestic water supply as well as for firefighting system with capacity of 50,000 liters each. On hostel building 25,000 liters capacity tank is provided. Maintenance and cleaning of overhead water tanks are done periodically.",
    },
    {
      title: "Wastewater recycling",
      description:
        "The University Sewage treatment plant is fully operational with 3,50,000 liters waste water collection capacity. Every day 1,00,000 liters sewage water is treated which is used for watering plants within the campus.",
    },
  ],
  images: [
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/fdsf.png",
      alt: "Rain Water Harvesting",
      caption: "Rain Water Harvesting",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/sdfsdfgg.png",
      alt: "Rain Water Harvesting Pits",
      caption: "Rain Water Harvesting Pits",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/borewell.png",
      alt: "Borwell Recharge",
      caption: "Borwell Recharge",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/borewell-recharge.png",
      alt: "Borwell Recharge System",
      caption: "Borwell Recharge System",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/borwell-recharge-system.png",
      alt: "Borwell Recharge System",
      caption: "Borwell Recharge System",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/construction.png",
      alt: "Overhead tank in University",
      caption: "Overhead tank in University",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/overhead.png",
      alt: "Overhead tank in University",
      caption: "Overhead tank in University",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/waster.png",
      alt: "Wastewater Recycling Facility 1",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/sdsd.png",
      alt: "Wastewater Recycling Facility 2",
    },
  ],
};

export const greenCampusData = {
  mainTitle: "Green Campus Initiatives",
  overviewParagraphs: [
    "KRMU has been awarded as the Sustainable Institutions of India in Green Rankings 2024. The University is aware of its environment conservation responsibilities and embraces principle of sustainable development to ensure any adverse environmental impact. Infrastructural development is done to maximize usage of natural resources like native vegetation, water reserves, sun and wind resources.",
    "Following initiatives are taken to ensure that KRMU becomes environment friendly campus.",
  ],
  sections: [
    {
      title: "Restricted Entry of Automobiles:",
      description:
        "The University implements no automobile policy in the campus. All the vehicles of employees and students are parked in the designated parking area. There are separate gates for entry and exit of vehicles. Inside the campus there is no entry of vehicles of any kind.",
    },
    {
      title: "Use of Bicycles/battery powered vehicles:",
      description:
        "All the staff and students will use bicycles/battery powered vehicles as a part of Green Campus & Environmental Sustainability, the entry of automobiles inside the campus is strictly prohibited. Only eco- friendly vehicles (bicycle and battery-operated vehicles) are permitted inside the campus. Any student, staff or outsiders parking their vehicle inside the premises will face disciplinary action. Students & Staff are encouraged to use cycles on campus",
    },
    {
      title: "Pedestrian Friendly Pathways",
      description:
        "The building plan and architecture are planned in user friendly that promotes walkability. Proper footpaths are made along the roads within the campus and are well maintained in terms of quality with lush green belts accompanying the roadsides. Campus is developed in walk friendly manner with network of pedestrian walkway across the campus and to discourage use of vehicles inside the campus",
    },
    {
      title: "Landscaping with Trees and Plants",
      description:
        "Two-tier plantations have been done along the campus boundary. Fruit bearing and shady plants like Ashok, Sondana, Kusum, Vismarkya, Kachnar, Pilkan, Sashut, Champa etc are planted. A nursery, and a well functional green house, composting unit to provide organic manure and trained manpower to carry out horticulture work is maintained. An organic orchard is created which harbors many horticulture plant varieties.",
    },
    {
      title: "Plastic free campus:",
      description:
        "All official communication to staffs and students is done through email, data collection is carried out through Sero soft portal. The university is trying its best to minimize plastic usage. The stores and food stalls are motivated to use paper and jute bags for packing. Awareness program is also conducted like Swachh Bharat Abhiyan.",
    },
    {
      title: "CNG University Buses and Cars",
      description:
        "All vehicles of the University have “Pollution Under Control” certificate University provides CNG buses and CNG cars for students, faculty and staff for daily commuting and also encourages carpooling to reduce carbon footprint.",
    },
    {
      title: "Energy Saving Initiatives",
      description:
        "The University consists of a solar power generating system on the roof top of the buildings. The university also promotes Earth Hour initiative of WWF by switching off lights for one hour on the designated date and time.",
    },
    {
      title: "Activities to Promote Green Campus",
      description:
        "Environment Club has been established in the University to ensure:",
      listItems: [
        "Seminars, debates, lectures and popular talks on environmental issues are conducted",
        "Field visits to environmentally important sites including polluted and degraded sites, wildlife parks, etc.",
        "Tree plantation, cleanliness drives are organized in campus and outside campus",
      ],
    },
  ],
  images: [
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/Screenshot-2025-08-30-121727.png",
      alt: "Greenery Around the Campus",
      caption: "Left Side of A-Block",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/Screenshot-2025-08-30-121801.png",
      alt: "Greenery Around the Campus",
      caption: "Left Side of main gate",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/Screenshot-2025-08-30-121958.png",
      alt: "Greenery Around the Campus",
      caption: "Right Side of A-Block",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/Screenshot-2025-08-30-122019.png",
      alt: "Greenery Around the Campus",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/Screenshot-2025-08-30-122042.png",
      alt: "Greenery Around the Campus",
      caption: "Right Side of A-Block",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/Screenshot-2025-08-30-122154.png",
      alt: "Greenery Around the Campus",
      caption: "Right Side of A-Block",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/Screenshot-2025-08-30-122230.png",
      alt: "Greenery Around the Campus",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/Screenshot-2025-08-30-122249.png",
      alt: "Greenery Around the Campus",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/Screenshot-2025-08-30-122317.png",
      alt: "Greenery Around the Campus",
      caption: "Use of Bicycles",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/ban.png",
      alt: "Greenery Around the Campus",
      caption: "Ban on Plastic",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/boys.png",
      alt: "Greenery Around the Campus",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/fghfghf.png",
      alt: "Greenery Around the Campus",
      caption: "Pedestrian Friendly Pathways",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/hfffh.png",
      alt: "Greenery Around the Campus",
    },
  ],
  policyButton: {
    label: "Green Environment Policy",
    url: "https://krmangalam.edu.in/pdfs/sustainable/green-environment-policy.pdf",
  },
};

export const ecoFriendlyTransportData = {
  header: {
    handbook: "Internal Policy Handbook",
    section: "Section: Campus Sustainability and Environment",
    policyTitle: "Policy Title: Eco-Friendly Transportation Policy",
    effectiveFrom: "Effective From: August 2024",
    reviewCycle: "Review Cycle: Every 3 years",
  },
  sections: [
    {
      title: "1. Purpose",
      description:
        "This policy outlines the university’s commitment to promoting eco-friendly, safe, and sustainable modes of transportation within and around the campus. It supports the university’s broader goal of becoming a Green Campus by reducing air pollution, conserving energy, enhancing road safety, and lowering its overall carbon footprint.",
    },
    {
      title: "2. Scope",
      description: "This policy applies to:",
      listItems: [
        "All students, faculty, staff, contractors, and visitors.",
        "All transportation modes used within and around the University campus.",
        "All designated parking and transit areas within the premises.",
      ],
    },
    {
      title: "3. Policy Objectives",
      listItems: [
        "To promote eco-conscious transportation among students and staff.",
        "To reduce vehicular emissions and fuel consumption.",
        "To ensure safety and order in campus movement.",
        "To support the principles of sustainable development and climate responsibility.",
      ],
    },
    {
      title: "4. Policy Guidelines",
      subsections: [
        {
          subTitle: "4.1 Restricted Entry of Automobiles",
          listItems: [
            'The University follows a "No Vehicle Inside Campus" policy.',
            "All personal vehicles (student, faculty, staff, visitors) must be parked in designated parking areas outside academic and administrative zones.",
            "Separate entry and exit gates are provided for organized vehicle movement.",
            "Only authorized service vehicles and emergency vehicles are permitted inside with prior approval.",
          ],
        },
        {
          subTitle: "4.2 Use of Bicycles and Battery-Operated Vehicles",
          listItems: [
            "Use of bicycles and battery-powered/electric vehicles is strongly encouraged.",
            "Only non-polluting vehicles (bicycles or battery vehicles) are allowed within campus pathways.",
            "Faculty, staff, and students are encouraged to commute within the campus using bicycles provided by the university or personal cycles.",
            "Any violation of this guideline—unauthorized entry or parking of petrol/diesel vehicles within the academic zone—will attract disciplinary action.",
          ],
        },
        {
          subTitle: "4.3 Public Transportation and University Transport System",
          listItems: [
            "The University operates 80 CNG buses and CNG cars for daily commuting of students and staff.",
            "Buses cover major city routes and are equipped with safety and tracking systems.",
            "Use of University-provided CNG transportation is encouraged for fuel conservation, road safety, and environmental protection.",
            "Carpooling is promoted among staff to minimize redundant trips and reduce congestion and emissions.",
          ],
        },
        {
          subTitle: "4.4 Carbon Footprint Reduction Measures",
          listItems: [
            "All vehicles entering the campus must possess a valid Pollution Under Control (PUC) Certificate.",
            "Carbon accounting practices are followed for tracking and reducing vehicular emissions annually.",
            "Awareness drives are conducted periodically to sensitize the community about the importance of green transport solutions.",
          ],
        },
      ],
    },
    {
      title: "5. Infrastructure Support",
      listItems: [
        "Bicycle stands and charging stations for battery-operated vehicles are available at multiple campus points.",
        "Signages and paths are designed to prioritize pedestrians and cyclists.",
        "Infrastructure development integrates passive green features such as sunken courts and shaded pedestrian zones to minimize heat and promote walkability.",
      ],
    },
    {
      title: "6. Awareness and Engagement",
      description:
        "Students and employees are educated on the benefits of sustainable transportation through:",
      listItems: [
        "Orientation programs",
        "Green Campus campaigns",
        "Workshops and environmental days",
        "Transport coordinators are appointed to promote safe and sustainable commuting practices.",
      ],
    },
    {
      title: "7. Monitoring and Compliance",
      listItems: [
        "The Campus Security Team ensures compliance with vehicle movement and parking regulations.",
        "The Facilities Management Team maintains transportation infrastructure, including EV charging and bicycle parking areas.",
        "Violations are documented, and appropriate warnings, fines, or disciplinary actions may be applied.",
      ],
    },
    {
      title: "8. Review and Improvement",
      listItems: [
        "This policy shall be reviewed every three years or sooner if required based on infrastructural or regulatory changes.",
        "The Environment Compliance Committee is responsible for monitoring implementation and recommending updates.",
      ],
    },
  ],
  documentControl: {
    title: "Document Control",
    version: "1.0",
    date: "August 2024",
    description: "Initial implementation of Eco-Friendly Transportation Policy",
  },
  images: [
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/09/bus-1.jpeg",
      alt: "University CNG Bus 1",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/09/bus-2.jpeg",
      alt: "University CNG Bus 2",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/09/bus-3.jpeg",
      alt: "University CNG Bus 3",
    },
  ],
};

export interface BarrierFreeSubItem {
  label: string;
  text: string;
}

export interface BarrierFreeSection {
  title: string;
  description?: string;
  items?: BarrierFreeSubItem[];
}

export const barrierFreeData = {
  mainTitle: "Barrier Free Environment",
  mainDescription:
    "KRMU provides a barrier-free environment in the university entail ensuring accessibility and inclusivity for all individuals, regardless of their physical, cognitive, sensory, or other abilities.",
  sections: [
    {
      title: "Physical Accessibility:",
      items: [
        {
          label: "Wheelchair Access",
          text: "The university campus has ramps, elevators, and lifts available throughout campus buildings to provide access to individuals with mobility impairments.",
        },
        {
          label: "Accessible Entrances and Exits",
          text: "Automatic doors, wide doorways, and low thresholds has been installed to enable easy entry and exit for individuals with mobility aids.",
        },
        {
          label: "Accessible Restrooms",
          text: "Restrooms are equipped with accessible stalls, grab bars, and sinks to accommodate individuals with mobility challenges.",
        },
        {
          label: "Accessible Parking",
          text: "Designating accessible parking space has been earmarked in the parking lot complying with accessibility standards.",
        },
      ],
    },
    {
      title: "Communication Accessibility:",
      items: [
        {
          label: "Signage",
          text: "Clear and easy-to-read signage with large fonts, high contrast colors, and Braille to aid individuals with visual impairments.",
        },
        {
          label: "Scribes",
          text: "Our college also provides Scribes for assisting the Divyagjan during various examinations including University examinations and as well as outside examinations.",
        },
      ],
    },
    {
      title: "Academic Accessibility:",
      items: [
        {
          label: "Flexible Learning Options",
          text: "The university offers flexible course formats, such as online classes or hybrid models, to accommodate students with diverse learning needs and preferences.",
        },
        {
          label: "Accessible Instructional Materials",
          text: "Textbooks, readings, and course materials in accessible formats, such as electronic text or audio recordings, to support students with disabilities.",
        },
        {
          label: "Accommodations and Support Services",
          text: "Offering accommodations such as extended time for exams, note-taking assistance, or alternative testing formats through disability support services.",
        },
      ],
    },
    {
      title: "Social and Cultural Accessibility:",
      items: [
        {
          label: "Inclusive Events and Activities",
          text: "Organizing social events, clubs, and extracurricular activities that are accessible to individuals with diverse abilities and interests.",
        },
        {
          label: "Promoting Diversity and Inclusion",
          text: "Fostering a culture of inclusivity and respect by promoting awareness, understanding, and acceptance of individuals with disabilities within the university community.",
        },
      ],
    },
    {
      title: "Psychological Accessibility:",
      items: [
        {
          label: "Mental Health Support Services",
          text: "Providing counselling services, peer support groups, and mental health resources to address the psychological well-being of all students, including those with mental health conditions.",
        },
        {
          label: "Stress Reduction Initiatives",
          text: "Implementing stress reduction programs, mindfulness activities, and wellness initiatives to support the mental health and overall well-being of students.",
        },
      ],
    },
    {
      title: "Medical Centre:",
      description:
        "The University has a well-equipped medical room with provision of qualified doctor, nurse and nursing assistants on 24*7 basis to cater medical need of university including divyangs. Apart from Medical centres special clinical centres for eye & vision, language and speech and psychological counselling are fully functional to add friendless to students in general and Divyang students in particular.",
    },
  ] as BarrierFreeSection[],
  images: [
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/railing.png",
      alt: "Railings",
      caption: "Railings",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/helpdesk.png",
      alt: "Heldesk",
      caption: "Heldesk",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/recep.png",
      alt: "Reception",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/toilet.png",
      alt: "Toilet",
      caption: "Toilet",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/tactile.png",
      alt: "Tactile Path",
      caption: "Tactile Path",
    },
    {
      src: "https://www.krmangalam.edu.in/wp-content/uploads/2025/08/wheel.png",
      alt: "Wheelchair",
      caption: "Wheelchair",
    },
  ],
};

export const socialResponsibilityData = {
  mainTitle: "Social Responsibility and Harmony",
  paragraphs: [
    "The University emphasizes providing an inclusive environment for all the students and employees. Communal socio- economic and such other programmes are best achieved through conduct of major events like Hindi Diwas, Engineers Day, Architecture Day, Youth Day, Human Rights Day, Khadi Day, Teachers Day, Haryana Day, Festivals like Holi, Diwali, Gurpurab, Basant Panchami, Vishwakarma Puja, Valmini Jayanti, Lohri etc. Hindi Diwas is also celebrated in which students participate in debate, poster and essay competitions. This establishes positive interaction among people of different racial and cultural backgrounds.",
    "Ambedkar Jayanti, Gandhi Jayanti, Netaji Subhash Chandra Bose Jayanti, Sardar Vallabh Bhai Patel Jayanti (Unity Day) and other important days are celebrated in the University to create awareness about the national leaders and their contribution in the development of India.",
    "Clubs and Societies are formed by students on the campus which support and propagate the idea of diverse cultures. The students are given ample opportunities to organize cultural festivals to showcase our rich dance forms, music and diverse enriching traditional beliefs from various states across India. The students also visit Suraj Kund International Crafts Fair every year to understand the rich and diverse culture, handicrafts and develop inter-disciplinary entrepreneurship skills.",
    "In cultural fest ‘Rendezvous’ popular musicians and singers with their teams are invited to enthrall the students with rich cultural songs. This helps not only in tapping the talents of the students but also making them conscious of the rich culture of our state and our country.",
    "KRMU’s annual literary magazine ‘Reflections’ encourages people to pen down their ideas in the form of poems, stories, essays and paintings. Such literary and artistic expressions of students are compiled and widely circulated annually.",
    "The students are encouraged to take up projects based on the theme to promote local and regional culture such as fashion shows on the theme of Indian States, the Art Gallery of School of Humanities promotes rich cultural heritage of India, Journalism School organizes various competitions in Hindi language also.",
    "Special facilities are created for the Divyangjan students. Their mobility is supported with the provision of ramps and wheelchairs. Special restroom facilities have been provided in the college premises. Audio-visual and Braille facilities are available for them on the ground floor of the library. During the examination, scribes are arranged for the needy.",
    "Chetna Society in collaboration with Heartfulness Trust organizes meditation sessions. The collaboration session with ISCON are also conducted to promote peace and harmony.",
  ],
  reportButton: {
    label: "Reports",
    url: "https://krmangalam.edu.in/pdfs/sustainable/reports.pdf",
  },
};

export const codeOfConductData = {
  mainTitle: "Code of Conduct",
  reports: [
    {
      label: "COC-Code-of-Conduct-Committee",
      url: "https://krmangalam.edu.in/pdfs/sustainable/coc-code-of-conduct-committee.pdf",
    },
    {
      label: "COC-Ethics-Awareness-Activities",
      url: "https://krmangalam.edu.in/pdfs/sustainable/coc-ethics-awareness-activities.pdf",
    },
    {
      label: "COC-Revised-Handbook-of-COC-Professional-Ethics-and-Human-Values",
      url: "https://krmangalam.edu.in/pdfs/sustainable/coc-revised-handbook-of-coc-professional-ethics-and-human-values.pdf",
    },
    {
      label: "Policy-of-Code-of-Conduct",
      url: "https://krmangalam.edu.in/pdfs/sustainable/policy-of-code-of-conduct.pdf",
    },
  ],
};

export const bestPracticesData = {
  mainTitle: "Best Practices",
  reports: [
    {
      label: "BEST-PRACTICE-I",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/best-practice-i-brochure.pdf",
    },
    {
      label: "BEST-PRACTICE-II",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/best-practice-ii-brochure.pdf",
    },
  ],
};

export const institutionalDistinctivenessData = {
  mainTitle: "Institutional Distinctiveness",
  reports: [
    {
      label: "Institutional-Distinctiveness",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/institutional-distinctiveness-brochure.pdf",
    },
  ],
};

export const goodGovernanceData = {
  mainTitle: "Good Governance",
  reports: [
    {
      label: "Good Governance",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-Good-Governance.pdf",
    },
  ],
};

export const socialImpactData = {
  mainTitle: "Social Impact",
  reports: [
    {
      label: "Social Impact",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-Social-Impact.pdf",
    },
  ],
};

export const environmentSustainabilityData = {
  mainTitle: "Environment Sustainability Report",
  reports: [
    {
      label: "Environment sustainability Report",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-Environment-sustainability-Report.pdf",
    },
  ],
};

export const campusHealthData = {
  mainTitle: "Campus Health Wellness and Well Being Ecosystem",
  reports: [
    {
      label: "Campus Health Wellness and Well Being Ecosystem",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-CAMPUS-HEALTH-WELLNESS-AND-WELL-BEING-ECOSYSTEM.pdf",
    },
  ],
};

export const knowledgeExchangeData = {
  mainTitle: "Knowledge Exchange",
  paragraphs: [
    "KR Mangalam University actively promotes knowledge exchange through research collaboration, community outreach, capacity-building programmes, and socially responsive academic initiatives. The University believes that knowledge generated within higher education institutions must be transferred beyond the classroom and should contribute meaningfully to society, local communities, public institutions, and sustainable development.",
    "The University has undertaken several initiatives aligned with the United Nations Sustainable Development Goals, particularly in the areas of quality education, gender equality, health and well-being, environmental sustainability, legal awareness, social inclusion, and community empowerment. Through its Centres, Schools, faculty members, and student-led initiatives, the University conducts awareness campaigns, workshops, outreach activities, extension lectures, training sessions, and community engagement programmes for students, faculty, local communities, schools, and external stakeholders.",
    "The University’s Centre for Sustainable Development Goals plays an important role in promoting SDG-based learning, awareness, research, and outreach. It facilitates academic and community-based initiatives on sustainability, environmental responsibility, health and well-being, inclusive communities, gender sensitisation, and responsible citizenship. These initiatives help in disseminating knowledge to wider society and encourage students and faculty to engage with real-life social and environmental challenges.",
    "The University also promotes interdisciplinary research and collaboration with academic institutions, NGOs, industry bodies, government agencies, and community organisations. Faculty members and students are encouraged to participate in research projects, conferences, seminars, policy discussions, consultancy activities, and publications that address local, regional, national, and global sustainability challenges.",
    "As part of its social responsibility, the University conducts outreach programmes such as legal literacy camps, environmental awareness drives, health and well-being sessions, sustainability campaigns, school engagement programmes, and community development initiatives. These activities support the transfer of academic knowledge into practical social impact and strengthen the University’s contribution to inclusive and sustainable development.",
    "The University remains committed to creating a positive impact on society by sharing academic expertise, building partnerships, supporting community engagement, and promoting research and innovation for sustainable development.",
  ],
  sectionTitle:
    "Activities focusing on collaborations and long-term knowledge-sharing networks",
  reports: [
    {
      label: "Academic Outreach and Knowledge Exchange Report 2024-25",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/Academic-Outreach-and-Knowledge-Exchange-Report-2024-25.pdf",
    },
    {
      label: "National Service Scheme Initiatives 2024-25",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/National-Service-Scheme-Initiatives-2024-25.pdf",
    },
    {
      label: "Youth Red Cross Initiatives 2024-25",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/YRC-Initiatives-MAGAZINE-2024-2025.pdf",
    },
    {
      label: "iqac-initiatives-2024-25",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/iqac-initiatives-2024-25-1.pdf",
    },
    {
      label: "MOU Save Aravali",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/MOU-Save-Aravali.pdf",
    },
    {
      label: "Seven-Days University Level Camp",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-DCRUST-Report.pdf",
    },
    {
      label: "Event Report Drug Abuse 20-Feb",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-Event-Report-Drug-Abuse-20-Feb.pdf",
    },
    {
      label: "Event Report International Women Day",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-Event-Report-International-women-day.pdf",
    },
    {
      label: "Event Report NSS Ambedakar Jayanti",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-Event-Report-NSS-Ambedakar-Jayanti.pdf",
    },
    {
      label: "Event Report NSS Donation Drive 30th-Jan-2026",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-Event-Report-NSS-Donation-Drive-30th-Jan-2026.pdf",
    },
    {
      label: "Event Report NSS First Aid Training",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-Event-Report-NSS-First-Aid-Training.pdf",
    },
    {
      label: "Mullana Camp Rpeort",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-Mullana-Camp-Rpeort.pdf",
    },
    {
      label: "Poshan Pakhwada Report 2026",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-Poshan-Pakhwada-Report-2026.pdf",
    },
    {
      label: "Report Youth Exchange",
      url: "https://www.krmangalam.edu.in/pdfs/sustainable/sdg-REPORT-YOUTH-EXCHANGE.pdf",
    },
  ],
};
