package com.crgp.smdb.controller;

import com.crgp.smdb.entity.Movie;
import com.crgp.smdb.exception.AppException;
import com.crgp.smdb.exception.ResourceNotFoundException;
import com.crgp.smdb.repository.MovieRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;

import javax.validation.Valid;
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

    @RequestMapping(value = "/movies", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @CrossOrigin(exposedHeaders = "errors, content-type")
    public void addMovie(@RequestBody @Valid Movie movie) {
        movieRepository.save(movie);
    }


}
