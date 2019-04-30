package com.crgp.smdb.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class RateableObject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy = "rateableObject", cascade = CascadeType.ALL)
    private List<Award> awards;

    @OneToMany(mappedBy = "rateableObject", cascade = CascadeType.ALL)
    private List<Rating> ratings;

    public RateableObject() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Award> getAwards() {
        return awards;
    }

    public void setAwards(List<Award> awards) {
        this.awards = awards;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }

    public void addAward(Award award){
        this.awards.add(award);
        award.setRateableObject(this);
    }

    public void addRating(Rating rating){
        this.ratings.add(rating);
        rating.setRateableObject(this);
    }
}
