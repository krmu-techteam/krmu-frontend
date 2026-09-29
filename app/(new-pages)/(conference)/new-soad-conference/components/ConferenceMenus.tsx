import Link from "next/link";

const ConferenceMenus = () => {
  return (
    <section className="bg-[#111c31] px-5 py-3 sm:py-4 sticky top-10 xl:top-[76px] z-10">
      <div className="mx-auto max-w-5xl">
        <ul className="flex items-center justify-start gap-7 overflow-x-auto whitespace-nowrap text-center text-base capitalize text-white scrollbar-hide sm:gap-8 sm:text-base md:justify-between md:gap-4 pb-1 font-serif">
          <li className="shrink-0">
            <Link
              href="#soad-conf-about"
              className="transition-opacity hover:opacity-70 font-serif"
            >
              About
            </Link>
          </li>

          <li className="shrink-0"> 
            <Link
              href="#soad-conf-tracks"
              className="transition-opacity hover:opacity-70 font-serif"
            >
              Tracks
            </Link>
          </li>

          <li className="shrink-0">
            <Link
              href="#soad-conf-date"
              className="transition-opacity hover:opacity-70 font-serif"
            >
              Dates
            </Link>
          </li>

          <li className="shrink-0">
            <Link
              href="#soad-conf-reg"
              className="transition-opacity hover:opacity-70 font-serif"
            >
              Registration
            </Link>
          </li>

          <li className="shrink-0">
            <Link
              href="#soad-conf-board"
              className="transition-opacity hover:opacity-70 font-serif"
            >
              Board
            </Link>
          </li>

          <li className="shrink-0">
            <Link
              href="#soad-conf-collaborate"
              className="transition-opacity hover:opacity-70 font-serif"
            >
              Collaborate
            </Link>
          </li>

          <li className="shrink-0">
            <Link
              href="#soad-conf-contact-us"
              className="transition-opacity hover:opacity-70 font-serif"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ConferenceMenus;
