import Image from "next/image";
import Link from "next/link";
import { Program } from "../types/data/programs";


type Props = {
  program: Program;
};

const ProgramCard = ({ program }: Props) => {
  return (
    <div
      className="
        flex flex-col-reverse lg:flex-row
        gap-6 lg:gap-10
        p-6 sm:p-8 lg:p-10
        border rounded-2xl
      "
    >
      {/* Content */}
      <div className="w-full lg:w-2/3 lg:pr-24">
        <h3
          className="
            text-2xl sm:text-3xl lg:text-5xl
            font-bold mb-4 sm:mb-6 lg:mb-10
          "
        >
          {program.title}
        </h3>

        <p className="text-base sm:text-lg lg:text-xl">
          {program.description}
        </p>

        <ul
          className="
            mt-4 sm:mt-6
            space-y-2
            text-sm sm:text-base lg:text-xl
            text-gray-700
          "
        >
          <li>
            <strong>Duration:</strong> {program.duration}
          </li>
          <li>
            <strong>Format:</strong> {program.format}
          </li>
          <li>
            <strong>Eligibility:</strong> {program.eligibility}
          </li>
        </ul>

        <Link
          href={program.link}
          className="
            inline-flex items-center gap-2
            mt-5 sm:mt-6
            bg-[#ca1b1f] text-white
            px-4 py-2 sm:px-6 sm:py-3
            rounded-xl italic
            hover:bg-red-700 transition
            text-sm sm:text-base lg:text-xl
          "
        >
          View Programme →
        </Link>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/3">
        <Image
          src={program.image}
          width={450}
          height={450}
          alt={program.title}
          className="
            w-full
            max-h-[280px] sm:max-h-[340px] lg:max-h-none
            object-cover rounded-xl
          "
        />
      </div>
    </div>
  );
};

export default ProgramCard;
