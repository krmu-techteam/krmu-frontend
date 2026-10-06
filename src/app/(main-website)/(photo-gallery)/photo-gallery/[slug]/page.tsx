import { getGallerImagesUsingSlug } from "@/lib/api/photo-gallery";
import PhotoGrid from "../comp/PhotoGrid";
import SinglePhotoGalleryHero from "../comp/SinglePhotoGalleryHero";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ slug: string }>;
};

import { Metadata } from "next";

const PHOTO_GALLERY_DESCRIPTIONS: Record<string, string> = {
    "aarambh-2025":
        "Explore the Aarambh 2025 photo gallery showcasing K.R. Mangalam University newest students embarking on their exciting academic journey.",
    "delhi-times-fashion-show":
        "Browse the photo gallery of the Delhi Times Fashion Show at K.R. Mangalam University, showcasing student style, creativity, and design talent.",
    "convocation-2022":
        "Celebrate the achievements of K.R. Mangalam University Class of 2022 through this photo gallery from the annual convocation ceremony.",
    "aarambh-2024-freshmen-orientation-program":
        "Browse the Aarambh 2024 freshmen orientation photo gallery capturing the warm welcome, activities, and energy at K.R. Mangalam University.",
    "rendezvous-day-1":
        "Explore Day 1 of Rendezvous at K.R. Mangalam University a photo gallery capturing the opening performances, competitions, and campus energy.",
    "aarambh-2023":
        "Relive the highlights of Aarambh 2023 K.R. Mangalam University freshmen orientation through this vibrant photo gallery of memories and moments.",
    "sols-international-seminar":
        "View the photo gallery from the SOLS International Seminar at K.R. Mangalam University featuring global speakers and interdisciplinary discussions.",
    "edm-fiesta":
        "Relive the energy and excitement of EDM Fiesta at K.R. Mangalam University through this vibrant collection of event photos and highlights.",
    "freshers-2025":
        "Browse photos from K.R. Mangalam University Freshers 2025 event welcoming the new batch with fun, performances, and memorable introductions.",
    "hackathon-4-0":
        "Explore the Hackathon 4.0 photo gallery from K.R. Mangalam University, showcasing student-built tech innovations and competitive coding moments.",
    "padma-shri-kangana-ranaut-at-krmu":
        "Browse the photo gallery from Padma Shri Kangana Ranaut visit to K.R. Mangalam University an inspiring interaction with students and faculty.",
    "hackathon-2-0":
        "Relive Hackathon 2.0 at KRMU a 24-hour coding challenge where students built innovative tech solutions under pressure.",
    social: "Explore K.R. Mangalam University social events gallery featuring student gatherings, community activities, and campus life captured in photos.",
    "rendezvous-day-2":
        "Browse Day 2 highlights of Rendezvous at K.R. Mangalam University through a vibrant photo gallery of performances, finals, and celebrations.",
    "open-source-expo-2023":
        "Relive Open Source Expo 2023 at K.R. Mangalam University through a gallery showcasing student tech projects, open-source demos, and innovation.",
    "national-service-scheme":
        "View photos from K.R. Mangalam University National Service Scheme activities — community service, outreach camps, and student-led social initiatives.",
    "ideas-3-0":
        "Explore the IDEAS 3.0 photo gallery at K.R. Mangalam University, capturing student-led innovation pitches, entrepreneurship, and creative thinking.",
    "edude-fiesta-2023":
        "Explore the Edude Fiesta 2023 photo gallery from K.R. Mangalam University a celebration of student talent, creativity, and campus spirit.",
    "hackathon-5-0":
        "Browse the Hackathon 5.0 photo gallery from K.R. Mangalam University — highlighting problem-solving, teamwork, and innovation by student coders.",
    kalautsav:
        "Browse the Kalautsav photo gallery from K.R. Mangalam University — a cultural extravaganza celebrating art, music, dance, and student creativity.",
    "solesta-26":
        "Browse memorable moments from Solesta 2026 at K.R. Mangalam University through our exclusive event photo gallery.",
    "aarambh-2026":
        "Explore the Aarambh 2026 photo gallery at K.R. Mangalam University showcasing event highlights and student life.",
    "alumni-meet-2023-reminisce":
        "Revisit the cherished moments from K.R. Mangalam University Alumni Meet 2023 Reminisce through this photo gallery of reunions and celebrations.",
    "convocation-2026":
        "Relive the proud moments of KRMU Convocation 2026 through this gallery honouring graduating students and their milestone.",
    "kaya-sync":
        "Explore the Kaya Sync photo gallery at K.R. Mangalam University showcasing event highlights and student life.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params; // ✅ await params
    const photoGalleryUsingSlug = await getGallerImagesUsingSlug(slug);

    const photoGalleryData = photoGalleryUsingSlug.find(
        (item) => item.slug === slug
    );

    if (!photoGalleryData) {
        return {
            title: "Page Not Found | K.R. Mangalam University",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const currentPhotoGalleryURL = `https://www.krmangalam.edu.in/photo-gallery/${slug}`;

    const cleanTitle = (photoGalleryData?.title || "").trim();
    const title = `${cleanTitle} Photo Gallery | KRMU`;
    const description =
        PHOTO_GALLERY_DESCRIPTIONS[slug] ||
        `Explore the ${cleanTitle} photo gallery at K.R. Mangalam University showcasing event highlights and campus moments.`;

    return {
        title: title || "Photo Gallery | K.R. Mangalam University",
        description,
        alternates: {
            canonical: currentPhotoGalleryURL || "",
        },
        openGraph: {
            title,
            description,
            url: currentPhotoGalleryURL,
            siteName: "K.R. Mangalam University",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

const page = async ({ params }: Props) => {
    const { slug } = await params; // ✅ await params
    const photoGalleryUsingSlug = await getGallerImagesUsingSlug(slug);

    const photoGalleryData = photoGalleryUsingSlug.find(
        (item) => item.slug === slug
    );

    if (!photoGalleryData) {
        return notFound();
    }

    return (
        <>
            {photoGalleryData && (
                <SinglePhotoGalleryHero title={photoGalleryData?.title} />
            )}
            {photoGalleryData && (
                <PhotoGrid gallerImages={photoGalleryData?.gallery_images} />
            )}
        </>
    );
};

export default page;
