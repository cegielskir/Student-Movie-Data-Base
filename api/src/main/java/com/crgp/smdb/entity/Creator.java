package com.crgp.smdb.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Creator{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;

    @ManyToMany(fetch = FetchType.EAGER,
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinTable(
            name = "production_creator",
            joinColumns = @JoinColumn(name = "production_id"),
            inverseJoinColumns = @JoinColumn(name = "creator_id")
    )
    private List<Production> productions;

    @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL)
    private List<CreatorAward> awards;

    @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL)
    private List<CreatorRating> ratings;


    public Creator() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<Production> getProductions() {
        return productions;
    }

    public void setProductions(List<Production> productions) {
        this.productions = productions;
    }

    public void addProduction(Production production){
        this.productions.add(production);
    }

    public List<CreatorAward> getAwards() {
        return awards;
    }

    public void setAwards(List<CreatorAward> awards) {
        this.awards = awards;
    }

    public List<CreatorRating> getRatings() {
        return ratings;
    }

    public void setRatings(List<CreatorRating> ratings) {
        this.ratings = ratings;
    }

    public void addAward(CreatorAward award){
        this.awards.add(award);
        award.setOwner(this);
    }

    public void addRating(CreatorRating rating){
        this.ratings.add(rating);
        rating.setOwner(this);
    }
}
