"use client";

import { Briefcase } from "lucide-react";

export default function Experience() {
  const experience = [
    {
      role: "Co-Founder",
      company: "Vajiandro Male Wellness",
      duration: "Jul 2025 – Present",
      location: "",
      points: [
        "Co-founded and led strategic direction for a specialized male wellness healthcare venture.",
        "Focused on holistic wellness solutions and patient-centric care models.",
      ],
    },
    {
      role: "Business Head",
      company: "Apollo Health and Lifestyle Limited",
      duration: "Jul 2021 – Mar 2025",
      location: "Kondapur, Telangana",
      points: [
        "Strategic leadership aligning operations with organizational goals.",
        "Operational optimization, financial oversight, and compliance management.",
        "Drove digital health adoption, innovation, and business expansion.",
      ],
    },
    {
      role: "Medical Head",
      company: "Renova Hospitals",
      duration: "Feb 2025 – Jun 2025",
      location: "Hyderabad, Telangana",
      points: [
        "Oversaw clinical operations and ensured high-quality patient care.",
        "Led coordination across multidisciplinary healthcare teams.",
      ],
    },
    {
      role: "Head of Operations",
      company: "Apollo Spectra Hospitals",
      duration: "Jul 2019 – Jul 2021",
      location: "Bengaluru",
      points: [
        "Managed hospital operations with focus on efficiency and patient satisfaction.",
        "Implemented SOPs and optimized workflows.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Professional Experience
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Leadership roles across hospitals, wellness organizations, and
            large-scale healthcare systems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden
                         shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Gradient Top Strip */}
              <div className="h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600" />

              {/* Icon Badge */}
              <div
                className="absolute -top-6 left-6 w-12 h-12 rounded-xl 
                              bg-indigo-600 flex items-center justify-center shadow-lg"
              >
                <Briefcase className="text-white" size={22} />
              </div>

              {/* Content */}
              <div className="pt-10 p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.role}
                  </h3>
                  <p className="text-indigo-600 font-medium">{item.company}</p>
                  <p className="text-sm text-gray-500">
                    {item.duration}
                    {item.location && ` · ${item.location}`}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-12 h-1 bg-indigo-600/30 rounded-full my-4" />

                {/* Points */}
                <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
