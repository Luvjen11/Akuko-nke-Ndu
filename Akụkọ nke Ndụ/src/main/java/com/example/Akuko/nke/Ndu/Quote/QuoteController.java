package com.example.Akuko.nke.Ndu.Quote;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("Akuko-nke-Ndu/quotes")
public class QuoteController {
    
    @Autowired
    private QuoteService quoteService;

    // create a quote
    @PostMapping
    public ResponseEntity<Quote> createQuote(@RequestBody Quote quote) {

        Quote createQuote = quoteService.createQuote(quote);
        return ResponseEntity.status(HttpStatus.CREATED).body(createQuote);

    }

    //get all quotes
    @GetMapping
    public ResponseEntity<List<Quote>> getAllQuotes() {
        List<Quote> quotes = quoteService.getAllQuotes();

        return ResponseEntity.ok(quotes);
    }

    //delete quote
    @DeleteMapping
    public ResponseEntity<String> deleteQuote(@PathVariable Long id) {
        quoteService.deleteQuote(id);
        return ResponseEntity.ok("Quote deleted successfully");
    }
}
