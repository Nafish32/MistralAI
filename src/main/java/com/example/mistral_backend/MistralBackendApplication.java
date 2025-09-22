package com.example.mistral_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.ai.mistralai.MistralAiChatModel;

@SpringBootApplication
public class MistralBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(MistralBackendApplication.class, args);
    }
}
