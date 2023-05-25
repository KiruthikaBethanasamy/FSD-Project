package com.javatpoint.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
//mark class as an Entity   
@Entity
//defining class name as Table name  
@Table(name="travel")
public class Travels {
//Defining travel id as primary key  
	@Id
	@Column
	private int travelid;
	@Column
	private String name;
	@Column
	private String location;
	@Column
	private String price;
	@Column
	private String description;
	public int getTravelid() {
		return travelid;
	}
	public void setTravelid(int travelid) {
		this.travelid = travelid;
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
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
		
}
