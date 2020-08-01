import React from 'react';


const EmployeeTable = ({employees}) => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
            
            {employees.map((employee,i) => (
                <tr key={i}>
                    <td>{employee.name.first} {employee.name.last}</td>
                    <td>{employee.email}</td>
                    <td><a href={'phone:' + employee.phone}>📱 {employee.phone}</a></td>
                    <td><img src={employee.picture.thumbnail} alt="image"/></td>
                </tr>
                

                
            ))}
            </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;