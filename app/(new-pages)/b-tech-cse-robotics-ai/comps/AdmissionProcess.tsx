const AdmissionProcess = () => {
  return (
    <section className="bg-[url(/demo/admission-process.jpg)] bg-cover bg-no-repeat bg-center py-20">
      <div className="max-w-7xl mx-auto text-white">
        <h3 className="text-5xl font-bold">Admission Process</h3>
        <p>Commence your Journey in just 6 simple steps</p>
        <div className="grid grid-cols-6 my-10">
          <div className="w-full min-h-[240px] h-full bg-[linear-gradient(106.65deg,#23789F_6.4%,#3F95BD_101.33%)] py-5 pl-5 pr-12 rounded-[5px]">
            <h5>Step 1</h5>
            <h4 className="text-xl leading-tight font-semibold my-2.5">Start your application</h4>
            <p className="text-sm break-all">admissions.krmangalam.edu.in</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
