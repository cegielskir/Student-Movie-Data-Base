package com.crgp.smdb.controller;

import com.crgp.smdb.entity.ProductionRating;
import com.crgp.smdb.repository.RatingRepository;
import com.crgp.smdb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.crgp.smdb.entity.Movie;
import com.crgp.smdb.entity.User;
import com.crgp.smdb.exception.ResourceNotFoundException;
import com.crgp.smdb.repository.MovieRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RatingController {

    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/ratings")
    public List<ProductionRating> getRatings(){
        return ratingRepository.findAll();
    }

    @PostMapping("/ratings/{ratingId}")
    public ProductionRating addRating(@PathVariable Long movieId, @RequestBody ProductionRating rating) throws JsonProcessingException {
        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new ResourceNotFoundException("movie", "id", movieId));
        movie.addRating(rating);
        movieRepository.save(movie);

        //get current user
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userEmail;
        if (principal instanceof UserDetails) {
            userEmail = ((UserDetails)principal).getUsername();
        } else {
            userEmail = principal.toString();
        }
        User user = userRepository.findByEmail(userEmail).get();

        rating.setUser(user);
        userRepository.save(user);
        ratingRepository.save(rating);

        return rating;
    }

}
