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
                className="admis_proc_btn_grid_item flex flex-col items-center justify-center text-center"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="admis_proc_btn_content !flex !flex-col !items-center !justify-center !text-center">
                    <button className="btn_text font-poppins !text-center !mx-auto block cursor-pointer">
                        {card?.title}
                    </button>
                    <p className="admis_btn_below_text font-poppins break-words !text-center !mx-auto block">
                        {card?.description}
                    </p>
                </div>
            </Link>
        );
    }

    return (
        <div className="admis_proc_btn_grid_item flex flex-col items-center justify-center text-center">
            <div className="admis_proc_btn_content !flex !flex-col !items-center !justify-center !text-center">
                <button className="btn_text font-poppins !text-center !mx-auto block">
                    {card?.title}
                </button>
                <p className="admis_btn_below_text font-poppins break-words !text-center !mx-auto block">
                    {card?.description}
                </p>
            </div>
        </div>
    );
};

export default AdmissionCardDesktop;
