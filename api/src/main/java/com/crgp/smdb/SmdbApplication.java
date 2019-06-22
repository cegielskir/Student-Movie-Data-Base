package com.crgp.smdb;

import com.crgp.smdb.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.TimeZone;

@EnableConfigurationProperties(AppProperties.class)
@SpringBootApplication
@EntityScan(basePackageClasses = {
		SmdbApplication.class,
		Jsr310JpaConverters.class
})
public class SmdbApplication {

	@PostConstruct
	void init() {
		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}

	public static void main(String[] args) {
		SpringApplication.run(SmdbApplication.class, args);
	}
}


