package com.javatpoint.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
//mark class as an Entity   
@Entity
//defining class name as Table name  
@Table(name="Package")
public class Packages {
//Defining Package id as primary key  
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "packageid")
	private int packageid;
	@Column
	private String source;
	@Column
	private String price;
	@Column
	private String destination;
	public int getPackageid() {
		return packageid;
	}
	public void setPackageid(int packageid) {
		this.packageid = packageid;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	
}
