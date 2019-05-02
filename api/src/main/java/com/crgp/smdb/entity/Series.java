package com.crgp.smdb.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@DiscriminatorValue("series")
public class Series extends Production {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int numberOfSeasons;

    public Series() {}

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNumberOfSeasons() {
        return numberOfSeasons;
    }

    public void setNumberOfSeasons(int numberOfSeasons) {
        this.numberOfSeasons = numberOfSeasons;
    }

    @Override
    public String toString() {
        return "Series{" +
                "id=" + id +
                ", numberOfSeasons=" + numberOfSeasons +
                '}';
    }
}
