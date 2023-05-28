package com.javatpoint.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.javatpoint.model.Admins;
import com.javatpoint.repository.AdminsRepository;

//defining the business logic  
@Service
public class AdminsService {
	@Autowired
	AdminsRepository adminsRepository;

//getting all admins record by using the method findaAll() of CrudRepository  
	public List<Admins> getAllAdmins() {
		List<Admins> admins = new ArrayList<Admins>();
		adminsRepository.findAll().forEach(admins1 -> admins.add(admins1));
		return admins;
	}

//getting a specific record by using the method findById() of CrudRepository  
	public Admins getAdminsById(int id) {
		return adminsRepository.findById(id).get();
	}

//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(Admins admins) {
		adminsRepository.save(admins);
	}

//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(int id) {
		adminsRepository.deleteById(id);
	}

//updating a record  
	public void update(Admins admins, int adminid) {
		adminsRepository.save(admins);
	}
}
