package com.mscomm.bookservice.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDto {
	private Long id;
    private String customerName;
    private String customerAddress;
    private String customerEmail;
    private String customerPassword;
    private String customerMobile;
}
