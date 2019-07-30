package com.crgp.smdb.repository;

import com.crgp.smdb.entity.Production;
//import com.crgp.smdb.entity.Rateable;
import com.crgp.smdb.entity.ProductionRating;
import com.crgp.smdb.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RatingRepository extends JpaRepository<ProductionRating, Long>{

    List<ProductionRating> findByUser(User user);
    //List<Rating> findByRateable(Rateable rateable);
    //Optional<Rating> findByUserAndRateable(User user, Rateable rateable);
}
