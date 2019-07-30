package com.crgp.smdb.controller;

import com.crgp.smdb.entity.Movie;
import com.crgp.smdb.exception.AppException;
import com.crgp.smdb.exception.ResourceNotFoundException;
import com.crgp.smdb.repository.MovieRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @GetMapping("/movies")
    public List<Movie> getMovies(){
        return movieRepository.findAll();
    }

    @GetMapping("/movies/{movieId}")
    public Movie getMovie(@PathVariable Long movieId){
        return movieRepository.findById(movieId)
                .orElseThrow(() -> new ResourceNotFoundException("movie", "id", movieId));
    }

    @PostMapping("/xdd")
    public void addMovie(@RequestBody Movie movie) {
        movieRepository.save(movie);
    }


}
