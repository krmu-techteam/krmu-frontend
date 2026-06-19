type Props = {
  paragraphs: {
    id: number;
    content: string;
  }[];
};

const ResearchContent = ({ paragraphs }: Props) => {
  return (
    <>
      {paragraphs.map((item) => (
        <p
          key={item.id}
          className="text-md md:text-[19px] mb-6"
        >
          {item.content}
        </p>
      ))}
    </>
  );
};

export default ResearchContent;