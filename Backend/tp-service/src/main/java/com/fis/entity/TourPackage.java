package com.fis.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.web.bind.annotation.CrossOrigin;


@Entity
public class TourPackage {
	@Id
	private String packageId;
	private String source;
	private double basicFare;
	private String destination;
	public TourPackage(String packageId, String source, double basicFare, String destination) {
		super();
		this.packageId = packageId;
		this.source = source;
		this.basicFare = basicFare;
		this.destination = destination;
	}
	public String getPackageId() {
		return packageId;
	}
	public void setPackageId(String packageId) {
		this.packageId = packageId;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public double getBasicFare() {
		return basicFare;
	}
	public void setBasicFare(double basicFare) {
		this.basicFare = basicFare;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public TourPackage() {
		super();
	}
	@Override
	public String toString() {
		return "tourPackage [packageId=" + packageId + ", source=" + source + ", basicFare=" + basicFare
				+ ", destination=" + destination + "]";
	}
}
