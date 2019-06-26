package com.crgp.smdb.repository;

import com.crgp.smdb.entity.Genre;
import com.crgp.smdb.entity.Series;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SeriesRepository extends JpaRepository<Series, Long> {

    Optional<Series> findById(Long movieId);

    List<Series> findByIdIn(List<Long> pollIds);

    List<Series> findByIdIn(List<Long> pollIds, Sort sort);

    List<Series> findByGenres(List<Genre> genres);
}
