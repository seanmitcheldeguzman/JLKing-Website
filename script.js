// =====================================================
// JLKING CONSULTING — SCRIPT
// =====================================================

function buildProjectImages(images) {
  return images.map((image, index) => {
    if (typeof image === "string") {
      const url = image.startsWith("http")
        ? image
        : `https://images.unsplash.com/${image}?auto=format&fit=crop&q=80&w=1400`;

      return {
        thumb: url,
        full: url,
        alt: `Project image ${index + 1}`,
        width: 0,
        height: 0
      };
    }

    return {
      thumb: image.thumb || image.full,
      full: image.full,
      alt: image.alt || `Project image ${index + 1}`,
      width: image.width || 0,
      height: image.height || 0
    };
  });
}

const projectData = [
  {
    id: "remedy-place-boston",
    title: "Remedy Place Boston",
    category: "Wellness",
    scale: "Boston, MA",
    description: "Executive oversight for a flagship social wellness concept integrating spa, recovery, and hospitality programming.",
    problem: "Complex coordination across design, construction, and wellness systems in a high-end flagship environment with elevated brand expectations.",
    solution: "Led alignment between ownership, consultants, and contractor teams while maintaining execution clarity and schedule discipline.",
    result: "Delivered a flagship environment fully aligned with brand standards and operational requirements.",
    img: "https://i.imgur.com/fZ9CEiX.jpeg",
    images: buildProjectImages([
  {
    full: "https://i.imgur.com/fZ9CEiX.jpeg",
    thumb: "https://i.imgur.com/fZ9CEiX.jpeg",
    alt: "Remedy Place Boston image 1"
  },
  {
    full: "https://i.imgur.com/pMzGUDU.jpeg",
    thumb: "https://i.imgur.com/pMzGUDU.jpeg",
    alt: "Remedy Place Boston image 2"
  },
  {
    full: "https://i.imgur.com/U7hso0x.jpeg",
    thumb: "https://i.imgur.com/U7hso0x.jpeg",
    alt: "Remedy Place Boston image 3"
  },
  {
    full: "https://i.imgur.com/iSXjhCu.jpeg",
    thumb: "https://i.imgur.com/iSXjhCu.jpeg",
    alt: "Remedy Place Boston image 4"
  },
  {
    full: "https://i.imgur.com/F3M2D7z.jpeg",
    thumb: "https://i.imgur.com/F3M2D7z.jpeg",
    alt: "Remedy Place Boston image 5"
  }
])
  },
  {
    id: "remedy-place-soho",
    title: "Remedy Place Soho",
    category: "Wellness",
    scale: "Soho, NY",
    description: "Project leadership for a flagship wellness location in a dense urban environment requiring precise logistical coordination.",
    problem: "Urban constraints and coordination across multiple stakeholders in a high-traffic New York City location.",
    solution: "Managed communication and decision-making across teams to ensure alignment and execution continuity.",
    result: "Delivered a fully operational location aligned with brand and execution goals, on schedule.",
    img: "https://i.imgur.com/tSegRYo.jpeg",
    images: buildProjectImages([
  {
    full: "https://i.imgur.com/tSegRYo.jpeg",
    thumb: "https://i.imgur.com/tSegRYo.jpeg",
    alt: "Remedy Place Soho image 1"
  },
  {
    full: "https://i.imgur.com/Dl24ejC.jpeg",
    thumb: "https://i.imgur.com/Dl24ejC.jpeg",
    alt: "Remedy Place Soho image 2"
  },
  {
    full: "https://i.imgur.com/vKwkDdh.jpeg",
    thumb: "https://i.imgur.com/vKwkDdh.jpeg",
    alt: "Remedy Place Soho image 3"
  },
  {
    full: "https://i.imgur.com/GOdiVrd.jpeg",
    thumb: "https://i.imgur.com/GOdiVrd.jpeg",
    alt: "Remedy Place Soho image 4"
  }
])
  },
  {
    id: "rumble",
    title: "Rumble",
    category: "Boutique Fitness",
    scale: "14 Locations — 4,000–7,000 SF",
    description: "Oversaw execution of multiple boutique fitness studios across national markets, maintaining brand consistency at scale.",
    problem: "Scaling execution across multiple locations simultaneously while maintaining design and operational consistency.",
    solution: "Established repeatable systems, standardized documentation, and coordinated regional teams across markets.",
    result: "Delivered multiple locations efficiently with consistent brand execution and no material schedule overruns.",
    img: "https://i.imgur.com/WaQfZiO.png",
    images: buildProjectImages([
  {
    full: "https://i.imgur.com/WaQfZiO.png",
    thumb: "https://i.imgur.com/WaQfZiO.png",
    alt: "Rumble image 1",
    width: 1536,
    height: 1024
  },
  {
    full: "https://i.imgur.com/pnEjbyh.jpeg",
    thumb: "https://i.imgur.com/pnEjbyh.jpeg",
    alt: "Rumble image 2"
  },
  {
    full: "https://i.imgur.com/DLVDMx6.jpeg",
    thumb: "https://i.imgur.com/DLVDMx6.jpeg",
    alt: "Rumble image 3"
  },
  {
    full: "https://i.imgur.com/ceLPYkI.jpeg",
    thumb: "https://i.imgur.com/ceLPYkI.jpeg",
    alt: "Rumble image 4"
  }
])
  },
  {
    id: "swerve",
    title: "Swerve",
    category: "Boutique Fitness",
    scale: "5,500 SF",
    description: "Oversight for flagship cycling studio development — integrating performance infrastructure with premium brand experience.",
    problem: "Integrating A/V performance systems, structural requirements, and premium design within a single cohesive environment.",
    solution: "Aligned teams across design, construction, and technology phases while protecting both schedule and design intent.",
    result: "Delivered a high-performing flagship studio aligned with user experience and operational goals.",
    img: "https://i.imgur.com/89PbQHK.png",
    images: buildProjectImages([
  {
    full: "https://i.imgur.com/89PbQHK.png",
    thumb: "https://i.imgur.com/89PbQHK.png",
    alt: "Swerve image 1"
  },
  {
    full: "https://i.imgur.com/JGmBStu.png",
    thumb: "https://i.imgur.com/JGmBStu.png",
    alt: "Swerve image 2"
  },
  {
    full: "https://i.imgur.com/GtOEcwC.jpeg",
    thumb: "https://i.imgur.com/GtOEcwC.jpeg",
    alt: "Swerve image 3"
  },
  {
    full: "https://i.imgur.com/ScCOSV5.jpeg",
    thumb: "https://i.imgur.com/ScCOSV5.jpeg",
    alt: "Swerve image 4"
  }
])
  },
  {
    id: "flywheel",
    title: "Flywheel",
    category: "Boutique Fitness",
    scale: "20 Locations — 3,000 SF",
    description: "Project leadership for national rollout of premium spinning studios across major markets.",
    problem: "Managing a multi-location rollout with compressed timelines and limited on-site representation.",
    solution: "Standardized the execution approach, introduced location-agnostic coordination protocols, and managed remote oversight.",
    result: "Delivered a consistent studio experience across national markets within budget and schedule parameters.",
    img: "https://i.imgur.com/ouRxUoQ.png",
    images: buildProjectImages([
      {
        full: "https://i.imgur.com/ouRxUoQ.png",
        thumb: "https://i.imgur.com/ouRxUoQ.png",
        alt: "Flywheel image 1"
      },
      {
        full: "https://i.imgur.com/HzOF8Jd.png",
        thumb: "https://i.imgur.com/HzOF8Jd.png",
        alt: "Flywheel image 2"
      },
      {
        full: "https://i.imgur.com/iaeXzsx.png",
        thumb: "https://i.imgur.com/iaeXzsx.png",
        alt: "Flywheel image 3"
      },
      {
        full: "https://i.imgur.com/3q1zRtd.png",
        thumb: "https://i.imgur.com/3q1zRtd.png",
        alt: "Flywheel image 4"
      },
      {
        full: "https://i.imgur.com/hQqrJQZ.png",
        thumb: "https://i.imgur.com/hQqrJQZ.png",
        alt: "Flywheel image 5"
      }
    ])
  },
  {
    id: "fhitting-room",
    title: "Fhitting Room",
    category: "Boutique Fitness",
    scale: "3 Locations — 4,000 SF",
    description: "Supported rollout of boutique HIIT fitness environments with a strong focus on operational performance.",
    problem: "Coordinating design and execution across multiple simultaneous locations without loss of quality.",
    solution: "Maintained alignment across all teams and phases through structured communication and disciplined oversight.",
    result: "Delivered consistent, brand-aligned studio environments across all three locations.",
    img: "https://i.imgur.com/Sk7OZ8j.png",
    images: buildProjectImages([
  {
    full: "https://i.imgur.com/Sk7OZ8j.png",
    thumb: "https://i.imgur.com/Sk7OZ8j.png",
    alt: "Fhitting Room image 1"
  },
  {
    full: "https://i.imgur.com/lf4dmwK.png",
    thumb: "https://i.imgur.com/lf4dmwK.png",
    alt: "Fhitting Room image 2"
  },
  {
    full: "https://i.imgur.com/1k0gT99.jpeg",
    thumb: "https://i.imgur.com/1k0gT99.jpeg",
    alt: "Fhitting Room image 3"
  },
  {
    full: "https://i.imgur.com/bEePbwM.jpeg",
    thumb: "https://i.imgur.com/bEePbwM.jpeg",
    alt: "Fhitting Room image 4"
  },
  {
    full: "https://i.imgur.com/LyIW5Rs.jpeg",
    thumb: "https://i.imgur.com/LyIW5Rs.jpeg",
    alt: "Fhitting Room image 5"
  }
])
  },
  {
    id: "shadowbox",
    title: "ShadowBox",
    category: "Boutique Fitness",
    scale: "4,000 SF",
    description: "Project coordination for a boutique boxing fitness concept with a distinctive brand experience.",
    problem: "Integrating theatrical brand experience with operational requirements and structural constraints.",
    solution: "Maintained alignment between ownership, design team, and contractor throughout the execution phase.",
    result: "Delivered a studio environment fully aligned with brand intent and operational goals.",
    img: "https://i.imgur.com/mIxama1.jpeg",
    images: buildProjectImages([
      {
        full: "https://i.imgur.com/mIxama1.jpeg",
        thumb: "https://i.imgur.com/mIxama1.jpeg",
        alt: "ShadowBox image 1"
      },
      {
        full: "https://i.imgur.com/OKMiGrW.png",
        thumb: "https://i.imgur.com/OKMiGrW.png",
        alt: "ShadowBox image 2"
      },
      {
        full: "https://i.imgur.com/LA8hkQ8.png",
        thumb: "https://i.imgur.com/LA8hkQ8.png",
        alt: "ShadowBox image 3"
      },
      {
        full: "https://i.imgur.com/13JSW4w.png",
        thumb: "https://i.imgur.com/13JSW4w.png",
        alt: "ShadowBox image 4"
      },
      {
        full: "https://i.imgur.com/nMjSk4L.png",
        thumb: "https://i.imgur.com/nMjSk4L.png",
        alt: "ShadowBox image 5"
      }
    ])
  },
  {
    id: "mndfl",
    title: "MNDFL",
    category: "Wellness",
    scale: "2,200 SF",
    description: "Oversight for meditation studio development in an urban environment demanding a serene, precise aesthetic.",
    problem: "Creating a calm, acoustically controlled, and functionally refined space within dense urban constraints.",
    solution: "Aligned design intent with execution by coordinating closely between ownership and consultants on material and system decisions.",
    result: "Delivered a refined, highly considered wellness environment that met both brand and experiential goals.",
    img: "https://i.imgur.com/s9I2Vxh.png",
    images: buildProjectImages([
      {
        full: "https://i.imgur.com/s9I2Vxh.png",
        thumb: "https://i.imgur.com/s9I2Vxh.png",
        alt: "MNDFL image 1"
      },
      {
        full: "https://i.imgur.com/4HSi2Ft.jpeg",
        thumb: "https://i.imgur.com/4HSi2Ft.jpeg",
        alt: "MNDFL image 2"
      },
      {
        full: "https://i.imgur.com/7awT0QT.png",
        thumb: "https://i.imgur.com/7awT0QT.png",
        alt: "MNDFL image 3"
      },
      {
        full: "https://i.imgur.com/q2wbpuz.png",
        thumb: "https://i.imgur.com/q2wbpuz.png",
        alt: "MNDFL image 4"
      },
      {
        full: "https://i.imgur.com/j7CkJrk.png",
        thumb: "https://i.imgur.com/j7CkJrk.png",
        alt: "MNDFL image 5"
      }
    ])
  },
  {
    id: "rowhouse",
    title: "Rowhouse",
    category: "Boutique Fitness",
    scale: "",
    description: "",
    problem: "",
    solution: "",
    result: "",
    img: "https://i.imgur.com/VYqiIC1.png",
    images: buildProjectImages([
      {
        full: "https://i.imgur.com/VYqiIC1.png",
        thumb: "https://i.imgur.com/VYqiIC1.png",
        alt: "Rowhouse image 1"
      },
      {
        full: "https://i.imgur.com/xn6NJnL.jpeg",
        thumb: "https://i.imgur.com/xn6NJnL.jpeg",
        alt: "Rowhouse image 2"
      },
      {
        full: "https://i.imgur.com/ffHIMvg.png",
        thumb: "https://i.imgur.com/ffHIMvg.png",
        alt: "Rowhouse image 3"
      },
      {
        full: "https://i.imgur.com/E0EUBez.jpeg",
        thumb: "https://i.imgur.com/E0EUBez.jpeg",
        alt: "Rowhouse image 4"
      }
    ])
  },
  {
    id: "pop-physique",
    title: "Pop Physique",
    category: "Boutique Fitness",
    scale: "2 Locations — 2,500 SF",
    description: "Supported execution of boutique fitness studio environments with strong emphasis on brand and operational detail.",
    problem: "Balancing design intent with operational functionality in compact, high-use spaces.",
    solution: "Coordinated stakeholders to ensure alignment between concept vision and execution reality.",
    result: "Delivered functional studio environments fully aligned with brand identity and operational expectations.",
    img: "https://i.imgur.com/BjDqLmj.jpeg",
    images: buildProjectImages([
      {
        full: "https://i.imgur.com/BjDqLmj.jpeg",
        thumb: "https://i.imgur.com/BjDqLmj.jpeg",
        alt: "Pop Physique image 1"
      },
      {
        full: "https://i.imgur.com/pzMFsZE.png",
        thumb: "https://i.imgur.com/pzMFsZE.png",
        alt: "Pop Physique image 2"
      },
      {
        full: "https://i.imgur.com/yGYeK0X.png",
        thumb: "https://i.imgur.com/yGYeK0X.png",
        alt: "Pop Physique image 3"
      },
      {
        full: "https://i.imgur.com/fnHTe45.png",
        thumb: "https://i.imgur.com/fnHTe45.png",
        alt: "Pop Physique image 4"
      },
      {
        full: "https://i.imgur.com/SDkiDtv.png",
        thumb: "https://i.imgur.com/SDkiDtv.png",
        alt: "Pop Physique image 5"
      },
      {
        full: "https://i.imgur.com/nrCCb5q.jpeg",
        thumb: "https://i.imgur.com/nrCCb5q.jpeg",
        alt: "Pop Physique image 6"
      }
    ])
  },
  {
    id: "saint-sauna-new-york",
    title: "Saint Sauna New York",
    category: "Wellness",
    scale: "",
    description: "",
    problem: "",
    solution: "",
    result: "",
    img: "https://i.imgur.com/nwn75hU.png",
images: buildProjectImages([
  {
    full: "https://i.imgur.com/nwn75hU.png",
    thumb: "https://i.imgur.com/nwn75hU.png",
    alt: "Saint Sauna New York image 1"
  },
  {
    full: "https://i.imgur.com/ErVvDLf.png",
    thumb: "https://i.imgur.com/ErVvDLf.png",
    alt: "Saint Sauna New York image 2"
  },
  {
    full: "https://i.imgur.com/7CYZkmI.png",
    thumb: "https://i.imgur.com/7CYZkmI.png",
    alt: "Saint Sauna New York image 3"
  }
])
  },
  {
    id: "strong",
    title: "Strong",
    category: "Boutique Fitness",
    scale: "",
    description: "",
    problem: "",
    solution: "",
    result: "",
    img: "https://i.imgur.com/7UG1n2x.jpeg",
    images: buildProjectImages([
      {
        full: "https://i.imgur.com/7UG1n2x.jpeg",
        thumb: "https://i.imgur.com/7UG1n2x.jpeg",
        alt: "Strong image 1"
      },
      {
        full: "https://i.imgur.com/YwUXkEf.jpeg",
        thumb: "https://i.imgur.com/YwUXkEf.jpeg",
        alt: "Strong image 2"
      },
      {
        full: "https://i.imgur.com/T5DqjUe.jpeg",
        thumb: "https://i.imgur.com/T5DqjUe.jpeg",
        alt: "Strong image 3"
      },
      {
        full: "https://i.imgur.com/dvfC8Dm.jpeg",
        thumb: "https://i.imgur.com/dvfC8Dm.jpeg",
        alt: "Strong image 4"
      },
      {
        full: "https://i.imgur.com/kIrElfU.jpeg",
        thumb: "https://i.imgur.com/kIrElfU.jpeg",
        alt: "Strong image 5"
      }
    ])
  },
  {
    id: "the-pack",
    title: "The Pack",
    category: "Boutique Fitness",
    scale: "",
    description: "",
    problem: "",
    solution: "",
    result: "",
    img: "https://i.imgur.com/qboyo5Q.jpeg",
    images: buildProjectImages([
      {
        full: "https://i.imgur.com/qboyo5Q.jpeg",
        thumb: "https://i.imgur.com/qboyo5Q.jpeg",
        alt: "The Pack image 1"
      },
      {
        full: "https://i.imgur.com/fLQS6Ix.jpeg",
        thumb: "https://i.imgur.com/fLQS6Ix.jpeg",
        alt: "The Pack image 2"
      },
      {
        full: "https://i.imgur.com/psrAl76.jpeg",
        thumb: "https://i.imgur.com/psrAl76.jpeg",
        alt: "The Pack image 3"
      },
      {
        full: "https://i.imgur.com/dQYEReG.png",
        thumb: "https://i.imgur.com/dQYEReG.png",
        alt: "The Pack image 4"
      }
    ])
  },
  {
    id: "sweathouz",
    title: "SweatHouz",
    category: "Wellness",
    scale: "",
    description: "",
    problem: "",
    solution: "",
    result: "",
    img: "https://i.imgur.com/JcmIIYt.png",
    images: buildProjectImages([
  {
    full: "https://i.imgur.com/JcmIIYt.png",
    thumb: "https://i.imgur.com/JcmIIYt.png",
    alt: "Sweathouz image 1"
  },
  {
    full: "https://i.imgur.com/NpneOVf.jpeg",
    thumb: "https://i.imgur.com/NpneOVf.jpeg",
    alt: "Sweathouz image 2"
  },
  {
    full: "https://i.imgur.com/UblScbO.jpeg",
    thumb: "https://i.imgur.com/UblScbO.jpeg",
    alt: "Sweathouz image 3"
  },
  {
    full: "https://i.imgur.com/PKjH1xY.jpeg",
    thumb: "https://i.imgur.com/PKjH1xY.jpeg",
    alt: "Sweathouz image 4"
  }
])
  }
];

