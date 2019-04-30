package com.crgp.smdb.entity;

import javax.persistence.*;

@Entity
@DiscriminatorValue("production")
public class ProductionAward extends Award {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "production_id")
    private Production production;

    public ProductionAward() {}

    @Override
    public int getId() {
        return id;
    }

    @Override
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

