import React from "react";

const schoolYear = [
  {
    id: 1,
    value: "2023-2024",
  },
  {
    id: 2,
    value: "2024-2025",
  },
  {
    id: 3,
    value: "2025-2026",
  },
];

const yearLevel = [
  {
    id: 1,
    value: "Grade 1",
  },
  {
    id: 2,
    value: "Grade 2",
  },
  {
    id: 3,
    value: "Grade 3",
  },
  {
    id: 4,
    value: "Grade 4",
  },
  {
    id: 5,
    value: "Grade 5",
  },
  {
    id: 6,
    value: "Grade 6",
  },
  {
    id: 7,
    value: "Grade 7",
  },
  {
    id: 8,
    value: "Grade 8",
  },
  {
    id: 9,
    value: "Grade 9",
  },
  {
    id: 10,
    value: "Grade 10",
  },
  {
    id: 11,
    value: "Grade 11",
  },
  {
    id: 12,
    value: "Grade 12",
  },
];

const Sections = () => {
  return (
    <section className="create-section flex rounded-md  shadow-md">
      <div className="card space-y-10 border p-10 col-span-1">
        <div className="card-header">
          <h1 className="text-3xl font-semibold">Create Section</h1>
        </div>
        <div className="card-body grid grid-cols-2">
          <div className="form-section">
            <form className="space-y-5">
              <div className="section-name">
                <pre>Section Name</pre>
                <input
                  type="text"
                  name="sectionName"
                  className="rounded-md py-1 border-2   border-slate-500"
                />
              </div>
              <div className="school-year">
                <pre>School Year</pre>
                <select
                  name="schoolYear"
                  className="bg-slate-600 px-3 py-2 text-white rounded-md"
                >
                  {schoolYear.map((data) => {
                    return (
                      <option key={data.id} value={data.value}>
                        {data.value}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="year-level">
                <pre>Year Level Assigned to Section</pre>
                <select
                  name="gradeLevel"
                  className="bg-slate-600 px-3 py-2 text-white rounded-md"
                >
                  {yearLevel.map((data) => {
                    return (
                      <option key={data.id} value={data.value}>
                        {data.value}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="submit-section">
                <button
                  type="submit"
                  className="px-3 py-2 bg-blue-600 rounded-md text-white"
                >
                  Create Section
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="content-section">
        <h1>Some Content Here</h1>
      </div>
    </section>
  );
};

export default Sections;
