import { useState } from "react";

import StudentsTable from "./accounts/StudentsTable";
import TeacherTable from "./accounts/TeacherTable";

const Accounts = () => {
  const [isActive, setActive] = useState(true);
  const [title, setTitle] = useState("Teachers");

  const setTeacher = () => {
    setActive(!isActive);
    setTitle("Teachers");
  };
  const setStudent = () => {
    setActive(!isActive);
    setTitle("Students");
  };

  return (
    <div className="main-accounts rounded-lg border border-gray-300 w-full">
      <h1 className="text-1xl font-semibold p-3 bg-slate-200">Accounts</h1>
      <div className="accounts">
        <li
          onClick={setTeacher}
          className={`account-items cursor-pointer ${
            isActive ? "activeData" : ""
          }`}
        >
          <p className="text-md">Teachers</p>
        </li>
        <li
          onClick={setStudent}
          className={`account-items cursor-pointer ${
            isActive ? "" : "activeData"
          }`}
        >
          <p className="text-md">Students</p>
        </li>
      </div>
      <div className="account-list p-10 pb-2">
        <h1 className="text-2xl py-2">{title} Accounts</h1>
        {isActive ? <TeacherTable /> : <StudentsTable />}
      </div>
    </div>
  );
};

export default Accounts;
