import React from 'react';

const TableData = (props) => {
    const { employeeData } = props;

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-3">Employee Details</h2>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Active Status</th>
                        <th>Designation</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>{JSON.stringify(item.activeStatus)}</td>
                            <td>{item.designation}</td>
                            <td>{item.dob}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableData;