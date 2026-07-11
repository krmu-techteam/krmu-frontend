const HelpDesk = () => {
  return (
    <section className="pb-10">
      <div className="max-w-[1664px] mx-auto w-full flex justify-center">
        <div className="pp-hd-card">
          {" "}
          <p className="card-title">Help Desk Information</p>{" "}
          <p className="card-info">
            <span className="card-label">
              <b>Phone No:</b>
            </span>{" "}
            <a href="tel:8192888444">8192888444</a>
          </p>{" "}
          <p className="card-info">
            <span className="card-label">
              <b>Email:</b>
            </span>{" "}
            <a href="mailto:accounts@krmangalam.edu.in">
              accounts@krmangalam.edu.in
            </a>
          </p>{" "}
          <div className="go-corner">
            {" "}
            <div className="go-arrow">→</div>{" "}
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default HelpDesk;
