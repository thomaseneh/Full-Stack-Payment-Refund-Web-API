pipeline{
    agent any
    tools{
        jdk "JDK-17"
        maven "M3"
        git "Git"
    }
    environment{
        registry = "tomcoder/toprefunder"
        registryCredential = "dockerhub"
    }
    stages{
        stage('fetch'){
            steps{
                git branch: 'main', url: 'https://github.com/thomaseneh/Full-Stack-Payment-Refund-Web-API-.git'
            }
        }
        stage('build backend'){
            steps{
                dir('Server'){
                  bat 'mvn clean install'
                // sh 'mvn clean package'
                // sh 'npm run build'  
                }
            }
        }
        stage('build frontend'){
            steps{
                dir('UI'){
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }
        // stage('Unit Test'){
        //     steps{
        //         bat 'mvn test'
        //         // sh 'mvn test'
        //         // sh 'npm test'
        //     }
        // }
        // stage('Integration Test'){
        //     steps{
        //         bat 'mvn verify DskipUnitTests'
        //         // sh 'mvn verify DskipUnitTests'
        //         // sh 'npm verify DskipUnitTest'
        //     }
        // }
        // stage('CheckStyle Analysis backend'){
        //     steps{
        //        dir('UI'){
        //             bat 'mvn checkstyle:checkstyle'
        //         // sh 'mvn checkstyle:checkstyle'
        //        }
        //     }
        //     post{
        //         success{
        //             echo 'Generated Analysis Result'
        //         }
        //     }
        // }
        // stage('CheckStyle Analysis frontend'){
        //     steps{
        //         dir('UI'){
        //             script{
        //                 bat 'npm run checkstyle'
        //                 // sh 'mvn checkstyle:checkstyle'
        //             }
        //         }
        //         post{
        //             success{
        //                 echo 'Generated Analysis Result'
        //             }
        //         }
        //     }
        // }
        stage('SonarQube analysis') {
            environment{
                scannerHome = tool 'sonarQubeScanner'
            }
            steps{
                dir('UI'){
                    withSonarQubeEnv('sonarScanner'){
                        bat """\"${scannerHome}\\bin\\sonar-scanner\" -Dsonar.projectKey=refundAPI \
                        -Dsonar.projectName=Full-Stack-Payment-Refund-Web-API-frontend \"""
                        // sh ''' ${scannerHome}/bin/sonar-scanner -Dsonar.projectKey = refundAPI \
                        // -Dsonar.projectName = Full-Stack-Payment-Refund-Web-API- '''
                        // bat 'mvn sonar:sonar'
                        // sh 'mvn sonar:sonar'
                }
            }
        }
    }
        stage('Quality Gate') {
            steps {
                script{
                    timeout(time: 10, unit: 'MINUTES') {
                        waitForQualityGate abortPipeline: true
                    }
                }
            }
        }
        stage('build dockerImages'){
            steps{
                script{
                    images = docker.build registry + ":$BUILD_ID"
                }
            }
        }
        stage('upload'){
            steps{
                script{
                    docker.withRegistry('', registryCredential){
                        images.push("$BUILD_ID")
                        images.push("latest")
                    }
                }
            }
        }
        stage('remove unused images'){
            steps{
                bat 'docker rmi $registry:$BUILD_ID'
                // sh 'docker rmi $registry:$BUILD_ID'
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
