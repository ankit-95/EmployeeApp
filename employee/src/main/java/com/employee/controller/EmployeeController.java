package com.employee.controller;

import com.employee.DTO.EmployeeDTO;
import com.employee.doa.Employee;
import com.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @RequestMapping(value="/getAllEmployees", method = RequestMethod.GET)
    public ResponseEntity<?> getAllEmployees(){
        return new ResponseEntity<>(employeeService.getAllEmployee(), HttpStatus.ACCEPTED);
    }

    @RequestMapping(value = "/addEmployee", method = RequestMethod.POST)
    public ResponseEntity<?> addEmployee(@RequestBody Employee employee){
        Employee emp = employeeService.addEmployee(employee);
        return new ResponseEntity<>(emp.getId(),HttpStatus.OK);
    }

    @RequestMapping(value = "/updateEmployee/{id}",method = RequestMethod.PATCH)
    public ResponseEntity<?> updateEmployee(@PathVariable("id") Long id,@RequestBody EmployeeDTO employeeDTO){
        System.out.println(id);
        Employee employee = employeeService.getEmployeeById(id);
        employee.convertDTO(employeeDTO);
        employee = employeeService.updateEmployee(employee);
        return new ResponseEntity<>(employee,HttpStatus.OK);
    }

    @RequestMapping(value="/deleteEmployee/{id}", method = RequestMethod.DELETE)
    public void deleteEmployee(@PathVariable("id") Long id){
        employeeService.deleteEmployee(id);
    }

    @RequestMapping(value = "/getEmployee/{id}",method = RequestMethod.GET)
    public ResponseEntity<?> getEmployee(@PathVariable("id") Long id){
        Employee employee = employeeService.getEmployeeById(id);
        if(employee==null)
            return new ResponseEntity<>(employee,HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(employee,HttpStatus.OK);
    }
}