const serviceData = [
  {
    id: "strategic-advisory",
    index: "01",
    title: "Strategic Advisory & Project Alignment",
    short: "We establish a clear strategic foundation that aligns stakeholders, defines success, and positions the project for disciplined execution from the outset.",
    category: "Strategic Foundation",
    scale: "Kickoff, governance, scheduling, reporting, and team structure",
    intro: "We establish a clear strategic foundation that aligns stakeholders, defines success, and positions the project for disciplined execution from the outset.",
    sections: [
      {
        heading: "Included",
        bullets: [
          "Lead project kickoff to align on objectives, priorities, budget, schedule, and success criteria.",
          "Define governance structure, communication protocols, and decision-making frameworks.",
          "Establish and maintain a comprehensive project team structure, including roles and responsibilities across all stakeholders.",
          "Identify required consultants and specialty vendors across all disciplines, including architecture, engineering, IT, AV, security, furniture, and signage.",
          "Advise on procurement strategy and manage consultant selection, including RFP development, bid leveling, and contract negotiation.",
          "Develop and continuously refine a master project schedule with milestone tracking, critical path alignment, and key decision dates.",
          "Align schedule with cash flow projections to support accurate funding and capital planning.",
          "Implement structured reporting systems including executive summaries, meeting minutes, issue logs, and recommended action plans."
        ]
      }
    ]
  },
  {
    id: "programming-strategy",
    index: "02",
    title: "Programming, Test Fit & Workplace Strategy",
    short: "We translate business objectives into a clear, actionable spatial and operational framework that informs design, leasing, and long-term performance.",
    category: "Spatial Strategy",
    scale: "Headcount, adjacencies, workflows, and programming coordination",
    intro: "We translate business objectives into a clear, actionable spatial and operational framework that informs design, leasing, and long-term performance.",
    sections: [
      {
        heading: "Included",
        bullets: [
          "Validate and refine program requirements including headcount, growth projections, and specialty space needs.",
          "Define spatial relationships, adjacencies, and operational workflows.",
          "Coordinate programming efforts with architects, engineers, and strategy consultants.",
          "Consolidate and manage all programming data, ensuring alignment across stakeholders.",
          "Prepare detailed program summaries and presentations to support internal alignment and external brokerage efforts.",
          "Integrate programming outcomes into evolving budget and schedule assumptions.",
          "Continuously adapt program strategy as new insights or constraints emerge."
        ]
      }
    ]
  },
  {
    id: "site-due-diligence",
    index: "03",
    title: "Site Evaluation, Due Diligence & Lease Advisory",
    short: "We provide rigorous technical and commercial analysis to protect client interests and enable confident decision-making prior to lease execution.",
    category: "Pre-Lease Evaluation",
    scale: "Building review, utilities, landlord coordination, and lease risk",
    intro: "We provide rigorous technical and commercial analysis to protect client interests and enable confident decision-making prior to lease execution.",
    sections: [
      {
        heading: "Included",
        bullets: [
          "Conduct detailed evaluations of base building conditions and verify alignment with as-built conditions.",
          "Assess core building systems including HVAC, electrical, plumbing, fire/life safety, and vertical transportation.",
          "Evaluate site logistics, access, amenities, and operational constraints.",
          "Advise on utility infrastructure and IT carrier requirements.",
          "Identify risks, limitations, and opportunities that impact design, cost, and schedule.",
          "Produce comprehensive due diligence reports to support site selection and negotiations.",
          "Review lease documentation with a focus on technical and financial implications.",
          "Advise on tenant improvement parameters, landlord deliverables, and construction responsibilities.",
          "Define and negotiate demarcation points between base building and tenant scope.",
          "Evaluate clauses related to approvals, reimbursements, fees, penalties, and operational constraints.",
          "Support resolution of landlord-related disputes throughout design and construction."
        ]
      }
    ]
  },
  {
    id: "design-management",
    index: "04",
    title: "Design Management & Technical Coordination",
    short: "We lead the design process with precision, ensuring alignment across disciplines while balancing design intent, constructability, and cost control.",
    category: "Design Phase Oversight",
    scale: "Meetings, design review, procurement input, value engineering, and approvals",
    intro: "We lead the design process with precision, ensuring alignment across disciplines while balancing design intent, constructability, and cost control.",
    sections: [
      {
        heading: "Included",
        bullets: [
          "Manage all design phase activities, including coordination across architects, engineers, and specialty consultants.",
          "Facilitate design meetings, track decisions, and maintain accountability across the team.",
          "Review design documents at each phase to ensure alignment with project goals, budget, and schedule.",
          "Advise on materials, systems, and construction methodologies to optimize performance and value.",
          "Coordinate integration of all disciplines including IT, AV, security, and vendor-driven scopes.",
          "Lead value engineering initiatives with a focus on cost, quality, and constructability.",
          "Evaluate alternative design solutions and their impact on cost and schedule.",
          "Identify long-lead items and coordinate early procurement strategies.",
          "Oversee development and review of mockups to validate design intent and material selections.",
          "Ensure coordination across all trades to minimize conflicts and inefficiencies."
        ]
      }
    ]
  },
  {
    id: "procurement-construction",
    index: "05",
    title: "Procurement, Construction & FF&E Execution",
    short: "We provide comprehensive oversight of procurement and construction, ensuring seamless execution, accountability, and alignment with project objectives.",
    category: "Construction Phase",
    scale: "Schedule, cost, RFIs, requisitions, vendors, testing, punch, and turnover",
    intro: "We provide comprehensive oversight of procurement and construction, ensuring seamless execution, accountability, and alignment with project objectives.",
    sections: [
      {
        heading: "Included",
        bullets: [
          "Advise on construction procurement strategies and contractor engagement models.",
          "Manage bid processes, contractor selection, and contract execution.",
          "Oversee construction activities to ensure adherence to schedule, budget, and design intent.",
          "Coordinate all stakeholders including contractors, consultants, vendors, and ownership.",
          "Monitor construction progress, identify risks, and implement corrective actions as needed.",
          "Manage procurement and installation of furniture, fixtures, equipment, and specialty elements.",
          "Coordinate vendor scopes to ensure seamless integration into the construction process.",
          "Track and manage long-lead items to prevent schedule delays.",
          "Facilitate ongoing communication and reporting throughout construction."
        ]
      }
    ]
  },
  {
    id: "financial-closeout",
    index: "06",
    title: "Financial Management, Move Coordination & Project Closeout",
    short: "We deliver disciplined financial oversight and structured project completion processes that ensure transparency, control, and a seamless transition to occupancy.",
    category: "Final Delivery",
    scale: "Budgets, cost control, move planning, punch list, and closeout",
    intro: "We deliver disciplined financial oversight and structured project completion processes that ensure transparency, control, and a seamless transition to occupancy.",
    sections: [
      {
        heading: "Included",
        bullets: [
          "Establish detailed project budgets, including hard costs, soft costs, FF&E, and contingency allocations.",
          "Implement cost control procedures aligned with client accounting requirements.",
          "Provide ongoing cost forecasting, variance analysis, and financial reporting.",
          "Prepare and distribute monthly cost reports with detailed line-item tracking.",
          "Review and process all invoices to verify contract compliance and confirm completed work.",
          "Package and submit invoices for efficient client payment processing.",
          "Maintain financial transparency throughout the project lifecycle.",
          "Coordinate move planning, occupancy readiness, and operational transition.",
          "Oversee punch list development, completion, and quality assurance.",
          "Manage project closeout including documentation, warranties, and final reconciliations."
        ]
      }
    ]
  }
];

