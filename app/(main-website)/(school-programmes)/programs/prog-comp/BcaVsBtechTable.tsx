export default function BcaVsBtechTable() {
  return (
    <div className="pt-5">
      <div className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          BCA vs B.Tech (Computer Science) Comparison
        </h2>

        <p className="text-gray-600 text-center mb-6 max-w-3xl mx-auto">
          Choosing between BCA and B.Tech in Computer Science? Here’s a quick
          comparison to help you decide.
        </p>

        <div className="overflow-x-auto rounded-xl shadow-lg border">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold">Parameter</th>
                <th className="px-6 py-4 text-sm font-semibold">BCA</th>
                <th className="px-6 py-4 text-sm font-semibold">
                  B.Tech Computer Science
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Duration</td>
                <td className="px-6 py-4">3 Years</td>
                <td className="px-6 py-4">4 Years</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Academic Depth</td>
                <td className="px-6 py-4">Application-focused</td>
                <td className="px-6 py-4">Engineering-level technical depth</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Curriculum</td>
                <td className="px-6 py-4">Programming & IT tools</td>
                <td className="px-6 py-4">Algorithms, AI, systems, networks</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Mathematics</td>
                <td className="px-6 py-4">Basic–Moderate</td>
                <td className="px-6 py-4">Advanced</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Career Scope</td>
                <td className="px-6 py-4">IT roles</td>
                <td className="px-6 py-4">
                  Wider technical & engineering roles
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Higher Studies</td>
                <td className="px-6 py-4">Usually MCA</td>
                <td className="px-6 py-4">Can directly pursue M.Tech/MS</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Best Suited For</td>
                <td className="px-6 py-4">Quick job entry</td>
                <td className="px-6 py-4">Long-term tech careers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
