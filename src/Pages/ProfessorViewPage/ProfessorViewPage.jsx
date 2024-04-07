import React, { useEffect, useState } from "react";
import DataTableComp from "../../Components/DataTableComp/DataTableComp";
import api from "../../api";



const ProfessorViewPage = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        const email = userDetails.email;
      const data = await api.viewCourseApplication({email});

      setData(data);
    };
    fetchData();
  },[])

  return (

    <div>
        {
          data && Object.keys(data).length > 0 && Object.keys(data).map((key) => {


            return <DataTableComp key={key} data={data[key]} Title={key}/>

            })
        }
    </div>
  );
};

export default ProfessorViewPage;
