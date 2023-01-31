import { useQuery } from "react-query";

import { getStudents } from "../../../../api/Users";
import { studentHeader } from "../../../../global/admin/Headers";

const TeacherTable = () => {
  const students = useQuery("students", getStudents);

  if (students.isLoading) return <h1>Loading..</h1>;
  if (students.isError) {
    return <h1>{students.error.message}</h1>;
  } else {
    return (
      <table>
        <thead>
          <tr>
            {studentHeader.map((data) => {
              return <th>{data.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {students.data.map((data) => {
            return (
              <tr>
                <td>{data.idNumber}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.gradeLevel}</td>
                <td>
                  <button className="px-4 rounded-md bg-slate-700 text-white py-1 text-center">
                    Edit
                  </button>
                  <button className="px-4 ml-3 rounded-md bg-red-700 text-white py-1 text-center">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
};

export default TeacherTable;
