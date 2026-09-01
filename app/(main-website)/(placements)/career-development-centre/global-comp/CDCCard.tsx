type Props = {
  heading: string;
  content: string;
};

const CDCCard = ({ heading, content }: Props) => {
  return (
    <div
      className="p-[30px] cdc_card bg-white min-h-72 relative before:absolute before:content-[''] before:w-[20%] before:h-[20%] before:bg-[#051630] before:top-0
         before:right-0 before:rounded-tr-[15px]
        before:rounded-bl-[100%] after:absolute after:content-[''] after:w-[20%] after:h-[20%] after:bg-[#051630] after:bottom-0
         after:left-0 after:rounded-tr-[100%] after:rounded-bl-[15px] cdccard-ul hover:after text-black hover:text-white hover:after:w-full hover:after:h-full hover:before:w-full hover:before:h-full 
         hover:before:rounded-[15px] hover:after:rounded-[15px] hover:after:transition-all hover:after:duration-500 hover:after:ease-in-out hover:before:transition-all hover:before:duration-500 hover:before:ease-in-out"
      style={{
        boxShadow: "rgba(149,157,165,.2) 0px 8px 24px",
      }}
    >
      <h3 className="text-[28px] leading-[1.2] font-semibold my-2.5 z-100 relative">
        {heading}
      </h3>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
        className="cdc_text_white z-5 relative"
      />
      {/* <ul>
        <li>Career Counselling</li>
        <li>Career Skills</li>
        <li>Tech Skills</li>
        <li>Industry Engagement</li>
      </ul> */}
    </div>
  );
};

export default CDCCard;
