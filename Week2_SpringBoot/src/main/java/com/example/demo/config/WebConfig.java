package com.example.demo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration

public class WebConfig {
//    @Value("${cors.allowedMethods}")
//    private String allowedMethods;
//
//    @Value("${cors.allowedHeaders}")
//    private String allowedHeaders;
//
//    @Value("${cors.corsConfiguration}")
//    private String corsConfiguration;
//
//    @Value("${cors.allowedOrigin}")
//    private String allowedOrigin;

    @Bean
    public WebMvcConfigurer corsConfig(){

        return new WebMvcConfigurer(){
            @Override
            public void addCorsMappings( CorsRegistry registry){
                registry.addMapping("/**").allowedOrigins(
                        "https://localhost:8000",
                        "http://localhost:8000"
                    )
                    .allowedMethods(
                        HttpMethod.GET.name(),
                        HttpMethod.POST.name(),
                        HttpMethod.PUT.name()
                    )
                    .allowedHeaders(
                            HttpHeaders.CONTENT_TYPE,
                            HttpHeaders.AUTHORIZATION
                    );
            }
        };
    }

}
