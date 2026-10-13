import { StrapiMedia } from "./common";
export type ProgrammeAlumniData = {
    id: number;
    content: string;
    qualification: string;
    review_img?: StrapiMedia | null;
    alumni_img?: StrapiMedia | null;
    name: string;
};

export type ProgrammePageDataResponse = {
    data: {
        id: number;
        documentId: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        alumni: ProgrammeAlumniData[];
    };
    meta: Record<string, unknown>;
};