const VALID_SECTIONS = ["home", "about", "services", "portfolio", "contact"];
const FORMSPREE_ENDPOINT = "https://api.web3forms.com/submit";

let modalCleanupTimeout = null;
let serviceResizeHandler = null;
let lastFocusedElement = null;
let activeProjectId = null;
let activeProjectImageIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  initGrain();
  initCursorGlow();
  initNav();
  initMobileMenu();
  initNavScroll();
  renderServices();
  renderPortfolio();
  renderGallery();
  initPortfolioTabs();
  initModalClose();
  initFormSubmit();
  initAboutPhotoSlider();

  const hash = window.location.hash.replace("#", "");
  const startSection = VALID_SECTIONS.includes(hash) ? hash : "home";
  navigateTo(startSection, false);
});

function initGrain() {
  const canvas = document.getElementById("grain-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const offscreen = document.createElement("canvas");
  offscreen.width = 256;
  offscreen.height = 256;
  const offCtx = offscreen.getContext("2d");

  let animId = null;
  let frameCount = 0;
  let paused = false;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawGrain() {
    if (paused) return;

    frameCount++;

    if (frameCount % 3 === 0) {
      const data = offCtx.createImageData(256, 256);
      const buf = new Uint32Array(data.data.buffer);

      for (let i = 0; i < buf.length; i++) {
        const v = Math.random() < 0.5 ? 255 : 0;
        buf[i] = (255 << 24) | (v << 16) | (v << 8) | v;
      }

      offCtx.putImageData(data, 0, 0);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pattern = ctx.createPattern(offscreen, "repeat");
      if (pattern) {
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    animId = requestAnimationFrame(drawGrain);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      paused = true;
      if (animId) cancelAnimationFrame(animId);
    } else {
      paused = false;
      frameCount = 0;
      drawGrain();
    }
  });

  resize();
  drawGrain();
  window.addEventListener("resize", resize);
}

function initCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  if (!glow || window.matchMedia("(pointer: coarse)").matches) return;

  document.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

function initNavScroll() {
  const nav = document.getElementById("nav-bar");
  if (!nav) return;

  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", window.scrollY > 30);
    },
    { passive: true }
  );
}

