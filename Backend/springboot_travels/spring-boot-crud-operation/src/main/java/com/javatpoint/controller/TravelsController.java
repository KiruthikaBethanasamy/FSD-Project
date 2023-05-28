package com.javatpoint.controller;
 
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
import com.javatpoint.model.Travels;  
import com.javatpoint.service.TravelsService;  
//mark class as Controller 
@CrossOrigin(origins = "http://localhost:3000")
@RestController  
public class TravelsController   
{  
//autowire the TravelsService class  
@Autowired  
TravelsService travelsService;  
//creating a get mapping that retrieves all the travels detail from the database   
@GetMapping("/travel")  
private List<Travels> getAllTravels()   
{  
return travelsService.getAllTravels();  
}  
//creating a get mapping that retrieves the detail of a specific travel  
@GetMapping("/travel/{travelid}")  
private Travels getTravels(@PathVariable("travelid") int travelid)   
{  
return travelsService.getTravelsById(travelid);  
}  
//creating a delete mapping that deletes a specified travel  
@DeleteMapping("/travel")  
private void deleteTravel(@PathVariable("travelid") int travelid)   
{  
travelsService.delete(travelid);  
}  
//creating post mapping that post the travel detail in the database  
@PostMapping("/travels")  
private int saveTravel(@RequestBody Travels travels)   
{  
travelsService.saveOrUpdate(travels);  
return travels.getTravelid();  
}  
//creating put mapping that updates the travel detail   
@PutMapping("/travels/{travelid}")  
private Travels update(@RequestBody Travels travels)   
{  
travelsService.saveOrUpdate(travels);  
return travels;  
} 

}  
