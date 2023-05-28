package com.mscomm.bookservice.controller;

import lombok.AllArgsConstructor;


import com.mscomm.bookservice.dto.ResponseDto;
import com.mscomm.bookservice.entity.Book;
import com.mscomm.bookservice.service.BookService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/books")
@AllArgsConstructor
public class BookController {
	  private BookService bookService;

	    @PostMapping
	    public ResponseEntity<Book> saveBook(@RequestBody Book book){
	        Book savedBook = bookService.saveBook(book);
	        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
	    }

	    @GetMapping("{id}")
	    public ResponseEntity<ResponseDto> getBook(@PathVariable("id") Long bookId){
	        ResponseDto responseDto = bookService.getBook(bookId);
	        return ResponseEntity.ok(responseDto);
	    }
}
