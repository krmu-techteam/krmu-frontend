import Image from "next/image";
import Link from "next/link";

type Props = {
  appl_btn: {
    id: number;
    btn_text: string;
    btn_class?: string | null;
    btn_link: string;
  };
};

const KREEApplyOnline = ({ appl_btn }: Props) => {
  return (
    <section className="bg-[#051630] px-4">
      <div className="text-white w-full flex flex-col items-center lg:flex-row">
        <div className="lg:w-1/2  lg:pl-40 pt-6 lg:pt-20 mb-5">
          <h3 className="font-semibold text-3xl  md:text-5xl leading-[1.5]">
            APPLY ONLINE
          </h3>
          <p className="mb-5">Apply Online Through Our Website</p>
          {appl_btn && appl_btn?.btn_link ? (
            <Link
              href={appl_btn?.btn_link}
              className={`bg-[#cb000d] hover:bg-[#034272] text-white rounded-[4px] text-sm py-[11px] px-[23px] inline-block ${
                appl_btn?.btn_class || ""
              }`}
            >
              {appl_btn?.btn_text}
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <Image
            src="/admission/KREE.webp"
            width={916}
            height={440}
            alt=""
            className="-mt-20 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default KREEApplyOnline;
