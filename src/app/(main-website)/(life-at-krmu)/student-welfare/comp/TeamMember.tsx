import Image from "next/image";

const TeamMember = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="mb-10 text-4xl font-semibold text-center">
          Team Members
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/1_749040d4e6.png"
              width={150}
              height={150}
              className="mb-2.5 rounded-full"
              alt="Puneet"
            />
            <span className="font-semibold">RAJBAHADUR ( RAJ TANWAR)</span>
            <span className="text-sm">THEATRE & DANCE TEACHER</span>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/3_792520e219.png"
              width={150}
              height={150}
              className="mb-2.5 rounded-full"
              alt="Puneet"
            />
            <span className="font-semibold">Mr. Rahul Kumar Jha</span>
            <span className="text-sm">Music Teacher</span>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/2_cde5012ecc.png"
              width={150}
              height={150}
              className="mb-2.5 rounded-full"
              alt="Puneet"
            />
            <span className="font-semibold">Mr. Jagjeet Singh</span>
            <span className="text-sm">Sports Incharge</span>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/5_e217193374.png"
              width={150}
              height={150}
              className="mb-2.5 rounded-full"
              alt="Puneet"
            />
            <span className="font-semibold">Mr. Sunil</span>
            <span className="text-sm">Coach</span>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="/student-welfare/team-member/ankita.webp"
              width={150}
              height={150}
              className="mb-2.5 rounded-full"
              alt="Puneet"
            />
            <span className="font-semibold">Ms. Ankita</span>
            <span className="text-sm">Student Success Manager</span>
          </div>
          {/* <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="/student-welfare/team-member/isha.webp"
              width={150}
              height={150}
              className="mb-2.5 rounded-full"
              alt="Puneet"
            />
            <span className="font-semibold">Ms. Isha Sharma</span>
            <span className="text-sm">Event Manager</span>
          </div> */}
            <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/4_a85ee74b08.png"
              width={150}
              height={150}
              className="mb-2.5 rounded-full"
              alt="Puneet"
            />
            <span className="font-semibold">Ms. Pravanya Batra</span>
            <span className="text-sm">DSW Coordinator</span>
          </div>
          {/* <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="/student-welfare/team-member/harikant.webp"
              width={150}
              height={150}
              className="mb-2.5 rounded-full"
              alt="Puneet"
            />
            <span className="font-semibold">Mr. Harikant</span>
            <span className="text-sm">Dance Instructor</span>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="/student-welfare/team-member/balram.webp"
              width={150}
              height={150}
              className="mb-2.5 rounded-full"
              alt="Puneet"
            />
            <span className="font-semibold">Mr. Balram Kasana</span>
            <span className="text-sm">Office Assistant</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
