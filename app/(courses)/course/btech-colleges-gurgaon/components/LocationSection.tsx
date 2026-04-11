import Image from "next/image";

export default function LocationSection() {
  return (
    <section className="bg-[#f6f9fc] pt-10" id="contact">
      <div className="max-w-[1296px] mx-auto px-4">
        <div className="bg-[#2563a6] rounded-[30px] p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-center">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-5/12 h-full">
            <div className="rounded-[25px] border-[10px] border-white overflow-hidden h-full relative min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[585px]">
              <Image
                fill
                src="/programmes/cyber-city.webp"
                alt="Cyber City"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-7/12 text-white">
            {/* Badge */}
            <span className="inline-block border border-white px-4 py-2 rounded-full text-sm mb-4">
              OUR LOCATION
            </span>

            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
              Learn at One of India's Biggest Business Hubs, Gurugram
            </h3>

            {/* Email */}
            <div className="flex items-start md:flex-col gap-3 mb-4">
              <span>
                <svg width="20" height="20" viewBox="0 0 512 512" fill="white">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                </svg>
              </span>
              <p>Email Us: welcome@krmangalam.edu.in</p>
            </div>

            {/* Address */}
            <div className="flex items-start md:flex-col gap-3 mb-6">
              <span>
                <svg width="20" height="20" viewBox="0 0 384 512" fill="white">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c9.2 11.5 26.2 11.5 35.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"></path>
                </svg>
              </span>
              <p>
                Address: Badshahpur Sohna Rd, Gurugram, Sohna Rural, Haryana
                122103
              </p>
            </div>

            {/* MAP */}
            <div className="bg-white p-2 rounded-[15px] shadow-md">
              <img
                src="/programmes/map.webp"
                alt="Map"
                className="rounded-[10px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
