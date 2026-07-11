import Image from "next/image";

const YRCAward = () => {
  return (
    <>
      <section className="py-5 px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <h3 className="text-4xl font-bold mb-5">YRC AWARDS:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
            <div>
              <Image
                src="/life-at-krmu/img-1.webp"
                width={768}
                height={576}
                alt=""
              />
            </div>
            <div>
              <Image
                src="/life-at-krmu/img-2.webp"
                width={768}
                height={576}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/life-at-krmu/img-3.webp"
                width={300}
                height={400}
                alt=""
              />
            </div>
            <div>
              <p>
                First Prize Trophy and Certificate awarded to Ms Prakriti from
                K.R. Mangalam University, Gurugram, for securing 1st position in
                the Extempore Speech Competition at the State Level Youth Red
                Cross Training Camp for Girls, held in Vrindavan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YRCAward;
