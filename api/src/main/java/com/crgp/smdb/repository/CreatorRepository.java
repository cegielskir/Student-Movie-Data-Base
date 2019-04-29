package com.crgp.smdb.repository;

import com.crgp.smdb.entity.Creator;
import com.crgp.smdb.entity.Production;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CreatorRepository extends JpaRepository<Creator, Long>{

    @Query("SELECT p.creators FROM Production p WHERE p.id = :id")
    List<Creator> findAllByProductionId(@Param("id") int productionId);
}
