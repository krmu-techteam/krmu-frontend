import { committeeMembers } from "../constant";
import CommitteeMemberCard from "./common/CommitteeMemberCard";

const ConferenceCommittee = () => {
    return (
        <section className="w-full bg-[#f5f2eb] py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[88px]">
                {/* Heading */}
                <div className="mt-7 sm:mt-8 mb-4">
                    <h2 className="text-3xl text-center font-bold leading-[1.15] tracking-[-0.02em] text-[#1d1d1d] sm:text-4xl md:text-[34px]">
                        Conference Committee
                    </h2>

                    <p className="mt-2 font-serif text-sm text-[#6f6a63] sm:text-base">
                        Patrons
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
                    {committeeMembers.map((member) => (
                        <CommitteeMemberCard
                            key={member.name}
                            image={member.image}
                            role={member.role}
                            name={member.name}
                            designation={member.designation}
                        />
                    ))}
                </div>
            </div>
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[88px]">
                {/* Heading */}
                <div className="mt-7 sm:mt-8 mb-4">
                    <p className="mt-2 font-serif text-sm text-[#6f6a63] sm:text-base">
                        Convenor
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
                    <CommitteeMemberCard
                        image="https://www.krmangalam.edu.in/images/conferences/soad-conference/conference-committee/tanya-verma.webp"
                        name="Dr. Tanaya Verma"
                        designation="Dean and Convenor"
                    />
                </div>
            </div>
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[88px]">
                {/* Heading */}
                <div className="mt-7 sm:mt-8 mb-4">
                    <p className="mt-2 font-serif text-sm text-[#6f6a63] sm:text-base">
                        Co-Convenor
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
                    <CommitteeMemberCard
                        image="https://www.krmangalam.edu.in/images/conferences/soad-conference/conference-committee/pankaj-dhayal.webp"
                        name="Ar. Pankaj Dhayal"
                        designation="Associate Professor and Conference Co-Convenor"
                    />
                    <CommitteeMemberCard
                        image="https://www.krmangalam.edu.in/images/conferences/soad-conference/conference-committee/sukriti-setia.webp"
                        name="Ar. Sukriti Setia"
                        designation="Assistant Professor and Conference Co-Convenor"
                    />
                </div>
            </div>
        </section>
    );
};

export default ConferenceCommittee;
