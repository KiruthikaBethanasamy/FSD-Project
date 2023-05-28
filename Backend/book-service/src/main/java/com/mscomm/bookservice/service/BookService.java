package com.mscomm.bookservice.service;
import com.mscomm.bookservice.entity.*;

import com.mscomm.bookservice.dto.ResponseDto;
public interface BookService {
	Book saveBook(Book book);

    ResponseDto getBook(Long bookId);
}
