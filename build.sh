#!/bin/bash
set -e

echo "Building Spring Boot application..."
cd akukoNkeNdu
mvn clean package -DskipTests
echo "Build completed successfully!" 