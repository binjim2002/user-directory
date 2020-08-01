import React, {Component} from 'react';
import EmployeeTable from '../components/EmployeeTable';
import API from '../utils/API';

class UserDirectory extends Component{
    state = {
        employees:[],
        filteredEmployees:[]
    };
    componentDidMount(){
        // api call
        API.getAllEmployees().then(res => {
            this.setState({
                employees: res.data.results,
                filteredEmployees: res.data.results
            })
            
        })
    }
    filterEmployeesByFirstName(name){
        let filteredResult;
        if(name.length > 0){
            filteredResult = this.state.employees.filter(employee => {
                
                return employee.name.first.toLowerCase().includes(name.toLowerCase())
            })
            
        } else {
            filteredResult = this.state.employees;
        }
        
        this.setState({filteredEmployees:filteredResult});
    }
    render(){
        
        return (
            <div>
                <input value={this.state.filter} onChange={ev => this.filterEmployeesByFirstName(ev.target.value)}/>
                <EmployeeTable employees={this.state.filteredEmployees} />
                
                {/* filter / search */}
                {/* employee table (component) */}
                
            </div>
        );
    }
    
};

export default UserDirectory;