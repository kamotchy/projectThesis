import { useQuery } from "react-query";
import { getSections } from "../../../api/Users";

import Sections from "./sections/Sections";

const Section = () => {
  const sections = useQuery("section", getSections);

  let content;
  if (sections.isLoading) {
    content = <h1 className="text-md font-bold mt-3">Loading...</h1>;
  } else if (sections.isError) {
    content = <h1 className="text-md font-semibold">{sections.error}</h1>;
  } else {
    content = sections.data.map((data) => {
      return <Sections data={data} />;
    });
  }

  return (
    <div className="main-section rounded-lg  w-full">
      <h1 className="text-2xl font-semibold">Sections</h1>
      <div className="sections grid lg:grid-cols-3 gap-5">{content}</div>
    </div>
  );
};

export default Section;
