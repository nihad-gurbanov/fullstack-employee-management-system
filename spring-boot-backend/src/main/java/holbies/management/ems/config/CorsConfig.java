//package holbies.management.ems.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class CorsConfig implements WebMvcConfigurer {
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/api/**")
//                .allowedOrigins("http://localhost:3000") // Specify the frontend URL
//                .allowedMethods("GET", "POST", "PUT", "DELETE")
//                .allowedHeaders("Authorization", "Cache-Control", "Content-Type", "Access-Control-Allow-Origin") // Specify headers
//                .exposedHeaders("Authorization")
//                .allowCredentials(true)
//                .maxAge(3600);
//    }
//}
