package com.example.servingwebcontent;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import java.util.stream.Stream;

@SpringBootApplication
public class ServingWebContentApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServingWebContentApplication.class, args);
    }

    @Bean
    CommandLineRunner init(TodoRepository todoRepo) {
        return args -> {
            Stream.of("Description1", "Description2").forEach(description -> {
                Todo todo = new Todo(description, "exampleSummary");
                todoRepo.save(todo);
            });
            todoRepo.findAll().forEach(System.out::println);
        };
    }
}
