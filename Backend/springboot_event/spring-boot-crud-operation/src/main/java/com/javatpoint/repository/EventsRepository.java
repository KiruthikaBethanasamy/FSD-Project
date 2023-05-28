package com.javatpoint.repository;

import org.springframework.data.repository.CrudRepository;  
import com.javatpoint.model.Events;  
//repository that extends CrudRepository  
public interface EventsRepository extends CrudRepository<Events, Integer>  
{  
}  
