package com.mscomm.bookservice.entity;
import java.util.Date;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "books")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Book {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String Name;
	    @Column(nullable = false, unique = true)
	    private String email;
	    private String contact;
		private String destination;
		private String num;
		private Date arrival;
		private Date departure;
	    private String customerId;
}
