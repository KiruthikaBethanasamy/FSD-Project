package com.mscomm.customerservice.service.impl;
import org.springframework.stereotype.Service;
import com.mscomm.customerservice.entity.Customer;
import com.mscomm.customerservice.repository.CustomerRepository;
import com.mscomm.customerservice.service.CustomerService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class CustomerServiceImpl implements CustomerService{
	
	 private CustomerRepository customerRepository;
	@Override
	public Customer saveCustomer(Customer customer) {
	return customerRepository.save(customer);
	}

	@Override
	public Customer getCustomerById(Long customerId) {
		 return customerRepository.findById(customerId).get();
	}

}
