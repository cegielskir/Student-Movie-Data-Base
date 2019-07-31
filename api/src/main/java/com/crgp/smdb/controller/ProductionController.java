package com.crgp.smdb.controller;

import com.crgp.smdb.entity.Movie;
import com.crgp.smdb.entity.Production;
import com.crgp.smdb.repository.ProductionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProductionController {
    @Autowired
    private ProductionRepository productionRepository;

    @PostMapping("/productions")
    public Production addMovie(@RequestBody Production movie) {
        productionRepository.save(movie);
        return movie;
    }
}
