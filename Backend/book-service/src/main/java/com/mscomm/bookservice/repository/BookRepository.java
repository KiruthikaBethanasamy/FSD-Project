package com.mscomm.bookservice.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.bookservice.entity.*;
public interface BookRepository extends JpaRepository<Book, Long>{

}
