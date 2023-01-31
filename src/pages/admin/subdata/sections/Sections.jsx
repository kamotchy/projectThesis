import React from "react";

const Sections = ({ data }) => {
  return (
    <section
      key={data.id}
      className={`flex flex-col space-y-10 border  p-4 rounded-md shadow-md`}
    >
      <div className="card-header">
        <pre>{data.level}</pre>
        <h1 className="text-2xl font-semibold">{data.section}</h1>
      </div>
      <div className="card-body flex space-x-10">
        <p className="text-md">{data.adviser}</p>
        <p className="text-md">{data.students.length}</p>
      </div>
    </section>
  );
};

export default Sections;
