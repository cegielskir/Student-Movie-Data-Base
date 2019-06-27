package com.crgp.smdb.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "production_type")
public abstract class Production{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;

    @ManyToMany(fetch = FetchType.EAGER,
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinTable(
            name = "production_creator",
            joinColumns = @JoinColumn(name = "production_id"),
            inverseJoinColumns = @JoinColumn(name = "creator_id")
    )
    private List<Creator> creators;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinTable(
            name = "production_genre",
            joinColumns = @JoinColumn(name = "production_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private List<Genre> genres;

    @OneToMany(mappedBy = "production", cascade = CascadeType.ALL)
    private List<ProductionAward> awards;

    @OneToMany(mappedBy = "production", cascade = CascadeType.ALL)
    private List<ProductionRating> ratings;

    @OneToMany(mappedBy = "production", cascade = CascadeType.ALL)
    private List<Comment> comments;

    public Production() {}

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public List<Genre> getGenreList() {
        return genres;
    }

    public void setGenreList(List<Genre> genreList) {
        this.genres = genreList;
    }


    public List<Creator> getDirectors() {
        return creators;
    }

    public void setDirectors(List<Creator> directors) {
        this.creators = directors;
    }


    public void addGenre(Genre genre){
        this.genres.add(genre);
        genre.addProduction(this);
    }

    public void addCreator(Creator creator){
        this.creators.add(creator);
        creator.addProduction(this);
    }

    public List<ProductionAward> getAwards() {
        return awards;
    }

    public void setAwards(List<ProductionAward> awards) {
        this.awards = awards;
    }

    public List<ProductionRating> getRatings() {
        return ratings;
    }

    public void setRatings(List<ProductionRating> ratings) {
        this.ratings = ratings;
    }

    public void addAward(ProductionAward award){
        this.awards.add(award);
        award.setOwner(this);
    }

    public void addRating(ProductionRating rating){
        this.ratings.add(rating);
        rating.setOwner(this);
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Creator> getCreators() {
        return creators;
    }

    public void setCreators(List<Creator> creators) {
        this.creators = creators;
    }

    public List<Genre> getGenres() {
        return genres;
    }

    public void setGenres(List<Genre> genres) {
        this.genres = genres;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public void addComment(Comment comment){
        if(this.comments == null) this.comments = new ArrayList<>();
        this.comments.add(comment);
        comment.setProduction(this);
    }
}
