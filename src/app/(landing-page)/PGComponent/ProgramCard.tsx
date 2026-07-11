import Image from "next/image";
import { Pencil, Clock, GraduationCap, Target } from "lucide-react";

type Props = {
  image: string;
  title: string;
  description: string;
  format: string;
  duration: string;
  eligibility: string;
  focus: string;
  annualFee: string;
};

export default function ProgramCard({
  image,
  title,
  description,
  format,
  duration,
  eligibility,
  focus,
  annualFee,
}: Props) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden border">
      {/* Image */}
      <div className="relative h-72 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-gray-600 text-sm mb-5">{description}</p>

        <ul className="space-y-4 text-sm">
          {/* Format */}
          {format && (
            <li className="flex gap-3">
              <Pencil className="w-5 h-5 text-gray-700 mt-0.5" />
              <div>
                <p className="font-medium">Format</p>
                <p className="text-gray-600">{format}</p>
              </div>
            </li>
          )}
          {/* <li className="flex gap-3">
            <Pencil className="w-5 h-5 text-gray-700 mt-0.5" />
            <div>
              <p className="font-medium">Annual Fee</p>
              <p className="text-gray-600">{annualFee}</p>
            </div>
          </li> */}

          {/* Duration */}
          <li className="flex gap-3">
            <Clock className="w-5 h-5 text-gray-700 mt-0.5" />
            <div>
              <p className="font-medium">Duration</p>
              <p className="text-gray-600">{duration}</p>
            </div>
          </li>

          {/* Eligibility */}
          <li className="flex gap-3">
            <div>
              <GraduationCap className="w-5 h-5 text-gray-700 mt-0.5" />
            </div>
            <div>
              <p className="font-medium">Eligibility</p>
              <p className="text-gray-600 leading-relaxed">{eligibility}</p>
            </div>
          </li>

          {/* Focus */}
          {focus && (
            <li className="flex gap-3">
              <Target className="w-5 h-5 text-gray-700 mt-0.5" />
              <div>
                <p className="font-medium">Focus</p>
                <p className="text-gray-600">{focus}</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
