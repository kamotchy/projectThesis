import React from "react";

const gradeLevel = [
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

const Account = () => {
  return (
    <div className="create-account grid grid-cols-2 gap-10">
      <div className="teacher-account col-span-1">
        <div className="form-group">
          <h1 className="text-2xl font-semibold">Teacher Account</h1>
          <form className="pt-5 ">
            <div className="input-group">
              <pre className="pb-2">Teacher ID</pre>
              <input
                type="number"
                name="teacherID"
                className="border-2 w-[75%] border-slate-500 py-1 rounded-md"
              />
            </div>
            <div className="input-group">
              <pre className="pb-2">Full name</pre>
              <input
                type="text"
                name="teacherName"
                className="border-2 w-[75%] border-slate-500 py-1 rounded-md"
              />
            </div>
            <div className="input-group">
              <pre className="pb-2">Assigned Section</pre>
              <input
                type="text"
                name="teacherSection"
                className="border-2 w-[75%] border-slate-500 py-1 rounded-md"
              />
            </div>
            <div className="input-group">
              <pre className="pb-2">Assigned Grade Level</pre>
              <select
                name="gradeLevel"
                className="px-3 py-2 rounded-md bg-slate-500 text-white"
              >
                {gradeLevel.map((data) => {
                  return (
                    <option value={data.value} key={data.id}>
                      {data.value}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="button-group pt-5">
              <button className="border-2  hover:font-semibold  bg-blue-500  text-white px-3 py-2 rounded-lg">
                Submit Teacher
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="student-account col-span-1">
        <div className="form-group">
          <h1 className="text-2xl font-semibold">Student Account</h1>
          <form className="pt-5">
            <div className="input-group">
              <pre className="pb-2">Student ID</pre>
              <input
                type="number"
                name="studentID"
                className="border-2 w-[75%] border-slate-500 py-1 rounded-md"
              />
            </div>
            <div className="input-group">
              <pre className="pb-2">Full name</pre>
              <input
                type="text"
                name="studentName"
                className="border-2 w-[75%] border-slate-500 py-1 rounded-md"
              />
            </div>
            <div className="input-group">
              <pre className="pb-2">Assigned Section</pre>
              <input
                type="text"
                name="studentSection"
                className="border-2 w-[75%] border-slate-500 py-1 rounded-md"
              />
            </div>
            <div className="input-group">
              <pre className="pb-2">Assigned Grade Level</pre>
              <select
                name="gradeLevel"
                className="px-3 py-2  rounded-md bg-slate-500 text-white"
              >
                {gradeLevel.map((data) => {
                  return (
                    <option value={data.value} key={data.id}>
                      {data.value}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="button-group pt-5">
              <button className="border-2  hover:font-semibold  bg-blue-500  text-white px-3 py-2 rounded-lg">
                Submit Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
