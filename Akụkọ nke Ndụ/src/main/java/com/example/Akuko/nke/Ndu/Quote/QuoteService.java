package com.example.Akuko.nke.Ndu.Quote;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuoteService {
    
    @Autowired
    private QuoteRepository quoteRepository;

    // Create a new quote
    public Quote createQuote(Quote quote) {

        return quoteRepository.save(quote);

    }

    // get all quotes
    public List<Quote> getAllQuotes() {

        return quoteRepository.findAll();
    }

    //delete quote
    public void deleteQuote(Long id) {
        quoteRepository.deleteById(id);;
    }

    // TODO: Implement random quote method
    //get random quote
    // public Quote getRandomQuote() {

    // }

}
