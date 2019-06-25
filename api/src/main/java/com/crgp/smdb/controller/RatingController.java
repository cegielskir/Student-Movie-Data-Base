package com.crgp.smdb.controller;

import com.crgp.smdb.entity.Rating;
import com.crgp.smdb.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RatingController {

    @Autowired
    private RatingRepository ratingRepository;

    @GetMapping("/ratings")
    public List<Rating> getRatings(){
        return ratingRepository.findAll();
    }

}
