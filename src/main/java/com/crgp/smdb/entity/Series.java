package com.crgp.smdb.entity;

import javax.persistence.Entity;

@Entity
public class Series extends Production {

    private int numberOfSeasons;

    public Series() {}

    public int getNumberOfSeasons() {
        return numberOfSeasons;
    }

    public void setNumberOfSeasons(int numberOfSeasons) {
        this.numberOfSeasons = numberOfSeasons;
    }
}
