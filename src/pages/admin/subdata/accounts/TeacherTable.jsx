import { useQuery } from "react-query";

import { getTeachers } from "../../../../api/Users";
import { teacherHeader } from "../../../../global/admin/Headers";

const TeacherTable = () => {
  const teacher = useQuery("teacher", getTeachers);

  if (teacher.isLoading) return <h1>Loading..</h1>;
  if (teacher.isError) {
    return <h1>{teacher.error.message}</h1>;
  } else {
    return (
      <table>
        <thead>
          <tr>
            {teacherHeader.map((data) => {
              return <th key={data.id}>{data.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {teacher.data.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.idNumber}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
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
