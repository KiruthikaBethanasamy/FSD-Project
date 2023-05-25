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
import com.javatpoint.model.Events;  
import com.javatpoint.service.EventsService;  
//mark class as Controller 
@CrossOrigin(origins = "http://localhost:3000")
@RestController  
public class EventsController   
{  
//autowire the EventsService class  
@Autowired  
EventsService eventsService;  
//creating a get mapping that retrieves all the events detail from the database   
@GetMapping("/event")  
private List<Events> getAllEvents()   
{  
return eventsService.getAllEvents();  
}  
//creating a get mapping that retrieves the detail of a specific event  
@GetMapping("/event/{eventid}")  
private Events getEvents(@PathVariable("eventid") int eventid)   
{  
return eventsService.getEventsById(eventid);  
}  
//creating a delete mapping that deletes a specified event  
@DeleteMapping("/event")  
private void deleteEvent(@PathVariable("eventid") int eventid)   
{  
eventsService.delete(eventid);  
}  
//creating post mapping that post the event detail in the database  
@PostMapping("/events")  
private int saveEvent(@RequestBody Events events)   
{  
eventsService.saveOrUpdate(events);  
return events.getEventid();  
}  
//creating put mapping that updates the event detail   
@PutMapping("/events")  
private Events update(@RequestBody Events events)   
{  
eventsService.saveOrUpdate(events);  
return events;  
} 

}  
