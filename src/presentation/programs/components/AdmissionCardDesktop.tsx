import Link from "next/link";
import { AdmisionProcessCard } from "@/features/programs";

interface Props {
  card: AdmisionProcessCard;
}

const AdmissionCardDesktop = ({ card }: Props) => {
  const isLink =
    card?.link === "admissions.krmangalam.edu.in" ||
    card?.description === "admissions.krmangalam.edu.in ";

  if (isLink) {
    return (
      <Link
        href={`https://${card?.description}`}
        className="admis_proc_btn_grid_item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="admis_proc_btn_content">
          <button className="btn_text font-poppins">{card?.title}</button>
          <p className="admis_btn_below_text">
            {card?.description}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div className="admis_proc_btn_grid_item">
      <div className="admis_proc_btn_content">
        <button className="btn_text font-poppins">{card?.title}</button>
        <p className="admis_btn_below_text font-poppins">
          {card?.description}
        </p>
      </div>
    </div>
  );
};

export default AdmissionCardDesktop;
