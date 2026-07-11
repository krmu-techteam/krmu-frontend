import Image from "next/image";

const SOHMCTPanel = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 mb-5 md:mb-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2024/05/Workshop-on-Japanese-Cuisine-1-768x1024.webp"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Workshop on Japanese Cuisine
          </h3>
          <p className="mb-5 text-lg">
            Experience the culinary mastery of acclaimed Chef Kanhaiya Laal from
            EBISU Fine Japanese Restaurant, who recently led a captivating
            workshop on Japanese Cuisine. Delve into the artistry of Japanese
            cooking as Chef Kanhaiya Laal shares invaluable techniques and
            insights, unveiling a world of exotic flavors and dishes to eager
            students.
          </p>
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 mb-5 md:mb-10 my-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Indian Seafood Delicacies Workshop
          </h3>
          <p className="mb-5 text-lg">
            The School of Hospitality Management and Catering Technology
            organised an engaging event on Indian seafood delicacies,
            coordinated by Chef Varinder. During the session, Chef Sen showcased
            a range of seafood dishes, demonstrating professional culinary
            techniques and sharing insights on preparation and presentation.
          </p>
          <p className="mb-5 text-lg">
            The event concluded with a tasting session, allowing students to
            experience the flavours firsthand. The session proved to be
            informative and inspiring, enhancing students’ appreciation of
            Indian seafood cuisine and practical culinary skills.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/wp-content/images/sea.webp"
            width={600}
            height={300}
            alt=""
            className="border w-full  object-cover"
          />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 mb-5 md:mb-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2026/01/room-clean.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Room Cleaning and Towel Art Competition
          </h3>
          <p className="mb-5 text-lg">
            The School of Hotel Management and Catering Technology in
            collaboration with Four Points by Sheraton, organised a highly
            interactive and educational Room Cleaning and Towel Art Competition.
            This event was specially designed for first-year students, providing
            them with a platform to showcase their creativity and operational
            skills in hotel housekeeping.
          </p>
          <p className="mb-5 text-lg">
            Beyond technical execution, the competition served as a valuable
            learning experience, helping students develop essential soft skills
            such as time management, attention to detail, and teamwork. Working
            in groups under time constraints, participants learned to delegate
            tasks, communicate effectively, and uphold high standards of hygiene
            and presentation—core aspects of professional housekeeping.
          </p>
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 mb-5 md:mb-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">Visit to Roseate Hotel</h3>
          <p className="mb-5 text-lg">
            SOHMCT students enjoyed an incredible visit to the luxurious Roseate
            Hotel in New Delhi. The day kicked off with Executive Housekeeper
            Mr. Umesh highlighting the crucial role of housekeeping in hotel.
            Students explored the hotel’s laundry operations, and handling guest
            laundry, while discovering the latest laundry equipment and
            techniques. The visit also included a fascinating tour of the
            uniform room headed with a lavish lunch for the students. Students
            wrapped up the day with a tour of key areas, including the banquet
            kitchen, gym, spa, restaurant, bar, VIP lounge, and grand ballroom.
            This visit was an exciting opportunity to gain firsthand experience
            in luxury hotel operations.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2026/01/visit-roseate.png"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 mb-5 md:mb-10 mt-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2026/01/bhavna.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Expert Session on Evolving Strategies in Marketing & PR
          </h3>
          <p className="mb-5 text-lg">
            An expert session on “Evolving Strategies: Trends in Marketing & PR
            for Budget and Hospitality Sectors” was conducted, featuring Ms.
            Bhavna Mishra Nanda, Portfolio Director of Marketing, Holiday Inn
            Express – An IHG Hotel. She shared insights into innovative brand
            marketing strategies adopted by Holiday Inn to attract and engage
            guests.
          </p>
          <p className="mb-5 text-lg">
            The interactive session involved hands-on activities that enhanced
            students’ understanding of marketing and brand promotion. The talk
            encouraged critical thinking, creativity, and the development of
            industry-ready marketing skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SOHMCTPanel;
