import React from "react";

const financialReports = [
  {
    year: "2023-24",
    revenue: "₹5.2 Crore",
    expenses: "₹4.8 Crore",
    donations: "₹3.5 Crore",
    governmentFunds: "₹1.2 Crore",
    reportLink: "/public/reports/financial-2023.pdf",
  },
  {
    year: "2022-23",
    revenue: "₹4.6 Crore",
    expenses: "₹4.2 Crore",
    donations: "₹3.2 Crore",
    governmentFunds: "₹1.0 Crore",
    reportLink: "/public/reports/financial-2022.pdf",
  },
  {
    year: "2021-22",
    revenue: "₹3.9 Crore",
    expenses: "₹3.5 Crore",
    donations: "₹2.8 Crore",
    governmentFunds: "₹0.9 Crore",
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
