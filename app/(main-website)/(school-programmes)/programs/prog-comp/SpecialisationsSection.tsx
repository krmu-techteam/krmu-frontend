export default function SpecialisationsSection() {
  const specialisations = [
    "HR",
    "Marketing",
    "Finance",
    "IB",
    "Product Marketing",
    "Business Analytics",
    "IT",
    "Entrepreneurship",
    "Operations Management",
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Specialisations Offered
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialisations.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm p-6 text-center font-medium hover:shadow-md hover:-translate-y-1 transition"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}