import Link from "next/link";

const ConferenceMenus = () => {
  return (
    <section className="bg-[#111c31] px-5 py-4 sm:py-5 sticky top-10 xl:top-[76px]">
      <div className="max-w-7xl mx-auto">
        <ul className="flex items-center justify-between text-white text-center capitalize text-xl">
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Tracks</Link>
          </li>
          <li>
            <Link href="#">Dates</Link>
          </li>
          <li>
            <Link href="#">Registration</Link>
          </li>
          <li>
            <Link href="#">board</Link>
          </li>
          <li>
            <Link href="#">Collaborate</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ConferenceMenus;
