pipeline{
    agent any
    tools{
        jdk "JDK-17"
        maven "M3"
        // git "Git"
        nodejs "NodeJS"
        // npm "NPM"
    }
    stages{
        // stage('install dependencies'){
        //     steps{
        //         sh 'npm install'
        //     }
        // }
        stage('fetch'){
            steps{
                git 'https://github.com/thomaseneh/Full-Stack-Payment-Refund-Web-API-.git'
            }
        }
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
        stage('Message') {
            steps {
                echo 'This code does not contain unit tests!'
                echo 'You should look into it and modify.'
            }
            post {
                success {
                    echo 'build was successful, Archiving the artifacts'
                    archiveArtifacts artifacts: '**/*.war'
                }
            }
        }
    }
}
