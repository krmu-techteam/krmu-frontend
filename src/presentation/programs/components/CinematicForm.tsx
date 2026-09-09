import NoPaperForm from "@/lib/constants/NoPaperForm";
import { CinematicFormProps } from "@/features/programs";

const CinematicForm = ({ formId, isMobile = false }: CinematicFormProps) => {
    if (isMobile) {
        return (
            <div
                id="apply-form-mobile"
                className="lg:hidden w-full bg-[#061623] pb-6 lg:pb-0 px-4 lg:px-0"
            >
                <div className="heroBannerForm__form w-full max-w-md sm:max-w-full mx-auto rounded-[4px] !pt-4 !pb-3 !h-auto overflow-hidden">
                    <div className="heroBannerForm-header">
                        <div
                            className="mb-0 text-center font-bold font-poppins !text-[22px] lg:text-lg inline-block w-full"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #0055a4 0%, #CB000D 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Apply Today for <br /> K.R. Mangalam University
                        </div>
                    </div>
                    <div className="p-1">
                        <NoPaperForm formId={formId} height="500px" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            id="apply-form"
            className="hidden lg:flex w-full lg:w-[40%] xl:w-2/5 xl:pl-20 justify-center lg:justify-end"
        >
            <div className="heroBannerForm__form w-full max-w-md mx-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[4px] !pt-5 !pb-3 !h-auto overflow-hidden">
                <div className="heroBannerForm-header">
                    <div
                        className="mb-0 text-center font-bold font-poppins !text-[28px] lg:text-lg inline-block w-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #0055a4 0%, #CB000D 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Apply Today for <br /> K.R. Mangalam University
                    </div>
                </div>
                <NoPaperForm formId={formId} height="500px" />
            </div>
        </div>
    );
};

export default CinematicForm;
