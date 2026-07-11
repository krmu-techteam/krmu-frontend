export default function CareerOutcomesSection() {
  const roles = [
    "Journalist, reporter or producer in print, TV, digital or OTT",
    "News editor, bulletin producer or digital editor",
    "Content strategist or creative strategist for agencies and brands",
    "Social media and community manager for media houses, creators and organisations",
    "Film, OTT and video production professional",
    "Advertising and brand communication specialist",
    "Public relations and corporate communication professional",
    "Data journalist or visual storyteller",
    "Digital marketing and campaign manager",
    "Digital media entrepreneur or creator founder",
    "Researcher or academic in media and communication",
  ];

  return (
    <section className="w-full py-16 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">
            Where this MA can take you
          </h2>
          <p className="text-gray-600 mt-3">
            Move from being a content executor to a media professional who can
            research, design and lead.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-stretch">
          
          {/* Left Card */}
          <div className="bg-[#155fa0] text-white rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="font-semibold text-lg mb-4">
              Roles you can prepare for
            </h3>
            <p className="text-sm opacity-90">For working professionals</p>
          </div>

          {/* Right List */}
          <div className="border border-gray-400 rounded-2xl p-8 bg-white">
            <ul className="space-y-3 list-disc pl-5">
              {roles.map((role, i) => (
                <li key={i} className="text-gray-800">
                  {role}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}