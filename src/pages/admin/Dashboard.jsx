import React from "react";

import { dashboardData } from "../../global/admin/dashConstants";

const Dashboard = () => {
  return (
    <div className="main-dashboard mx-5 space-y-5 ">
      <h1 className="text-2xl font-bold border-b border-slate-600 py-3">
        Dashboard
      </h1>
      <div className="grid lg:grid-cols-3 gap-5">
        {dashboardData.map((data) => {
          return (
            <section
              key={data.id}
              className={`flex flex-col space-y-10  p-4 rounded-md ${data.design}`}
            >
              <div className="card-header">
                <h1 className="text-2xl font-semibold">{data.name}</h1>
              </div>
              <div className="card-body flex space-x-10">
                <p className="text-md">{data.text}</p>
                <p className="text-md">{data.numbersOfCreated}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
