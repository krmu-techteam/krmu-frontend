type Props = {
    applyContent: string;
};

const ExaminationApplyOnline = ({ applyContent }: Props) => {
    // Remove inline white backgrounds and hardcoded black text colors from CMS HTML
    const cleanedContent = applyContent
        ? applyContent
              .replace(/background-color:\s*rgb\(255,\s*255,\s*255\);?/gi, "")
              .replace(/background-color:\s*#fff(fff)?;?/gi, "")
              .replace(/background:\s*rgb\(255,\s*255,\s*255\);?/gi, "")
              .replace(/background:\s*#fff(fff)?;?/gi, "")
              .replace(/color:\s*rgb\(0,\s*0,\s*0\);?/gi, "")
              .replace(/color:\s*#000(000)?;?/gi, "")
              .replace(/color:\s*black;?/gi, "")
              .replace(/color:\s*blue;?/gi, "color: #38bdf8;")
        : "";

    return (
        <section className="py-12 md:py-16 xl:py-20 px-4">
            <div className="max-w-[1440px] mx-auto w-full">
                <h3 className="text-2xl sm:text-3xl md:text-[38px] font-serif text-white font-bold mb-6">
                    Apply Online for Degree and Transcripts
                </h3>

                <div className="bg-[#061623] rounded-[4px]    p-5 sm:p-8 lg:p-10  verflow-x-auto">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: cleanedContent,
                        }}
                        className="apply_online_content_table text-white/90 text-sm sm:text-base leading-relaxed"
                    />
                </div>
            </div>
        </section>
    );
};

export default ExaminationApplyOnline;
