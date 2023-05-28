package com.javatpoint.repository;

import org.springframework.data.repository.CrudRepository;  
import com.javatpoint.model.Admins;  
//repository that extends CrudRepository  
public interface AdminsRepository extends CrudRepository<Admins, Integer>  
{  
}  
