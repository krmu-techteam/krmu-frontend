import { stats } from "../constant";

const PlacementHighlights = () => {
  return (
    <section className="md:border-b md:border-[#ccc] mb-10 md:mb-20">
      <div className="max-w-6xl mx-auto w-full">
        <ul
          className="
            flex flex-wrap justify-center items-center
            md:grid md:grid-cols-5

          
        
 [&>*]:border-r [&>*]:border-[#ccc] [&>*]:md:last:border-r-0
 [&>*]:border-l [&>*]:md:border-l-0
  [&>*]:border-y [&>*]:md:border-y-0
           
          "
        >
          {stats.map((stat, index) => (
            <li
              key={index}
              className="
                w-1/2
                last:w-full
                md:w-auto
                flex flex-col items-center justify-center
                p-5
                xl:py-10
                px-2
             
              "
            >
              <strong
                className={`text-xl sm:text-3xl xl:text-[42px] font-bold font-newsreader ${
                  stat.highlight ? "text-[#922A35]" : "text-[#001836]"
                }`}
              >
                {stat.value}
              </strong>

              <span className="text-xs uppercase tracking-wider text-[#333] text-center mt-2 font-poppins">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlacementHighlights;
