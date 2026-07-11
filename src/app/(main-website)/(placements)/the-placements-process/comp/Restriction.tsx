const Restriction = () => {
  return (
    <section className="px-4">
      <div className="max-w-[1664px] mx-auto w-full pt-[30px] pb-[60px] px-[60px] bg-[#051630] rounded-[60px] text-white placementulli">
        <div className="md:text-center">
          <h3 className="leading-[3] my-2.5 text-xl md:text-4xl">Restrictions</h3>
        </div>
        <p className="mb-5">
          Securing at least one job for every student will always remain a
          priority for the centre, therefore some restrictions have been
          proposed. They are as under
        </p>
        <ul>
          <li>
            Students who have already been selected by two employers will have
            to wait to appear for more recruitment processes till most of their
            batch mates get a fair chance. The Head of the CDC, however, is
            authorized to use discretion in some cases.
          </li>
          <li>
            In this regard, a student would be considered selected if his/her
            name features in the final list of successful candidates. In case it
            features on the waiting list, he/she will be allowed to apply and
            appear for the recruitment of other companies.
          </li>
          <li>
            Students getting an offer letter from two or more recruiters will
            have to decide upon one before completing their programme and inform
            the others accordingly through the Career Development Center.
          </li>
        </ul>
      </div>
      <div className="max-w-[1664px] mx-auto w-full my-[60px]  text-white lg:flex">
        <div className="lg:w-1/2 p-10 lg:p-[60px] bg-[#051630] rounded-[60px]">
          <p>
            This policy is subject to changes at any stage at the discretion of
            the CDC/Institute’s authorities. The changes made will be notified
            to all concerned.
          </p>
        </div>
        <div className="lg:w-1/2"></div>
      </div>
    </section>
  );
};

export default Restriction;
