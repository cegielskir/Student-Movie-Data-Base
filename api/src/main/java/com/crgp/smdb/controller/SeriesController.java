package com.crgp.smdb.controller;

import com.crgp.smdb.entity.Series;
import com.crgp.smdb.exception.ResourceNotFoundException;
import com.crgp.smdb.repository.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SeriesController {

    @Autowired
    private SeriesRepository seriesRepository;

    @GetMapping("/series")
    public List<Series> getSeries(){
        return seriesRepository.findAll();
    }

    @GetMapping("/series/{seriesId}")
    public Series getSeries(@PathVariable Long seriesId){
        return seriesRepository.findById(seriesId)
                .orElseThrow(() -> new ResourceNotFoundException("series", "id", seriesId));
    }

    @PostMapping("/series")
    public Series addSeries(@RequestBody Series series){
        seriesRepository.save(series);
        return series;
    }


}
