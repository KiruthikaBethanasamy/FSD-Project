package com.mscomm.customerservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "customers")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Customer {

	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long Id;
	    private String customerName;
	    private String customerAddress;
	    private String customerEmail;
	    private String customerPassword;
	    private String customerMobile;
}
