import React, { useEffect, useState } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';



//styles
import './DataTableComp.css'

const DataTableComp = ({data,Title}) => {

    const [rows, setRows] = useState([])

    const handleViewClick = (id) => {
        console.log(id);
    }
    const columns = [
        { field: "name", headerName: "Student name", width: 200 },
        { field: "major", headerName: "Major", width: 200 },
        {
          field: "degree",
          headerName: "Degree",
          width: 200,
        },
        {
          field: "courses",
          headerName: "Courses",
          width:400,
          valueGetter: (params) => {
            if (params) {
              return params.map((course) => course.title).join(", ");
            }
            return "";
          },
        },
        {
          field: 'view',
          headerName: 'View',
          width: 100,
          renderCell: (params) => (
            <Button variant="contained" color="primary" onClick={() => handleViewClick(params.row.id)}>
              View
            </Button>
          ),
        },
      ];

      

    useEffect(() => {

            if(data){
                const newRows = data.map((student) => {
                    return {
                        name:student.studentName,
                        major:student.studentMajor,
                        degree:student.studentDgree,
                        courses:student.studentCourses,
                        id:student.id
                    }
                })
                setRows(newRows)
            }
    },[])

    return (
        <div style={{ height: 400}}>
        <h3>{Title}</h3>
          <DataGrid
            rows={rows}
            columns={columns}
            classes={{ root: "table-header" }}
          />
        </div>
      );
}

export default DataTableComp