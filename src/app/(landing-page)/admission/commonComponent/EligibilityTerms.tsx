type EligibilityTermsItem = {
  title?: string;
  description: string;
};

type Props = {
  items?: EligibilityTermsItem[];
};

const EligibilityTerms = ({ items }: Props) => {
  if (!items || items.length === 0) return null;

  const columnCount = Math.min(items.length, 4);

  return (
    <section className="border-t border-[#ddd] bg-[#f9f9f9] px-4 py-10">
      <div className="max-w-[1400px] mx-auto">
        {/* <h3 className="text-center text-xl font-semibold mb-8">
          Eligibility & Terms
        </h3> */}

        <div
          className="grid text-sm text-[#444]"
          style={{
            gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="px-6 py-4 border-r border-[#ddd] last:border-r-0"
            >
              {item.title && (
                <h4 className="font-semibold mb-2 text-black">
                  {item.title}
                </h4>
              )}
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilityTerms;
