"use client";

import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      title: "Bachelor of Ayurveda Medicine & Surgery (B.A.M.S.)",
      institute: "Government Ayurveda Medical College (GAMC), Mysore",
      year: "2001 – 2007",
      description:
        "Comprehensive foundation in classical Ayurvedic theory, diagnosis, therapeutics, and clinical practice.",
    },
    {
      title: "Post Graduate Diploma – Hospital Administration",
      institute: "Apollo Medvarsity, Bengaluru",
      year: "2013 – 2014",
      description:
        "Specialised training in healthcare management, hospital operations, quality systems, and strategic administration.",
    },
    {
      title: "PGDM – Business Analytics",
      institute: "IFIM Business School, Bengaluru",
      year: "2022 – 2024",
      description:
        "Advanced skills in data analytics, business intelligence, strategic decision-making, and healthcare business optimization.",
    },
    {
      title: "Certificate Course – Reproductive Health",
      institute: "Medvarsity",
      year: "Year not specified",
      description:
        "Specialised knowledge in reproductive health management and evidence-based interventions.",
    },
  ];

  return (
    <section id="education" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 mb-4">
            <GraduationCap className="text-indigo-600" size={26} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Educational Qualifications & Certifications
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Academic foundation and professional certifications supporting
            clinical excellence and healthcare leadership.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Award className="text-indigo-600" size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-indigo-600 font-medium mt-1">
                    {item.institute}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{item.year}</p>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