function initNav() {
  document.querySelectorAll("[data-nav]").forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.dataset.nav;
      navigateTo(target, true);
      closeMobileMenu();
    });

    if (item.matches(".nav-links li, .logo")) {
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          item.click();
        }
      });
    }
  });

  window.addEventListener("popstate", (e) => {
    const section = e.state?.section || "home";
    navigateTo(section, false);
  });
}

function navigateTo(target, pushHistory = true) {
  if (!VALID_SECTIONS.includes(target)) return;

  document.querySelectorAll(".view").forEach((view) => {
    view.classList.remove("active");
    view.querySelectorAll(".reveal-item").forEach((el) => {
      el.classList.remove("revealed");
      el.style.transitionDelay = "0s";
    });
  });

  const nextSection = document.getElementById(target);
  if (!nextSection) return;

  nextSection.classList.add("active");
  window.scrollTo({ top: 0, behavior: "auto" });

  if (pushHistory) {
    const url = target === "home" ? window.location.pathname : `#${target}`;
    history.pushState({ section: target }, "", url);
  }

  requestAnimationFrame(() => {
    triggerReveal(nextSection);
  });

  document.querySelectorAll(".nav-links li").forEach((li) => {
    li.classList.toggle("active", li.dataset.nav === target);
  });

  document.querySelectorAll(".mobile-nav-item").forEach((li) => {
    li.classList.toggle("active", li.dataset.nav === target);
  });
}

