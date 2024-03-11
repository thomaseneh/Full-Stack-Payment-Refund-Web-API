pipeline{
    agent any
    // tools{
    //     jdk "JDK-17"
    //     maven "M3"
    //     // git "Git"
    //     npm "NPM"
    // }
    environment{
        registry = "tomcoder/toprefunder"
        registryCredential = "dockerhub"
    }
    stages{
        // stage('install dependencies'){
        //     steps{
        //         sh 'npm install DskipTests'
        //     }
        // }
        // stage('fetch'){
        //     steps{
        //         git https://github.com/thomaseneh/Full-Stack-Payment-Refund-Web-API-.git'
        //     }
        // }
        stage('build'){
            steps{
                sh 'mvn install -DskipTests'
                // sh 'npm run build'
            }
        }
        stage('Unit Test'){
            steps{
                sh 'mvn test'
                // sh 'npm test'
            }
        }
        stage('Integration Test'){
            steps{
                sh 'mvn verify DskipUnitTests'
                // sh 'npm verify DskipUnitTest'
            }
        }
        stage('CheckStyle Analysis'){
            steps{
                sh 'mvn checkstyle:checkstyle'
            }
            post{
                success{
                    echo 'Generated Analysis Result'
                }
            }
        }
        stage('SonarQube analysis') {
            steps{
                sh 'mvn sonar:sonar'
            }
        }
        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    def qg = waitForQualityGate()
                    if (qg.status != 'OK') {
                        error "Pipeline aborted due to quality gate failure: ${qg.status}"
                    }
                }
            }
        }
        stage('build'){
            steps{
                script{
                    images = docker.build registry + ":$BUILD_ID"
                }
            }
        }
        stage('upload'){
            steps{
                script{
                    docker.withRegistery('', registryCredential){
                        images.push("$BUILD_ID")
                        images.push("latest")
                    }
                }
            }
        }
        stage('remove unused images'){
            steps{
                sh 'docker rmi $registry:$BUILD_ID'
            }
        }
        stage('Message') {
            steps {
                echo 'This code does not contain unit tests!'
                echo 'You should look into it and modify.'
            }
            post {
                success {
                    echo 'build was successful, Archiving the artifacts'
                    archiveArtifacts artifacts: '**/target/*.war'
                }
            }
        }
    }
}
