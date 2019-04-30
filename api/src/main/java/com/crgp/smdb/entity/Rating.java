package com.crgp.smdb.entity;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Entity
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Min(0)
    @Max(10)
    private int value;

    @ManyToOne
    @JoinColumn(name = "rateable_object_id")
    private RateableObject rateableObject;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Rating() { }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public RateableObject getRateableObject() {
        return rateableObject;
    }

    public void setRateableObject(RateableObject rateableObject) {
        this.rateableObject = rateableObject;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
