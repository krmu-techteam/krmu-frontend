import Image from "next/image";

const WhatMakesCard = () => {
  return (
    <div className="custom-card mb-3">
      <Image
        src="https://www.krmangalam.edu.in/admission/ab-testing/images/sai.png"
        width={90}
        height={120}
        alt="Image"
      />
      <div className="card-text">
        <h5 className="card-title">State of the Art Infrastructure</h5>
        <p className="card-desc">
          Modern Labs ,Well-Equipped Library ,Smart Classrooms ,28+ Acres of
          Lush Green Campus ,Artistic &amp; Modern Infrastructure
        </p>
      </div>
    </div>
  );
};

export default WhatMakesCard;
