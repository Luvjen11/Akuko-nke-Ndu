package com.example.akukoNkeNdu.Quote;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
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

    // get all quotes
    @GetMapping
    public ResponseEntity<List<Quote>> getAllQuotes() {
        List<Quote> quotes = quoteService.getAllQuotes();

        return ResponseEntity.ok(quotes);
    }

    // delete quote
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuote(@PathVariable Long id) {

        if (!quoteService.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Quote not found");
        }
        quoteService.deleteQuote(id);
        return ResponseEntity.ok("Quote deleted successfully");
    }

    // get random quote
    @GetMapping("/random")
    public ResponseEntity<Quote> getRandomQuote() {
        Quote randomQuote = quoteService.getRandomQuote();

        return randomQuote != null ? ResponseEntity.ok(randomQuote) : ResponseEntity.noContent().build();
    }

        // Toggle favorite
        @PutMapping("/{id}/favorite")
        public Quote toggleFavorite(@PathVariable Long id) {
            return quoteService.toggleFavorite(id);
        }
    
        // Get all favorites
        @GetMapping("/favorites")
        public List<Quote> getAllFavorites() {
            return quoteService.getAllFavorites();
        }
}
