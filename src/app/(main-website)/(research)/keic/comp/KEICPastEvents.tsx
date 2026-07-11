import KEICPastEventSlide from "./KEICPastEventSlide";

const KEICPastEvents = () => {
  const pastEventsSlide = [
    { imgUrl: "/keic/pastevents/item-1.webp" },
    { imgUrl: "/keic/pastevents/item-2.webp" },
    { imgUrl: "/keic/pastevents/item-3.webp" },
    { imgUrl: "/keic/pastevents/item-4.webp" },
    { imgUrl: "/keic/pastevents/item-5.webp" },
    { imgUrl: "/keic/pastevents/item-6.webp" },
    { imgUrl: "/keic/pastevents/item-7.webp" },
    { imgUrl: "/keic/pastevents/item-8.webp" },
    { imgUrl: "/keic/pastevents/item-9.webp" },
    { imgUrl: "/keic/pastevents/item-10.webp" },
    { imgUrl: "/keic/pastevents/item-11.webp" },
    { imgUrl: "/keic/pastevents/item-12.webp" },
    { imgUrl: "/keic/pastevents/item-13.webp" },
    { imgUrl: "/keic/pastevents/item-14.webp" },
    { imgUrl: "/keic/pastevents/item-15.webp" },
    { imgUrl: "/keic/pastevents/item-16.webp" },
    { imgUrl: "/keic/pastevents/item-17.webp" },
  ];

  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div>
          <h3 className="text-3xl md:text-5xl font-semibold mb-5">
            Past Events and Workshops
          </h3>
        </div>
        <div>
          <KEICPastEventSlide pastEvents={pastEventsSlide} />
        </div>
      </div>
    </section>
  );
};

export default KEICPastEvents;
