package com.fis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fis.repository.*;
import com.fis.entity.*;

@Component
public class TourService {
	
	@Autowired
	TourRepository tourRepository;
	
	public TourPackage save(TourPackage tourPackage) {
		
		return tourRepository.save(tourPackage);
	}

	public List<TourPackage> getAll() {
		// TODO Auto-generated method stub
		return tourRepository.findAll();
	}
	public double getTotalCost(double basicFare,int days) {
		double totalPrice=(basicFare*days);
		double dValue=getDiscount(days)*totalPrice;
		double afterDiscount=totalPrice-dValue;
		double GST=afterDiscount*0.12;
		return afterDiscount+GST;
	}
	
	public double getDiscount(int days) {
		if(days<=5)
			return 0;
		else if(days>5 && days<=8)
			return 0.03;
		else if(days>8 && days<=10)
			return 0.05;
		else
			return 0.07;
		
		
	}
	

	public TourPackage get(String id) {
		// TODO Auto-generated method stub
		return tourRepository.findById(id).orElseThrow(() -> new RuntimeException("error"));
	}

	public TourPackage update(String id, TourPackage tourPackage) {
		// TODO Auto-generated method stub
		get(id);
		return tourRepository.save(tourPackage);
	}
	public void delete(String id) {
		// TODO Auto-generated method stub
		get(id);
		tourRepository.deleteById(id);
	}

	public Double CostByFilter(String source, String destination,int days) {
		// TODO Auto-generated method stub
		TourPackage tourPackage= tourRepository.findBySourceAndDestination(source, destination);
		double fare=tourPackage.getBasicFare();
		double totalFare=getTotalCost(fare,days);
		return totalFare;
		
	}

	
}
