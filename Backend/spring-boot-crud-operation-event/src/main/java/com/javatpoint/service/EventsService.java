package com.javatpoint.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.javatpoint.model.Events;
import com.javatpoint.repository.EventsRepository;

//defining the business logic  
@Service
public class EventsService {
	@Autowired
	EventsRepository eventsRepository;

//getting all events record by using the method findaAll() of CrudRepository  
	public List<Events> getAllEvents() {
		List<Events> events = new ArrayList<Events>();
		eventsRepository.findAll().forEach(events1 -> events.add(events1));
		return events;
	}

//getting a specific record by using the method findById() of CrudRepository  
	public Events getEventsById(int id) {
		return eventsRepository.findById(id).get();
	}

//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(Events events) {
		eventsRepository.save(events);
	}

//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(int id) {
		eventsRepository.deleteById(id);
	}

//updating a record  
	public void update(Events events, int eventid) {
		eventsRepository.save(events);
	}
}
