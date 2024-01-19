package com.toprefunder.refund.refundWebAPIServer.configugation;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        CsrfTokenRequestAttributeHandler requestAttributeHandler = new CsrfTokenRequestAttributeHandler();
        requestAttributeHandler.setCsrfRequestAttributeName("_csrf");
        http
                .csrf(csrf -> csrf
                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                        .csrfTokenRequestHandler(requestAttributeHandler)
                        .ignoringRequestMatchers("/api/user/register", "/api/admin/register","/contact"))
                        .addFilterAfter(new CsrfCookieFilter(), BasicAuthenticationFilter.class)

                .securityContext(secContext -> secContext
                        .requireExplicitSave(false))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated()
//                        .requestMatchers("/api/user/register","/api/admin/register").permitAll()
//                        .requestMatchers("/api/user/login","/api/user/update/{id}", "/login").hasRole("USER")
//                        .requestMatchers("/delete/{id}","/api/allusers", "/admin/update/{id}", "/admin/login").hasRole("ADMIN")
                )
                .httpBasic(Customizer.withDefaults())
                .oauth2Login(oauth2 ->{

        })
//                .defaultSuccessUrl("http://localhost:8080/api/allusers", true)
//                .formLogin(Customizer.withDefaults())
                .logout(logout -> logout.logoutSuccessUrl("/").permitAll());
        return http.build();
    }

   @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:5173"));
        configuration.setAllowedMethods(List.of("*"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}
