import HighlightCard from "./HighlightCard";

const highlightCards = [
  {
    image: "/modules/about/whykrmu-section/w1.jpg",
    title: "Industry Collaborated Academic Curriculum",
  },
  {
    image: "/modules/about/whykrmu-section/w2.jpg",
    title: "Stellar Placements",
    subtitle: "Kick Start Careers",
  },
  {
    image: "/modules/about/whykrmu-section/w3.jpg",
    title: "Financial Assistance",
    subtitle: "Through Scholarships & Loans",
  },
  {
    image: "/modules/about/whykrmu-section/w4.jpg",
    title: "Successful NEP Implementation",
  },
  {
    image: "/modules/about/whykrmu-section/w5.jpg",
    title: "Student Diversity & Vibrant Campus Life",
    subtitle: "Experience",
  },
  {
    image: "/modules/about/whykrmu-section/w6.jpg",
    title: "Teacher Pedagogy",
    subtitle: "Our Excellent",
  },
];

const HighlightsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      
      {highlightCards.map((card, index) => (
        <HighlightCard
          key={index}
          image={card.image}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
    </div>
  );
};

export default HighlightsGrid;