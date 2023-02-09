package com.employee.repository;

import com.employee.doa.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeInterface {

    List<Employee> findAll();
    Employee saveOrUpdate(Employee e);
    Optional<Employee> getEmployeeById(Long id);
    void deleteEmployee(Long id);
}
