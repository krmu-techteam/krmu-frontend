const SEMCEConversationSection = () => {
  return (
    <section className="py-10">
      <div className="max-w-[800px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">The SEMCE Conversations</h2>
          <h3 className="text-3xl font-semibold">Purpose of the section</h3>
          <p className="mt-2 text-gray-600">
            A media-first section showcasing podcasts, talks, and video
            conversations that reflect life, learning, and thinking at SEMCE.
            Not limited to the Dean. Can include founders, faculty, students,
            creators, and industry guests.
          </p>
        </div>
      </div>
      <iframe
        width="100%"
        height="800"
        src="https://www.youtube.com/embed/8IFKA22GHmg?si=tC2xF-Ru7soX7b7L"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default SEMCEConversationSection;
