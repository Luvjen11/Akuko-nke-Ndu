package com.example.akukoNkeNdu.Quote;

import java.util.List;
import java.util.Random;

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
        quoteRepository.deleteById(id);
    }


    //get random quote
    public Quote getRandomQuote() {

        List<Quote> quotes = quoteRepository.findAll();

        if (quotes.isEmpty()) {
            return null;
        }

        Random random = new Random();

        int randomQuote = random.nextInt(quotes.size());

        return quotes.get(randomQuote);

    }

    // check if quote exists
    public boolean existsById(Long id) {
        return quoteRepository.existsById(id);
    }
}
