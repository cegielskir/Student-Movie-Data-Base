package com.crgp.smdb.repository;

import com.crgp.smdb.entity.Award;
import com.crgp.smdb.entity.RateableObject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AwardRepository extends JpaRepository<Award, Long> {

    List<Award> findByRateableObject(RateableObject rateableObject);
}
