import Link from "next/link";

type Props = {
    title: string;
    slug: string;
};

const CareerJob = ({ title, slug }: Props) => {
    return (
        <Link
            href={`/careers/jobs/${slug}`}
            className="p-[12px] rounded-[4px] text-sm border border-[#dddfe3]"
            style={{
                boxShadow: `0 1px 4px 0 rgb(0 0 0 / 5%)`,
            }}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h4
                className="text-lg font-semibold font-poppins text-white mb-[5px]"
                dangerouslySetInnerHTML={{
                    __html: title,
                }}
            />
            <span className="after:content-['\002192'] text-white/85">
                More Details{" "}
            </span>
        </Link>
    );
};

export default CareerJob;
