package com.crgp.smdb;

import com.crgp.smdb.entity.Movie;
import com.crgp.smdb.repository.MovieRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
public class MovieRepositoryIntegrationTest {

    private static final String TEST_FILE_NAME = "Test Movie";
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private MovieRepository movieRepository;

    @Test
    public void whenFindByName_thenReturnMovie() {
        // given
        Movie movie = new Movie();
        movie.setTitle("Test Movie");
        entityManager.persist(movie);
        entityManager.flush();

        // when
        Optional<Movie> found = movieRepository.findByTitle(TEST_FILE_NAME);

        // then
        assertThat("Movie is not found", found.isPresent());
    }
}
