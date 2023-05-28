package com.mscomm.customerservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.customerservice.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Long> {

}
