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
                className="admis_proc_btn_grid_item text-left"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="admis_proc_btn_content text-left items-start">
                    <button className="btn_text font-poppins text-left cursor-pointer">
                        {card?.title}
                    </button>
                    <p className="admis_btn_below_text font-poppins break-words text-left">
                        {card?.description}
                    </p>
                </div>
            </Link>
        );
    }

    return (
        <div className="admis_proc_btn_grid_item text-left">
            <div className="admis_proc_btn_content text-left items-start">
                <button className="btn_text font-poppins text-left">
                    {card?.title}
                </button>
                <p className="admis_btn_below_text font-poppins break-words text-left">
                    {card?.description}
                </p>
            </div>
        </div>
    );
};

export default AdmissionCardDesktop;
