package com.crgp.smdb.entity;

import javax.persistence.*;

@Entity
@DiscriminatorValue("production")
public class ProductionRating extends Rating{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "production_id")
    private Production production;

    public ProductionRating() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Production getProduction() {
        return production;
    }

    public void setProduction(Production production) {
        this.production = production;
    }

    @Override
    public void setOwner(Object object) {
        setProduction((Production) object);
    }
}
