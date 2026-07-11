const IssueOfBooks = () => {
  const issueBookContent = [
    {
      content:
        "Students are advised to submit their request on-line to save their time.",
    },
    {
      content:
        "You must collect your requested books at free time or you may request for your own suitable date & time.",
    },
    {
      content:
        "Any damaged books which are separated for binding will not be issued 3LATE FINE",
    },
    { content: "Reply will be sent on to your Mobile Number as SMS." },
    {
      content: "You must show your Identity Card at the time of getting books.",
    },
    { content: "Books are issued for 15 days." },
    {
      content: "Using abbreviation in title will not be accepted/ entertained.",
    },
    {
      content:
        "You must check every book before taking it out. You will be responsible if any damage found at the time of return.",
    },
    {
      content:
        "If you failed to collect the books on time your books will be cancelled and may be issued to other members. There is system of first come first serve.",
    },
    {
      content:
        "There is limit of 3 books to borrow at a time, which may be increased if desired & requested.",
    },
    {
      content:
        "Kindly clear your Library dues as soon as possible. No book will be issued if any book or fine is pending.",
    },
  ];

  return (
    <div className="libtabcontent">
      <p>Empowering Learning</p>
      <h2>Efficient Book Issuance System</h2>
      <p>
        The university’s library facilitates an online request system for book
        issuance, prioritizing convenience and time-saving. With a limit of
        three books per borrow, which can be increased upon request, the system
        is designed to cater to the diverse academic needs of students and
        faculty.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-10">
        {issueBookContent &&
          issueBookContent?.map((item, i) => {
            return (
              <div
                key={i}
                className="p-5 rounded-[10px] bg-[#051630] text-white"
              >
                <p>{item?.content}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default IssueOfBooks;
