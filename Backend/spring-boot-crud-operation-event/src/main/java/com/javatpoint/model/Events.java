package com.javatpoint.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
//mark class as an Entity   
@Entity
//defining class name as Table name  
@Table(name="event")
public class Events {
//Defining event id as primary key  
	@Id
	@Column
	private int eventid;
	@Column
	private String name;
	@Column
	private String location;
	@Column
	private Date date;
	
	public int getEventid() {
		return eventid;
	}
	public void setEventid(int eventid) {
		this.eventid = eventid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
			
}
