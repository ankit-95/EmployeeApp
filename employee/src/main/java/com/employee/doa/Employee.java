package com.employee.doa;

import com.employee.DTO.EmployeeDTO;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@DynamicUpdate
public class Employee {

    @Id
    @GeneratedValue
    Long id;

    String name;
    Long salary;
    String department;

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", salary=" + salary +
                ", department='" + department + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getSalary() {
        return salary;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public void convertDTO(EmployeeDTO employeeDTO){
        if(employeeDTO.getName()!=null){
           this.setName(employeeDTO.getName());
        }
        if(employeeDTO.getDepartment()!=null){
            this.setDepartment(employeeDTO.getDepartment());
        }
        if(employeeDTO.getSalary()!=null) {
            this.setSalary(employeeDTO.getSalary());
        }
    }
}
