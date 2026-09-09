import Image from "next/image";
import Link from "next/link";

interface TrainerCardProps {
  id?: number;
  image: string;
  name: string;
  designation: string;
  profileUrl: string;
}

const TrainerCard = ({
  image,
  name,
  designation,
  profileUrl,
}: TrainerCardProps) => {
  return (
    <article className="min-w-0">
      {/* Image */}
      <div className="relative aspect-[0.92] w-full overflow-hidden bg-[#eee]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 639px) 85vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 16.66vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="pt-2.5 sm:pt-3">
        <h3
          className="
            font-poppins
            text-sm
            font-semibold
            leading-tight
            text-[#111]
            sm:text-base
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-1
            font-poppins
            text-xs
            leading-[1.4]
            text-[#333]
            sm:text-sm
          "
        >
          {designation}
        </p>

        <Link
          href={profileUrl}
          className="
            mt-2
            inline-block
            font-poppins
            text-xs
            text-[#a36b1f]
            underline
            underline-offset-2
            transition-colors
            hover:text-[#001836]
            sm:text-sm
          "
        >
          View Profile
        </Link>
      </div>
    </article>
  );
};

export default TrainerCard;