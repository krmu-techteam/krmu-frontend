import NoPaperForm from "@/lib/constants/NoPaperForm";
import { CinematicFormProps } from "@/features/programs";

const CinematicForm = ({ formId, isMobile = false }: CinematicFormProps) => {
    if (isMobile) {
        return (
            <div
                id="apply-form-mobile"
                className="lg:hidden w-full bg-white pb-0 px-0"
            >
                <div className="heroBannerForm__form w-full max-w-md sm:max-w-full mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-none lg:rounded-md overflow-hidden">
                    <div className="heroBannerForm-header">
                        <h2 className="mb-0 text-center text-lg font-bold">
                            <strong>
                                Apply Today for{" "}
                                <span className="uppercase">
                                    K.R. Mangalam University
                                </span>
                            </strong>
                        </h2>
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
            <div className="heroBannerForm__form w-full max-w-md mx-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
                <div className="heroBannerForm-header">
                    <h2 className="mb-0 text-lg font-bold">
                        <strong>
                            Apply Today for{" "}
                            <span className="uppercase">
                                K.R. Mangalam University
                            </span>
                        </strong>
                    </h2>
                </div>
                <NoPaperForm formId={formId} height="500px" />
            </div>
        </div>
    );
};

export default CinematicForm;
