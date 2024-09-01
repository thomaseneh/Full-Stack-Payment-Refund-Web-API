FROM eclipse-temurin:17-jdk-alpine AS builder
RUN apk update && apk add maven
WORKDIR /app
COPY pom.xml /app/pom.xml
COPY src /app/src
RUN mvn clean package -DskipTests

FROM gcr.io/distroless/java17-debian11
WORKDIR /app
COPY --from=builder /app/target/refundWebAPI-Server-0.0.1-SNAPSHOT.jar /app/refundWebAPI-Server-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD [ "/app/refundWebAPI-Server-0.0.1-SNAPSHOT.jar" ]
