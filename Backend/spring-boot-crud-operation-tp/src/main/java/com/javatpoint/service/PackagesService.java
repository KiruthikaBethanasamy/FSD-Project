package com.javatpoint.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.javatpoint.model.Packages;
import com.javatpoint.repository.PackagesRepository;

//defining the business logic  
@Service
public class PackagesService {
	@Autowired
	PackagesRepository packagesRepository;

//getting all packages record by using the method findaAll() of CrudRepository  
	public List<Packages> getAllPackages() {
		List<Packages> packages = new ArrayList<Packages>();
		packagesRepository.findAll().forEach(packages1 -> packages.add(packages1));
		return packages;
	}

//getting a specific record by using the method findById() of CrudRepository  
	public Packages getPackagesById(int id) {
		return packagesRepository.findById(id).get();
	}

//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(Packages packages) {
		packagesRepository.save(packages);
	}

//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(int id) {
		packagesRepository.deleteById(id);
	}

//updating a record  
	public void update(Packages packages, int packageid) {
		packagesRepository.save(packages);
	}
}
