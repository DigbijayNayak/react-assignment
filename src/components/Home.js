import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import TableData from "./TableData";

const Home = () => {
    const [employeeData, setEmployeeData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://project.cocoonshare.com/assignment/api/v1/employee/all/0/20');
            setEmployeeData(response.data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
            <Header />
            <TableData employeeData={employeeData} />
        </>
    )
}

export default Home;