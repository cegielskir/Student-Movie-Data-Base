package com.crgp.smdb.controller;

import com.crgp.smdb.entity.Comment;
import com.crgp.smdb.entity.Movie;
import com.crgp.smdb.entity.User;
import com.crgp.smdb.exception.ResourceNotFoundException;
import com.crgp.smdb.repository.CommentRepository;
import com.crgp.smdb.repository.MovieRepository;
import com.crgp.smdb.repository.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CommentController {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/comment/{movieId}")
    public List<Comment> getComment(@PathVariable Long movieId){
        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new ResourceNotFoundException("movie", "id", movieId));
        return movie.getComments();
    }

    @PostMapping("/comment/{movieId}")
    public Comment addComment(@PathVariable Long movieId, @RequestBody Comment comment) throws JsonProcessingException {
        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new ResourceNotFoundException("movie", "id", movieId));
        movie.addComment(comment);
        movieRepository.save(movie);

        //get current user
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username;
        if (principal instanceof UserDetails) {
            username = ((UserDetails)principal).getUsername();
        } else {
            username = principal.toString();
        }
        User user = userRepository.findByUsername(username).get();

        comment.setUser(user);
        userRepository.save(user);
        commentRepository.save(comment);

        return comment;
    }

}
