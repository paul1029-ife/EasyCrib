package com.easycrib;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.easycrib")
public class EasyCribApplication {
    public static void main(String[] args) {
        SpringApplication.run(EasyCribApplication.class, args);
    }
} 