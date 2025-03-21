package com.example.akukoNkeNdu.Quote;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuoteRepository extends JpaRepository<Quote, Long> {
    
    List<Quote> findByFavoriteTrue();
}
