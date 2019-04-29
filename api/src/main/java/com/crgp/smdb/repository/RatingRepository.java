package com.crgp.smdb.repository;

import com.crgp.smdb.entity.Production;
import com.crgp.smdb.entity.Rating;
import com.crgp.smdb.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RatingRepository extends JpaRepository<Rating, Long>{

    List<Rating> findByUser(User user);
    List<Rating> findByProduction(Production production);
    Optional<Rating> findByUserAndProduction(User user, Production production);
}
