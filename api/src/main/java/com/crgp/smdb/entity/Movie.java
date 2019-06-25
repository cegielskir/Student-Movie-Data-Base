package com.crgp.smdb.entity;


import javax.persistence.*;
import java.sql.Time;
import java.util.Date;
import java.util.List;

@Entity
@DiscriminatorValue("movie")
public class Movie extends Production{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Date premiereDate;
    private Time duration;
    private String posterUrl;

    public Movie() {}

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getPremiereDate() {
        return premiereDate;
    }

    public void setPremiereDate(Date premiereDate) {
        this.premiereDate = premiereDate;
    }

    public Time getDuration() {
        return duration;
    }

    public void setDuration(Time duration) {
        this.duration = duration;
    }

    public String getPosterUrl() {
        return posterUrl;
    }

    public void setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", premiereDate=" + premiereDate +
                ", duration=" + duration +
                ", posterUrl=" + posterUrl +
                '}';
    }
}
