package com.mscomm.customerservice.service;

import com.mscomm.customerservice.entity.*;

public interface CustomerService {
    Customer saveCustomer(Customer customer);

    Customer getCustomerById(Long customerId);
}