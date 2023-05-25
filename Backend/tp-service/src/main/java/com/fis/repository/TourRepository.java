package com.fis.repository;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;

import com.fis.entity.TourPackage;

public interface TourRepository extends JpaRepository<TourPackage, String> {
	public TourPackage findBySourceAndDestination(String source,String destination);
	
}
