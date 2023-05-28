package com.mscomm.bookservice.service.impl;
import com.mscomm.bookservice.dto.ResponseDto;
import com.mscomm.bookservice.entity.Book;
import com.mscomm.bookservice.service.*;
import com.mscomm.bookservice.repository.*;
import org.springframework.web.client.RestTemplate;
import com.mscomm.bookservice.dto.*;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
@AllArgsConstructor

public class BookServiceImpl implements BookService {

	 private BookRepository bookRepository;
	    private RestTemplate restTemplate;
	@Override
	public Book saveBook(Book book) {
		return bookRepository.save(book);
	}

	@Override
	public ResponseDto getBook(Long bookId) {

        ResponseDto responseDto = new ResponseDto();
        Book book = bookRepository.findById(bookId).get();
        BookDto bookDto = mapToBook(book);

        ResponseEntity<CustomerDto> responseEntity = restTemplate
                .getForEntity("http://springboot-customer:8082/api/customers/" + book.getCustomerId(),
                CustomerDto.class);

        CustomerDto customerDto = responseEntity.getBody();

        System.out.println(responseEntity.getStatusCode());

        responseDto.setBook(bookDto);
        responseDto.setCustomer(customerDto);

        return responseDto;
	}
	private BookDto mapToBook(Book book){
        BookDto bookDto = new BookDto();
        bookDto.setId(book.getId());
        bookDto.setName(book.getName());
        bookDto.setEmail(book.getEmail());
        bookDto.setContact(book.getContact());
        bookDto.setDestination(book.getDestination());
        bookDto.setNum(book.getNum());
        bookDto.setArrival(book.getArrival());
        bookDto.setDeparture(book.getDeparture());
        return bookDto;
    }

}
