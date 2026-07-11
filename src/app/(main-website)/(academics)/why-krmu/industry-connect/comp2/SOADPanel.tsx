import Image from "next/image";

const SOADPanel = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">Art Mural Event</h3>
          <p className="mb-5 text-lg">
            K.R. Mangalam University, in collaboration with Somany Ceramics,
            recently concluded an engaging four-day tile art mural event. Led by
            Mr. Anshuman Chakravarty, Head of Marketing & Communication at
            Somany Ceramics, and Mr. Sujit Mohanty, GVT Vertical Head, the event
            celebrated the creativity of talented students. Certificates were
            awarded to commend their contributions to the wall tile art mural,
            showcasing an inspiring fusion of art and sustainability in
            architectural design.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2024/05/Art-Mural-Event-768x511.webp"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 items-center">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2025/05/Picture1.jpgsoad.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Guest Lecture on Business in Design
          </h3>
          <p className="mb-5 text-lg">
            We are thrilled to announce the successful culmination of Guest
            Lecture on-“Business in Design “. enriching our students under the
            Analyse, Dialogue, Design & Architecture (ADDA@SOAD). An inspiring
            discussion was held with Hardesh Chawla, Director of Essentia
            Environments
          </p>
          <p className="text-lg mb-5"></p>
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 items-center mt-5">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Guest Lecture on Future of Fashion
          </h3>
          <p className="mb-5 text-lg">
            K.R. Mangalam University successfully hosted a thought-provoking
            guest lecture under the ADDA@SOAD series on “The Future of Fashion
            is Circular”.
          </p>
          <p className="text-lg mb-5">
            The session featured K. S. Radhakrishnan, one of India’s leading
            contemporary sculptors, celebrated for his iconic bronze figures
            Musui and Maiya. Drawing from his artistic roots at Santiniketan,
            Radhakrishnan shared powerful insights on the relationship between
            sculpture, space, and sustainability.
          </p>
          <p className="text-lg mb-5">
            Students experienced a rare fusion of artistic philosophy and
            architectural thinking, making it an inspiring and memorable
            learning experience.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2025/05/sfsfsdf-800x601.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SOADPanel;
