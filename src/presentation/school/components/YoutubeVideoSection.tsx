"use client";

import YoutubePopup from "@/app/(main-website)/(school-programmes)/school-programmes-component/YoutubePopup";

type Props = {
    thumbnail: string;
    ytUrl: string;
};

export default function YoutubeVideoSection({ thumbnail, ytUrl }: Props) {
    return (
        <section className="w-full">
            <div className="w-full">
                <YoutubePopup
                    videoUrl={ytUrl}
                    thumbnail={thumbnail}
                    ytClassName="w-full aspect-video rounded-[4px] overflow-hidden"
                    imgClassName="object-cover scale-[1.01]"
                    inline={true}
                    playIcon={true}
                />
            </div>
        </section>
    );
}
