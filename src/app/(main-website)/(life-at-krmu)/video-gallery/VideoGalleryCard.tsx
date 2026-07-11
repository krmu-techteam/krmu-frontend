import React from "react";

type Props = {
  title: string;
  videoframe: string;
};

const VideoGalleryCard = ({ title, videoframe }: Props) => {
  return (
    <div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: videoframe,
          }}
          className="customIframeStyle"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-2xl font-semibold leading-[1.2]">{title}</h3>
      </div>
    </div>
  );
};

export default VideoGalleryCard;