function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("mobile-menu-close");

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", openMobileMenu);

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMobileMenu);
  }

  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMobileMenu();
  });

  document.querySelectorAll(".mobile-nav-item").forEach((item) => {
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        item.click();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      closeMobileMenu();
    }
  });
}

function openMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!hamburger || !mobileMenu) return;

  hamburger.classList.add("open");
  hamburger.setAttribute("aria-expanded", "true");
  mobileMenu.classList.add("active");
  mobileMenu.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");

  const firstItem = mobileMenu.querySelector(".mobile-nav-item");
  if (firstItem) firstItem.focus();
}

function closeMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!hamburger || !mobileMenu) return;

  hamburger.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("active");
  mobileMenu.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}

function triggerReveal(section) {
  const items = section.querySelectorAll(".reveal-item");
  items.forEach((el, i) => {
    el.classList.remove("revealed");
    el.style.transitionDelay = "0s";

    requestAnimationFrame(() => {
      void el.offsetHeight;
      el.style.transitionDelay = `${i * 0.07}s`;
      el.classList.add("revealed");
    });
  });
}

function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.innerHTML = "";

  serviceData.forEach((service) => {
    const el = document.createElement("div");
    el.className = "service-card reveal-item";
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", `${service.title} — view service details`);

    el.innerHTML = `
      <div class="service-card-inner">
        <span class="service-index">${service.index}</span>
        <div class="service-card-body">
          <h3>${service.title}</h3>
          <p>${service.short}</p>
          <span class="service-card-hint">View Full Scope</span>
        </div>
        <div class="service-card-arrow">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 9h14M9 2l7 7-7 7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div class="service-card-glow"></div>
    `;

    el.addEventListener("click", () => openService(service));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openService(service);
      }
    });

    grid.appendChild(el);
  });
}

