package com.mscomm.bookservice.dto;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {

	  private Long id;
	    private String Name;
	    private String email;
	    private String contact;
		private String destination;
		private String num;
		private Date arrival;
		private Date departure;

}
