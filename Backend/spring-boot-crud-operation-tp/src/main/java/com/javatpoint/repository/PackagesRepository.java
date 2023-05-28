package com.javatpoint.repository;

import org.springframework.data.repository.CrudRepository;  
import com.javatpoint.model.Packages;  
//repository that extends CrudRepository  
public interface PackagesRepository extends CrudRepository<Packages, Integer>  
{  
}  
