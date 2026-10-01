const RoleSection = () => {
    return (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
            <div className="border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
                {/* Header */}
                <div className="text-center sm:text-left mb-6">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                        Role of the Ombudsperson
                    </h2>
                </div>

                {/* Text descriptions (Exact original content) */}
                <div className="space-y-4 text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-poppins text-justify sm:text-left">
                    <p>
                        In accordance with the UGC Regulations, the Ombudsperson
                        shall hear and decide appeals preferred by students
                        against the decisions of the Student Grievance Redressal
                        Committee (SGRC) and facilitate fair, impartial and
                        timely redressal of student grievances.
                    </p>

                    <p>
                        The appointment reflects K.R. Mangalam University’s
                        commitment to maintaining a transparent, accessible,
                        impartial and student-centric grievance redressal
                        mechanism.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RoleSection;
