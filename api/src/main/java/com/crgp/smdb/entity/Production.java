package com.crgp.smdb.entity;





import javax.persistence.*;
import java.util.List;

@Entity
@Inheritance(strategy=InheritanceType.JOINED)
public abstract class Production {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;

    @OneToMany(mappedBy = "rating", cascade = CascadeType.ALL)
    private List<Rating> ratings;

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

    public Production() {}

    public int getId() {
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

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }

    public List<Creator> getDirectors() {
        return creators;
    }

    public void setDirectors(List<Creator> directors) {
        this.creators = directors;
    }

    public void addRating(Rating rating){
        this.ratings.add(rating);
        rating.setProduction(this);

    }

    public void addGenre(Genre genre){
        this.genres.add(genre);
        genre.addProduction(this);
    }

    public void addCreator(Creator creator){
        this.creators.add(creator);
        creator.addProduction(this);
    }
}
