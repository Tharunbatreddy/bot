# Use an official Maven image to build the Java application
FROM maven:3.9.6-eclipse-temurin-21 AS build


# Set working directory
WORKDIR /app

# Copy the pom.xml and download dependencies
COPY pom.xml ./
RUN mvn dependency:resolve

# Copy the rest of the application code and resources
COPY . .

# Package the application
RUN mvn clean package -DskipTests

# Use an OpenJDK image to run the application
FROM eclipse-temurin:21-jre-alpine

# Set working directory
WORKDIR /app

# Copy the packaged jar file from the build stage
COPY --from=build /app/target/ticketbooking-0.0.1-SNAPSHOT.jar app.jar



# Expose port 8080
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
