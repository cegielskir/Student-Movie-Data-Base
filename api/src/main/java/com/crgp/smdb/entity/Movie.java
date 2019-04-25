package com.crgp.smdb.entity;


import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
public class Movie extends Production {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Date premiereDate;
    private Time duration;
}
