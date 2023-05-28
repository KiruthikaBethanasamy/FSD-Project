package com.mscomm.customerservice.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.customerservice.entity.Customer;
import com.mscomm.customerservice.service.CustomerService;

import lombok.AllArgsConstructor;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/customers")
@AllArgsConstructor
public class CustomerController {

	private CustomerService customerService;

    @PostMapping
    public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer){
        Customer savedCustomer = customerService.saveCustomer(customer);
        return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable("id") Long customerId){
        Customer customer = customerService.getCustomerById(customerId);
        return ResponseEntity.ok(customer);
    }
}

