import Image from "next/image";

const CommunityConnectHero = () => {
  return (
    <section className="bg-[url(/bg-gradient.webp)] bg-no-repeat bg-cover pt-[140px] px-4 lg:pt-[12%] pb-[10%]">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center text-white gap-10">
        <div className="lg:w-2/3">
          <h1 className="text-3xl md:text-[40px] font-bold mb-5 leading-[1.2]">
            National Service Scheme (NSS)-KRMU <br />
            <em>‘NOT ME BUT YOU’</em>
          </h1>
          <p>
            The National Service Scheme (NSS) launched on{" "}
            <strong>24th September 1969</strong> on the birth century of{" "}
            <strong>Mahatma Gandhi</strong> by Union Education Minister Dr.
            V.K.R.V. Rao in 37 universities covering all States and
            simultaneously requested the Chief Ministers of States for their
            cooperation and help. The motto of the National Service Scheme is
            aimed to involve the students at colleges and universities by
            inculcating the feeling of empathy and self-extension. The motto of
            the National Service Scheme is “”Not Me, But You”. It emphasizes on
            the welfare of whole society. It is one of the best platforms for
            the students where they can execute their selfless service for not
            only the community people but for whole country. National Service
            Scheme provide the opportunities to the students to develop their
            personality by involving them in community service. Therefore, this
            is very crucial to design the activities like socio-physical
            activities, cultural activities which uphold and promote the values
            of patriotism, communal harmony, and national integration among
            student volunteers.
          </p>
          <br />
          <p>
            The symbol of the National Service Scheme is based on the ‘Rath’
            wheel of the Konark Sun Temple situated in Orissa. These giant
            wheels of the Sun Temple portray the cycle of creation, preservation
            and release signifying the movement in life across time and space.
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <Image
            src="/community-connect/communityconnect.webp"
            width={211}
            height={211}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CommunityConnectHero;
