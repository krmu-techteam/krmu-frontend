const SelectionProcess = () => {
  const stages = [
    {
      number: "01",
      title: "Pre-placement Talk",
      description:
        "Company overview, role expectations and the process ahead.",
    },
    {
      number: "02",
      title: "Written Test",
      description:
        "Aptitude, technical and domain-specific screening rounds.",
    },
    {
      number: "03",
      title: "Group Discussion",
      description:
        "Communication and reasoning assessed in a group setting.",
    },
    {
      number: "04",
      title: "Interview",
      description:
        "Technical and HR rounds — what to prepare and expect.",
    },
  ];

  const info = [
    {
      label: "ON THE DAY",
      text: "What to bring, dress code.",
    },
    {
      label: "TIMING RULES",
      text: "The ten-minute lateness rule.",
    },
    {
      label: "DRESS CODE",
      text: "Formal business attire expected.",
    },
  ];

  return (
    <section className="bg-[#f5f2ed] px-5 py-16 md:px-10 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1150px]">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-xs font-medium tracking-[0.4em] text-[#8d5552]">
            THE SELECTION PROCESS
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#162a42] md:text-5xl">
            What each stage involves and how to prepare.
          </h2>
        </div>

        {/* Selection Stages */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[49px] border-t border-[#d2d0cc]" />

          <ul className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {stages.map((stage) => (
              <li
                key={stage.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Outer Circle */}
                <div className="relative z-10 flex h-[100px] w-[100px] items-center justify-center rounded-full border border-[#d2d0cc] bg-[#f5f2ed]">
                  {/* Inner Circle */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#102842] text-sm font-semibold text-white">
                    {stage.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-4 font-serif text-[25px] leading-tight text-[#252525]">
                  {stage.title}
                </h3>

                <p className="mt-2 max-w-[250px] text-[16px] leading-[1.4] text-[#2f2f2f]">
                  {stage.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Information */}
        <div className="mt-16 grid grid-cols-1 border border-[#d2d0cc] md:grid-cols-[1.1fr_1fr_1fr_1fr]">
          {/* Support */}
          <div className="bg-[#1d334d] px-6 py-7 md:px-7">
            <p className="mb-2 text-[11px] tracking-wide text-[#c7cdd4]">
              SUPPORT
            </p>

            <h3 className="font-serif text-2xl leading-tight text-white">
              Dedicated placement
              <br />
              support
            </h3>
          </div>

          {/* Dynamic Info */}
          {info.map((item) => (
            <div
              key={item.label}
              className="border-t border-[#d2d0cc] px-6 py-7 md:border-l md:border-t-0"
            >
              <p className="mb-2 text-[10px] font-medium tracking-[0.2em] text-[#8d5552]">
                {item.label}
              </p>

              <p className="text-[15px] leading-[1.4] text-[#555]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionProcess;