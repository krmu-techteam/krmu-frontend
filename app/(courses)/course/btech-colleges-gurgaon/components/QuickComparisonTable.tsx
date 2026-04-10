import { quickComparisonTableData } from "../content";

export default function QuickComparisonTable() {
  return (
    <div className="comparison-table-container overflow-x-auto mb-5">
      <table className="comparison-table">
        {/* Header */}
        <thead>
          <tr>
            <th className="col">Programme Name</th>
            <th className="col">What You'll Learn</th>
            <th className="col">Partner</th>
            <th className="col">Career Prospects</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {quickComparisonTableData.map((item, index) => (
            <tr key={index} className="">
              <td className="prog-name">{item.name}</td>
              <td>{item.learn}</td>
              <td>{item.partner}</td>
              <td>{item.career}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="my-4 text-xs text-right">**Subject to Approval</p>
    </div>
  );
}
