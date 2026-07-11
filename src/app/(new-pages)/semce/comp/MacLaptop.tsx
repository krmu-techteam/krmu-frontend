import Image from "next/image";

const MacLaptop = () => {
  return (
    <div className="py-10 flex justify-center relative bg-black">
      {/* <div className="absolute top-0 left-0 w-full h-[50vh] bg-black"></div> */}
      
        <Image
          src="/semce/laptop.webp"
          width={1100}
          height={600}
          alt=""
          priority
          className="z-10 relative"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#ca1b1f] bg-[url(/semce/grid.svg)]"></div>
    
    </div>
  );
};

export default MacLaptop;
