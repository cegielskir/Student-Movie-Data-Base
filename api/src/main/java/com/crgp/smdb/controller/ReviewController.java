package com.crgp.smdb.controller;

import com.crgp.smdb.entity.Review;
import com.crgp.smdb.entity.Movie;
import com.crgp.smdb.entity.User;
import com.crgp.smdb.exception.ResourceNotFoundException;
import com.crgp.smdb.repository.ReviewRepository;
import com.crgp.smdb.repository.MovieRepository;
import com.crgp.smdb.repository.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/reviews")
    public List<Review> getReviews(){
        return reviewRepository.findAll();
    }

    @GetMapping("/review/{movieId}")
    public List<Review> getReview(@PathVariable Long movieId){
        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new ResourceNotFoundException("movie", "id", movieId));
        return movie.getReviews();
    }

    @PostMapping("/review/{movieId}")
    public Review addReview(@PathVariable Long movieId, @RequestBody Review review) throws JsonProcessingException {
        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new ResourceNotFoundException("movie", "id", movieId));
        movie.addReview(review);
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

        review.setUser(user);
        userRepository.save(user);
        reviewRepository.save(review);

        return review;
    }

    @DeleteMapping("/review/{reviewId}")
    public void deleteReview(@PathVariable long reviewId) {
        Optional<Review> review = reviewRepository.findById(reviewId);
        reviewRepository.delete(review.get());
    }

    @PutMapping("review/{reviewId}")
    public Review acceptReview(@PathVariable long reviewId) {
        Review review =  reviewRepository.findById(reviewId).orElseThrow(() -> new ResourceNotFoundException("review", "id", reviewId));
        review.setAccepted(true);

        reviewRepository.save(review);

        return review;
    }
}
