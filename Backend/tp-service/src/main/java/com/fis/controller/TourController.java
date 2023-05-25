package com.fis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fis.entity.TourPackage;
import com.fis.service.TourService;

@RestController
@CrossOrigin
public class TourController {
	
	@Autowired
	TourService tourService;
	
	@GetMapping("/tourPackage/{id}")
	public ResponseEntity<TourPackage> get(@PathVariable(value="id") String id){
		
		return new ResponseEntity<>(tourService.get(id),HttpStatus.OK);
	}
	@GetMapping("/tourPackage/{source}/{destination}/{days}")
	public ResponseEntity<Double> get(@PathVariable(value="source") String source,
			@PathVariable(value="destination") String destination,
			@PathVariable(value="days") int days){
		System.out.println(source+" "+destination+" "+days);
		return new ResponseEntity<>(tourService.CostByFilter(source,destination,days),HttpStatus.OK);
	}
	
	@GetMapping("/tourPackage")
	public ResponseEntity<List<TourPackage>> getAll(){
		
		return new ResponseEntity<>(tourService.getAll(),HttpStatus.OK);
	}
	
	@PutMapping("/tourPackage/{id}")
	public ResponseEntity<TourPackage> modifyTour(@PathVariable(value="id") String id,@RequestBody TourPackage tourPackage) {
		return new ResponseEntity<>(tourService.update(id,tourPackage),HttpStatus.CREATED);
		
	}
	
	
	@PostMapping("/tourPackage")
	public ResponseEntity<TourPackage> createTour(@RequestBody TourPackage tourPackage) {
		return new ResponseEntity<>(tourService.save(tourPackage),HttpStatus.CREATED);
		
	}
	
	@DeleteMapping("/tourPackage/{id}")
	public ResponseEntity<String> deleteTour(@PathVariable(value="id") String id) {
		tourService.delete(id);
		return new ResponseEntity<>("Deleted the tour",HttpStatus.NO_CONTENT);
		
	}

}
