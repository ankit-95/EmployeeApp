package com.employee.service;

import com.employee.doa.Employee;
import com.employee.repository.EmployeeImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    EmployeeImpl employeeImpl;

    public List<Employee> getAllEmployee(){
        return employeeImpl.findAll();
    }

    public Employee addEmployee(Employee e){
        return employeeImpl.saveOrUpdate(e);
    }

    public Employee getEmployeeById(Long id){
        Optional<Employee> emp = employeeImpl.getEmployeeById(id);
        if(emp.isPresent())
            return emp.get();
        return null;
    }

    public Employee updateEmployee(Employee e){
        return employeeImpl.saveOrUpdate(e);
    }

    public void deleteEmployee(Long id){
        employeeImpl.deleteEmployee(id);
    }
}
