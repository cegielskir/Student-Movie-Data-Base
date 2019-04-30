package com.crgp.smdb.entity;

import javax.persistence.*;

@Entity
@DiscriminatorValue("creator")
public class CreatorRating extends Rating{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "creator_id")
    private Creator creator;

    public CreatorRating() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Creator getCreator() {
        return creator;
    }

    public void setCreator(Creator creator) {
        this.creator = creator;
    }

    @Override
    public void setOwner(Object object) {
        setCreator((Creator) object);
    }
}
