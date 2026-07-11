type Props = {
  name: string;
  content: string;
};

const PHDTestimonial = ({ name, content }: Props) => {
  return (
    <div
      className="p-5 text-white rounded-[25px] text-center"
      style={{
        background:
          "linear-gradient(180deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,.05) 100%)",
      }}
    >
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{content}</p>
    </div>
  );
};

export default PHDTestimonial;
