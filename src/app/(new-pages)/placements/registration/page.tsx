import { Metadata } from "next";
import RecruiterRegistration from "../common/RecruiterRegistration";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";

const page = () => {
    return <RecruiterRegistration />;
};

export default page;
