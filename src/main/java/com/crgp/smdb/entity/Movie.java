package com.crgp.smdb.entity;

import com.sun.tools.javac.util.List;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
public class Movie extends Production {

    private Date premiereDate;
    private Time duration;
}
