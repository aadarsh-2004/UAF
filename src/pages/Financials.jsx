import React from "react";

const financialReports = [
  {
    year: "2023-24",
    revenue: "₹52000",
    expenses: "₹48000",
    donations: "₹35000",
    governmentFunds: "₹12000",
    reportLink: "/public/reports/financial-2023.pdf",
  },
  {
    year: "2022-23",
    revenue: "₹46000",
    expenses: "₹42000",
    donations: "₹32000",
    governmentFunds: "₹5000",
    reportLink: "/public/reports/financial-2022.pdf",
  },
  {
    year: "2021-22",
    revenue: "₹39000 ",
    expenses: "₹25000",
    donations: "₹15000 ",
    governmentFunds: "₹9000",
    reportLink: "/public/reports/financial-2021.pdf",
  },
];

const Financials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <h2 className="text-4xl font-bold text-amber-800 text-center mb-12">
          NGO Financial Reports
        </h2>

        {/* Financial Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-50 shadow-md rounded-lg">
            <thead className="bg-amber-800 text-white">
              <tr>
                <th className="py-4 px-6 text-left">Year</th>
                <th className="py-4 px-6 text-left">Revenue</th>
                <th className="py-4 px-6 text-left">Expenses</th>
                <th className="py-4 px-6 text-left">Donations</th>
                <th className="py-4 px-6 text-left">Govt. Funds</th>
                <th className="py-4 px-6 text-left">Report</th>
              </tr>
            </thead>
            <tbody>
              {financialReports.map((report, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-4 px-6">{report.year}</td>
                  <td className="py-4 px-6">{report.revenue}</td>
                  <td className="py-4 px-6">{report.expenses}</td>
                  <td className="py-4 px-6">{report.donations}</td>
                  <td className="py-4 px-6">{report.governmentFunds}</td>
                  <td className="py-4 px-6">
                    <a
                      href={report.reportLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:underline"
                    >
                      View Report
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Financials;
