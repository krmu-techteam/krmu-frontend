const AcademicCollaborators = () => {
    return (
        <section className="bg-white pb-10 sm:pb-12 lg:pb-16">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:gap-0 lg:px-6">
                <h2 className="mb-7 text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1d1d1d] sm:text-3xl md:text-[26px]">
                    Current Academic Collaborators
                </h2>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
                    <img
                        src="https://www.krmangalam.edu.in/images/conferences/soad-conference/dada-lakshmi.png"
                        alt="Dada Lakhmi Chand State University of Performing and Visual Arts"
                        className="h-auto w-[130px] sm:w-[150px] shrink-0 object-contain"
                    />

                    <p className="max-w-[700px] text-[15px] leading-6 text-black sm:text-base">
                        Current Academic Collaborator - Faculty of Planning &
                        Architecture, Dada Lakhmi Chand State University of
                        Performing and Visual Arts, Rohtak
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AcademicCollaborators;
