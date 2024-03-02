# # Build stage
# FROM maven:latest As build
# WORKDIR /home/app
# # Copy only the POM file to leverage Docker cache
# COPY pom.xml .
# # # Copy the entire project and build it
# COPY src app/src
# RUN mvn clean package

# Production stage
FROM eclipse-temurin:17-jre

# create and set a working directory
WORKDIR /app

# cope the built file to the docker working directory
COPY ./target/*.jar app.jar

# expose the port
EXPOSE 8081

# command to run the application
CMD [ "java", "-jar", "app.jar"]