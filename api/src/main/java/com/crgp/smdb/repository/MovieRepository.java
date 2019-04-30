package com.crgp.smdb.repository;


import com.crgp.smdb.entity.Genre;
import com.crgp.smdb.entity.Movie;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    Optional<Movie> findById(Long movieId);

    List<Movie> findByIdIn(List<Long> pollIds);

    List<Movie> findByIdIn(List<Long> pollIds, Sort sort);

    List<Movie> findByGenres(List<Genre> genres);
}
