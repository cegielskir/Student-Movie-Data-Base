package com.crgp.smdb.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Award {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    private String awardName;

    private String desription;

    @ManyToOne
    @JoinColumn(name = "production_id")
    private Production production;

    public Award() {}

    public Award(@NotNull String awardName, String desription) {
        this.awardName = awardName;
        this.desription = desription;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAwardName() {
        return awardName;
    }

    public void setAwardName(String awardName) {
        this.awardName = awardName;
    }

    public String getDesription() {
        return desription;
    }

    public void setDesription(String desription) {
        this.desription = desription;
    }

    public Production getProduction() {
        return production;
    }

    public void setProduction(Production production) {
        this.production = production;
        this.pr
    }
}