function renderPortfolio() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  grid.innerHTML = "";

  projectData.forEach((project) => {
    const el = document.createElement("div");
    el.className = "project-card reveal-item";
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", `${project.title} — view case study`);

    el.innerHTML = `
      <div class="project-image" style="background-image:url('${project.img}')"></div>
      <div class="project-overlay">
        <span class="project-category">${project.category || "Project"}</span>
        <h3>${project.title}</h3>
        <span class="project-cta-hint">View Case Study →</span>
      </div>
    `;

    el.addEventListener("click", () => openProject(project, 0));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProject(project, 0);
      }
    });

    grid.appendChild(el);
  });
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  grid.innerHTML = "";
}

function initPortfolioTabs() {
  const tabs = document.querySelectorAll(".portfolio-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const view = tab.dataset.portfolioView;

      document.querySelectorAll(".portfolio-panel").forEach((panel) => {
        panel.classList.remove("active");
      });

      const target =
        view === "projects"
          ? document.getElementById("portfolio-grid")
          : document.getElementById("gallery-grid");

      if (target) {
        target.classList.add("active");
        triggerReveal(target);
      }
    });
  });
}

function bindServiceScrollIndicator() {
  const modalContent = document.querySelector("#project-modal .modal-content");
  const scrollArea = document.querySelector("#project-modal .service-modal-scroll");
  const rail = document.querySelector("#project-modal .service-scroll-rail");
  const thumb = document.querySelector("#project-modal .service-scroll-thumb");

  if (!modalContent || !scrollArea || !rail || !thumb) return;

  if (serviceResizeHandler) {
    window.removeEventListener("resize", serviceResizeHandler);
    serviceResizeHandler = null;
  }

  function updateIndicator() {
    const scrollHeight = scrollArea.scrollHeight;
    const clientHeight = scrollArea.clientHeight;
    const scrollTop = scrollArea.scrollTop;

    const hasOverflow = scrollHeight > clientHeight + 2;
    rail.classList.toggle("is-hidden", !hasOverflow);

    const isAtEnd = scrollTop + clientHeight >= scrollHeight - 2;
    modalContent.classList.toggle("is-scrolled-to-end", isAtEnd);

    if (!hasOverflow) {
      thumb.style.height = `${rail.clientHeight}px`;
      thumb.style.transform = `translateY(0px)`;
      return;
    }

    const railHeight = rail.clientHeight;
    const thumbHeight = Math.max((clientHeight / scrollHeight) * railHeight, 46);
    const maxThumbY = railHeight - thumbHeight;
    const maxScrollTop = scrollHeight - clientHeight;
    const thumbY = maxScrollTop > 0 ? (scrollTop / maxScrollTop) * maxThumbY : 0;

    thumb.style.height = `${thumbHeight}px`;
    thumb.style.transform = `translateY(${thumbY}px)`;
  }

  scrollArea.addEventListener("scroll", updateIndicator);
  serviceResizeHandler = updateIndicator;
  window.addEventListener("resize", serviceResizeHandler);

  requestAnimationFrame(updateIndicator);
}

function openService(service) {
  const modal = document.getElementById("project-modal");
  const body = document.getElementById("modal-body");
  const modalContent = modal?.querySelector(".modal-content");

  if (!modal || !body || !modalContent) return;

  lastFocusedElement = document.activeElement;

  if (modalCleanupTimeout) {
    clearTimeout(modalCleanupTimeout);
    modalCleanupTimeout = null;
  }

  modalContent.classList.add("service-modal-layout");
  modalContent.classList.remove("is-scrolled-to-end");
  modal.classList.add("service-modal-open");

  const sectionsMarkup = service.sections
    .map(
      (section) => `
      <div class="modal-section">
        <h4>${section.heading}</h4>
        <ul class="modal-list">
          ${section.bullets.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `
    )
    .join("");

  body.innerHTML = `
    <div class="modal-text">
      <div class="modal-scroll service-modal-scroll">
        <span class="modal-eyebrow">${service.category}</span>
        <h2 id="modal-title">${service.title}</h2>
        <div class="modal-sub">${service.scale}</div>

        <div class="modal-divider"></div>

        <div class="modal-section">
          <h4>Overview</h4>
          <p>${service.intro}</p>
        </div>

        ${sectionsMarkup}
      </div>

      <div class="service-scroll-rail">
        <div class="service-scroll-thumb"></div>
      </div>
    </div>
  `;

  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  const scrollArea = modal.querySelector(".modal-scroll");
  if (scrollArea) scrollArea.scrollTop = 0;

  bindServiceScrollIndicator();

  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) {
    requestAnimationFrame(() => closeBtn.focus());
  }

  modal.removeEventListener("keydown", trapFocus);
  modal.addEventListener("keydown", trapFocus);
}

function getImageOrientation(image) {
  const width = image?.width || 0;
  const height = image?.height || 0;

  if (!width || !height) return "landscape";

  const ratio = width / height;

  if (ratio > 1.1) return "landscape";
  if (ratio < 0.9) return "portrait";
  return "square";
}

