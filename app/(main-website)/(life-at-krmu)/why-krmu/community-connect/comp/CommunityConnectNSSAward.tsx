import Image from "next/image";
import Link from "next/link";

const CommunityConnectNSSAward = () => {
  return (
    <section className="py-[60px] bg-[url(/gradient-4.webp)] bg-cover bg-no-repeat bg-center px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div>
          <h4 className="text-2xl mb-10 text-white font-semibold text-center">NSS Awards</h4>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className=" w-full lg:w-1/2">
            <Image
              src="/community-connect/nss-table-1.webp"
              width={768}
              height={360}
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="overflow-x-auto">
              <table className="  border border-black border-collapse bg-[#e7eaed] text-black">
                <thead>
                  <tr>
                    <th className="border border-black p-2 font-bold bg-[#e7eaed]">
                      Name of the Award/ recognition
                    </th>
                    <th className="border border-black p-2 font-bold bg-[#e7eaed]">
                      Name of Awarding Govt./ Govt. recognized bodies
                    </th>
                    <th className="border border-black p-2 font-bold bg-[#e7eaed]">
                      Year of award
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border p-2">
                      Appreciation Certificate for outstanding activity and
                      contribution to community
                    </td>
                    <td className="border p-2">I Can Foundation</td>
                    <td className="border p-2">2023-24</td>
                  </tr>

                  <tr>
                    <td className="border p-2">
                      National Award for Social Initiatives from Bhagidari Jan
                      Sahyog Samiti
                    </td>
                    <td className="border p-2">Bhagidari Jan Sahyog Samiti</td>
                    <td className="border p-2">2024-25</td>
                  </tr>

                  <tr>
                    <td className="border p-2">
                      Special Award to Ms. Akriti Winner of Debate Competition
                    </td>
                    <td className="border p-2">Bhagidari Jan Sahyog Samiti</td>
                    <td className="border p-2">2024-25</td>
                  </tr>

                  <tr>
                    <td className="border p-2">
                      First Position in Fusion Dance to Mr Ansh, 3rd Position in
                      Musical Fusion to Ms Mitali, First Position in Drama to Ms
                      Mitali
                    </td>
                    <td className="border p-2">
                      NIC Camp organized by Indira Gandhi University, Meerpur
                    </td>
                    <td className="border p-2">2024-25</td>
                  </tr>

                  {/* ROWSPAN BLOCK */}
                  <tr>
                    <td className="border p-2">
                      Adarsh Rai (B Tech CSE) – 1st Position, Volleyball
                      competition
                    </td>
                    <td className="border p-2" rowSpan={8}>
                      University Level Camp, Maharshi Markendshwar University,
                      Mullana
                    </td>
                    <td className="border p-2">2024-25</td>
                  </tr>

                  <tr>
                    <td className="border p-2">
                      Abhas Mishra (B Tech CSE) – 1st Position, Treasure hunt
                    </td>
                    <td className="border p-2">2024-25</td>
                  </tr>

                  <tr>
                    <td className="border p-2">
                      Abhas Mishra (B Tech CSE) – 3rd Position, Tug of war
                    </td>
                    <td className="border p-2">2024-25</td>
                  </tr>

                  <tr>
                    <td className="border p-2">
                      Yashvi Sahu (BCA Hons) – 1st Position, Tug of war
                    </td>
                    <td className="border p-2">2024-25</td>
                  </tr>

                  <tr>
                    <td className="border p-2">
                      Yashvi Sahu (BCA Hons) – 1st Position, Group singing
                    </td>
                    <td className="border p-2">2024-25</td>
                  </tr>

                  <tr>
                    <td className="border p-2">
                      Avneet Tanwar (B Tech CSE) – Best volunteer award during
                      the camp
                    </td>
                    <td className="border p-2">2024-25</td>
                  </tr>

                  <tr>
                    <td className="border p-2">
                      Avneet Tanwar (B Tech CSE) – 2nd Position, Group singing
                    </td>
                    <td className="border p-2">2024-25</td>
                  </tr>

                  <tr>
                    <td className="border p-2">
                      Adarsh Rai (B Tech CSE) – 1st Position, Volleyball
                      competition
                    </td>
                    <td className="border p-2">2024-25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-10">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeC0NIGoHcymc2_V1TsHViBi2SMsITtGPwtbp1-rr6HXCLejg/viewform"
            target="_blank" rel="noopener noreferrer"
            className="py-[13px] px-[29px] bg-[#cb000d] text-white rounded-[4px] font-semibold"
          >
            NSS Registration Form
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityConnectNSSAward;
