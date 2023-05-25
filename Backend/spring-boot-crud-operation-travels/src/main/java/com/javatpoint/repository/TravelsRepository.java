package com.javatpoint.repository;

import org.springframework.data.repository.CrudRepository;  
import com.javatpoint.model.Travels;  
//repository that extends CrudRepository  
public interface TravelsRepository extends CrudRepository<Travels, Integer>  
{  
}  