function buildProjectDetailSections(project) {
  const sections = [];

  if (project.description) {
    sections.push(`
      <div class="modal-section">
        <h4>Scope</h4>
        <p>${project.description}</p>
      </div>
    `);
  }

  if (project.problem) {
    sections.push(`
      <div class="modal-section">
        <h4>Challenge</h4>
        <p>${project.problem}</p>
      </div>
    `);
  }

  if (project.solution) {
    sections.push(`
      <div class="modal-section">
        <h4>Approach</h4>
        <p>${project.solution}</p>
      </div>
    `);
  }

  if (project.result) {
    sections.push(`
      <div class="modal-section">
        <h4>Outcome</h4>
        <p>${project.result}</p>
      </div>
    `);
  }

  return sections.join("");
}

function openProject(project, startIndex = 0) {
  const modal = document.getElementById("project-modal");
  const body = document.getElementById("modal-body");
  const modalContent = modal?.querySelector(".modal-content");

  if (!modal || !body || !modalContent) return;

  lastFocusedElement = document.activeElement;
  activeProjectId = project.id;
  activeProjectImageIndex = Math.max(0, Math.min(startIndex, (project.images?.length || 1) - 1));

  if (modalCleanupTimeout) {
    clearTimeout(modalCleanupTimeout);
    modalCleanupTimeout = null;
  }

  modalContent.classList.remove("service-modal-layout");
  modalContent.classList.remove("is-scrolled-to-end");
  modalContent.classList.add("project-gallery-layout");
  modal.classList.remove("service-modal-open");

  if (serviceResizeHandler) {
    window.removeEventListener("resize", serviceResizeHandler);
    serviceResizeHandler = null;
  }

  const images = project.images?.length
    ? project.images
    : [{ thumb: project.img, full: project.img, alt: project.title, width: 0, height: 0 }];

  const currentImage = images[activeProjectImageIndex];
  const orientationClass = `is-${getImageOrientation(currentImage)}`;
  const detailSections = buildProjectDetailSections(project);

  body.innerHTML = `
    <div class="project-modal-copy">
      <div class="modal-scroll project-modal-scroll">
        <span class="modal-eyebrow">${project.category || "Project"}</span>
        <h2 id="modal-title">${project.title}</h2>
        <div class="modal-sub">${project.scale || ""}</div>
        ${detailSections ? `<div class="modal-divider"></div>${detailSections}` : ""}
      </div>
    </div>

        <div class="project-gallery-shell">
      <div class="project-main-stage ${orientationClass}" id="project-main-stage">
        <button class="project-image-nav project-image-prev" id="project-image-prev" type="button" aria-label="Previous image">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="project-main-image-frame">
          <img
            id="project-main-image"
            class="project-main-image"
            src="${currentImage.full}"
            alt="${currentImage.alt} — ${project.title}"
          />
        </div>

        <button class="project-image-nav project-image-next" id="project-image-next" type="button" aria-label="Next image">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="project-main-meta">
          <span id="project-image-count">${activeProjectImageIndex + 1} / ${images.length}</span>
        </div>
      </div>

      <div class="project-gallery-title reveal-title">${project.title.toUpperCase()}</div>

      <div class="project-thumb-rail" id="project-thumb-rail" aria-label="Project image gallery">
        ${images
          .map(
            (image, index) => `
            <button
              class="project-thumb ${index === activeProjectImageIndex ? "active" : ""}"
              type="button"
              data-project-thumb="${index}"
              aria-label="View image ${index + 1}"
              aria-pressed="${index === activeProjectImageIndex ? "true" : "false"}"
            >
              <img src="${image.thumb}" alt="${image.alt} thumbnail" loading="lazy" />
            </button>
          `
          )
          .join("")}
      </div>
    </div>
  `;

  bindProjectGallery(project);

  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) {
    requestAnimationFrame(() => closeBtn.focus());
  }

  const scrollArea = modal.querySelector(".project-modal-scroll");
  if (scrollArea) scrollArea.scrollTop = 0;

  modal.removeEventListener("keydown", trapFocus);
  modal.addEventListener("keydown", trapFocus);
}

function bindProjectGallery(project) {
  const images = project.images?.length
    ? project.images
    : [{ thumb: project.img, full: project.img, alt: project.title, width: 0, height: 0 }];

  const prevBtn = document.getElementById("project-image-prev");
  const nextBtn = document.getElementById("project-image-next");
  const mainImage = document.getElementById("project-main-image");
  const mainStage = document.getElementById("project-main-stage");
  const count = document.getElementById("project-image-count");
  const thumbs = document.querySelectorAll("[data-project-thumb]");

  if (!mainImage || !count || !mainStage) return;

  let isSwitchingImage = false;

  function applyOrientation() {
    mainStage.classList.remove("is-landscape", "is-portrait", "is-square");
    mainStage.classList.add("is-landscape");
  }

  function syncThumbState(index) {
    thumbs.forEach((thumb) => {
      const thumbIndex = Number(thumb.dataset.projectThumb);
      const isActive = thumbIndex === index;
      thumb.classList.toggle("active", isActive);
      thumb.setAttribute("aria-pressed", isActive ? "true" : "false");

      if (isActive) {
        thumb.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      }
    });
  }

  function updateGallery(index) {
    if (isSwitchingImage) return;

    const image = images[index];
    if (!image) return;

    isSwitchingImage = true;
    activeProjectImageIndex = index;
    mainImage.style.opacity = "0";

    syncThumbState(index);
    count.textContent = `${index + 1} / ${images.length}`;

    const finishSwap = () => {
      applyOrientation(index);
      mainImage.style.opacity = "1";
      isSwitchingImage = false;
      mainImage.onload = null;
      mainImage.onerror = null;
    };

    mainImage.onload = finishSwap;
    mainImage.onerror = finishSwap;

    setTimeout(() => {
      mainImage.src = image.full;
      mainImage.alt = `${image.alt} — ${project.title}`;
    }, 160);
  }

  function goToNextImage() {
    const nextIndex = (activeProjectImageIndex + 1) % images.length;
    updateGallery(nextIndex);
  }

  function goToPrevImage() {
    const prevIndex = (activeProjectImageIndex - 1 + images.length) % images.length;
    updateGallery(prevIndex);
  }

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const index = Number(thumb.dataset.projectThumb);
      updateGallery(index);
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", goToNextImage);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", goToPrevImage);
  }

  applyOrientation(activeProjectImageIndex);
  syncThumbState(activeProjectImageIndex);
  count.textContent = `${activeProjectImageIndex + 1} / ${images.length}`;
  mainImage.style.opacity = "1";
}

