type Props = {
  heading: string;
  content: string;
};

const CareerServiceCard = ({ heading, content }: Props) => {
  return (
    <div
      className="p-[30px] bg-[#061623] rounded-2xl cdc_card min-h-64 relative before:absolute before:content-[''] before:w-[20%] before:h-[20%] before:bg-[#d65257] before:top-0
         before:right-0 before:rounded-tr-[15px]
        before:rounded-bl-[100%] after:absolute after:rounded-2xl after:content-[''] after:w-[20%] after:h-[20%] after:bg-[#d65257] after:bottom-0
         after:left-0 after:rounded-tr-[100%] after:rounded-bl-[15px] cdccard-ul hover:after text-black hover:text-white hover:after:w-full hover:after:h-full hover:before:w-full hover:before:h-full 
         hover:before:rounded-[15px] hover:after:rounded-[15px] hover:after:transition-all hover:after:duration-500 hover:after:ease-in-out hover:before:transition-all hover:before:duration-500 hover:before:ease-in-out"
      
    >
      <h3 className="text-[28px] font-poppins text-white leading-[1.2] font-semibold my-2.5 z-100 relative">
        {heading}
      </h3>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
        className="cdc_text_white text-white font-poppins z-100 relative"
      />
    </div>
  );
};

export default CareerServiceCard;
