import Image from "next/image";
import Link from "next/link";

const AcademicResources = () => {
  return (
    <>
      <div className="max-w-[1664px] mx-auto w-full text-white" id="_academics-resources">
        <h3 className="mb-5 text-3xl md:text-[45px] font-semibold">Academic Resources</h3>
        <h4 className="mb-5 text-xl font-semibold">CENTRAL LIBRARY</h4>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row text-white text-justify gap-10">
        <div className="lg:w-1/2">
          <p>
            K.R. Mangalam University Library denoted as Central Library which
            has spreaded over 15683 sq. ft. and have a collection of 45,000
            books, 2500 reference books, 380 journals, e-journals databases,
            1200 dissertations/ reports, 100+ theses & more than 400 law reports
            & Supreme Court cases etc. Library invested so far more than 1.5
            crore of rupees on books & other resources. It is ever inflating day
            by day, year by year.
          </p>
          <br />
          <p>
            Presently, it subscribes to over number of databases, e-resources
            like, Supreme Court Cases (SCC online), Manupatra online, J-Gate
            database; and is member of DELNET, NDLI, Shodh Sindhu, Shodh Ganga,
            Shodh Shuddhi, Shodh Chakra, IRINS etc. All the services provided by
            the INFLIBNET/ UGC/ Ministry of Education, Govt. of India for the
            benefit of our intellectual communities i.e. students and faculty
            members and providing 24×7 services through its Digital Library
            platform.
          </p>
        </div>
        <div className="lg:w-1/2">
          <p>
            The Library alienated into many sections for its smooth functioning
            & services like, Acquisition Section, Technical Section, Processing
            Section, Circulation Section, Periodical Section, Reference Section,
            Digital Section, Research Section, IKS Section (Indian Knowledge
            System), Competitive Examinations Preparation Section, & Maintenance
            Section.
          </p>
          <br />
          <p>
            K.R. Mangalam University Library is having a main Central Library
            besides many other Departmental Libraries, e.g. School of
            Architecture Library, School of Medical & Allied Sciences Library,
            School of Physiotherapy & Rehabilitation Sciences Library, School of
            Legal Studies Library, School of Education Library, School of
            Agricultural Sciences Library, School of Management & Commerce
            Library, School of Humanities Library, School of Basic & Applied
            Science Library, School of Journalism & Mass Communication Library,
            and School of Engineering Library..
          </p>
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <Image src="/academicResources/item-1.webp" width={490} height={278} alt="" />
          </div>
          <div>
            <Image src="/academicResources/item-2.webp" width={490} height={278} alt="" />
          </div>
          <div>
            <Image src="/academicResources/item-3.webp" width={490} height={278} alt="" />
          </div>
        </div>
        <div className="py-10 flex justify-center">
          <Link href="https://library.krmangalam.edu.in/user?_gl=1*1i62dbw*_gcl_au*MTk0MzAxMjY5Mi4xNzY1MTcwMjg4#/home" className="common-btn-3">
            Know More
          </Link>
        </div>
      </div>
    </>
  );
};

export default AcademicResources;
