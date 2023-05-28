package com.javatpoint.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.javatpoint.model.Travels;
import com.javatpoint.repository.TravelsRepository;

//defining the business logic  
@Service
public class TravelsService {
	@Autowired
	TravelsRepository travelsRepository;

//getting all travels record by using the method findaAll() of CrudRepository  
	public List<Travels> getAllTravels() {
		List<Travels> travels = new ArrayList<Travels>();
		travelsRepository.findAll().forEach(travels1 -> travels.add(travels1));
		return travels;
	}

//getting a specific record by using the method findById() of CrudRepository  
	public Travels getTravelsById(int id) {
		return travelsRepository.findById(id).get();
	}

//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(Travels travels) {
		travelsRepository.save(travels);
	}

//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(int id) {
		travelsRepository.deleteById(id);
	}

//updating a record  
	public void update(Travels travels, int travelid) {
		travelsRepository.save(travels);
	}
}