function trapFocus(e) {
  if (e.key !== "Tab") return;

  const modal = document.getElementById("project-modal");
  if (!modal) return;

  const focusable = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  } else if (document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function initModalClose() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal-close") ||
      e.target.closest(".modal-close") ||
      e.target.classList.contains("modal-backdrop")
    ) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("project-modal");
    const isProjectModalOpen =
      modal?.classList.contains("active") &&
      modal.querySelector(".project-gallery-shell");

    if (e.key === "Escape") {
      closeModal();
      return;
    }

    if (!isProjectModalOpen) return;

    const project = projectData.find((item) => item.id === activeProjectId);
    if (!project) return;

    const images = project.images?.length
      ? project.images
      : [{ thumb: project.img, full: project.img, alt: project.title, width: 0, height: 0 }];

    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (activeProjectImageIndex + 1) % images.length;
      const thumb = document.querySelector(`[data-project-thumb="${nextIndex}"]`);
      if (thumb) thumb.click();
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (activeProjectImageIndex - 1 + images.length) % images.length;
      const thumb = document.querySelector(`[data-project-thumb="${prevIndex}"]`);
      if (thumb) thumb.click();
    }
  });
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal || !modal.classList.contains("active")) return;

  const modalContent = modal.querySelector(".modal-content");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  modal.removeEventListener("keydown", trapFocus);

  if (modalCleanupTimeout) {
    clearTimeout(modalCleanupTimeout);
  }

  modalCleanupTimeout = setTimeout(() => {
    const body = document.getElementById("modal-body");
    if (body) body.innerHTML = "";

    if (modalContent) {
      modalContent.classList.remove("service-modal-layout");
      modalContent.classList.remove("project-gallery-layout");
      modalContent.classList.remove("is-scrolled-to-end");
    }

    modal.classList.remove("service-modal-open");

    if (serviceResizeHandler) {
      window.removeEventListener("resize", serviceResizeHandler);
      serviceResizeHandler = null;
    }

    activeProjectId = null;
    activeProjectImageIndex = 0;

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }

    modalCleanupTimeout = null;
  }, 500);
}

function validateForm() {
  let valid = true;

  const name = document.getElementById("f-name");
  const nameErr = document.getElementById("err-name");
  const nameGroup = name?.closest(".form-group");

  if (!name?.value.trim()) {
    if (nameErr) nameErr.textContent = "Name is required";
    if (nameGroup) nameGroup.classList.add("has-error");
    valid = false;
  } else {
    if (nameErr) nameErr.textContent = "";
    if (nameGroup) nameGroup.classList.remove("has-error");
  }

  const email = document.getElementById("f-email");
  const emailErr = document.getElementById("err-email");
  const emailGroup = email?.closest(".form-group");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email?.value.trim()) {
    if (emailErr) emailErr.textContent = "Email is required";
    if (emailGroup) emailGroup.classList.add("has-error");
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    if (emailErr) emailErr.textContent = "Enter a valid email address";
    if (emailGroup) emailGroup.classList.add("has-error");
    valid = false;
  } else {
    if (emailErr) emailErr.textContent = "";
    if (emailGroup) emailGroup.classList.remove("has-error");
  }

  return valid;
}

function initFormSubmit() {
  const form = document.getElementById("inquiry-form");
  if (!form) return;

  form.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      const group = field.closest(".form-group");
      if (group) group.classList.remove("has-error");
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const btn = form.querySelector(".btn-submit");
    const btnText = btn?.querySelector(".btn-text");
    const btnLoading = btn?.querySelector(".btn-loading");

    if (btn) btn.disabled = true;
    if (btnText) btnText.style.display = "none";
    if (btnLoading) btnLoading.style.display = "inline";

    const formData = {
      access_key: "ff5e02fd-9b40-4e48-82d9-5e0c73e695d4",
      name: document.getElementById("f-name")?.value.trim() || "",
      company: document.getElementById("f-company")?.value.trim() || "",
      email: document.getElementById("f-email")?.value.trim() || "",
      location: document.getElementById("f-location")?.value.trim() || "",
      message: document.getElementById("f-message")?.value.trim() || ""
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(formData)
      });

      const json = await response.json();
      if (!response.ok || json.success === false) {
        throw new Error("Submission failed");
      }

      showFormSuccess();
    } catch (error) {
      if (btn) btn.disabled = false;
      if (btnText) btnText.style.display = "inline";
      if (btnLoading) btnLoading.style.display = "none";

      const footer = form.querySelector(".form-footer");
      let errMsg = form.querySelector(".form-submit-error");

      if (!errMsg && footer) {
        errMsg = document.createElement("p");
        errMsg.className = "form-submit-error field-error";
        errMsg.style.marginTop = "0";
        footer.prepend(errMsg);
      }

      if (errMsg) {
        errMsg.textContent = "Something went wrong. Please try again or email us directly.";
      }
    }
  });
}

function showFormSuccess() {
  const wrap = document.querySelector(".contact-form-wrap");
  if (!wrap) return;

  wrap.innerHTML = `
    <div class="form-success reveal-item revealed">
      <div class="form-success-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 10l4 4 8-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <h3>Inquiry Received</h3>
      <p>We'll review your project and follow up to discuss scope, timing, and next steps.</p>
    </div>
  `;
}

function initAboutPhotoSlider() {
  const images = [
    "https://i.imgur.com/xcAmyxF.jpeg",
    "https://i.imgur.com/Hzzzxa3.jpeg",
    "https://i.imgur.com/Ke3LBNS.jpeg",
    "https://i.imgur.com/ZrydgWE.jpeg"
  ];

  const imageEl = document.getElementById("about-photo-image");
  const countEl = document.getElementById("about-photo-count");
  const prevBtn = document.getElementById("about-photo-prev");
  const nextBtn = document.getElementById("about-photo-next");

  if (!imageEl || !countEl || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  let isAnimating = false;

  function updatePhoto(index) {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex = (index + images.length) % images.length;

    imageEl.style.opacity = "0";

    setTimeout(() => {
      imageEl.src = images[currentIndex];
      countEl.textContent = `${currentIndex + 1} / ${images.length}`;
    }, 180);

    imageEl.onload = () => {
      imageEl.style.opacity = "1";
      isAnimating = false;
    };
  }

  prevBtn.addEventListener("click", () => {
    updatePhoto(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    updatePhoto(currentIndex + 1);
  });

  imageEl.src = images[0];
  countEl.textContent = `1 / ${images.length}`;
}