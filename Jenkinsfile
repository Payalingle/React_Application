pipeline {
    agent any

    environment {
        SONARQUBE_SERVER = 'SonarQube'  // Matches your Jenkins SonarQube config name
        DOCKER_IMAGE = 'payalingle/React_Application'   // Corrected to your DockerHub repo
    }
   tools {
        // Ensure 'NodeJS' is the name configured in Jenkins Global Tool Configuration
        nodejs 'NodeJS'
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Verify Node Version') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github-creds', url: 'https://github.com/Payalingle/React_Application.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_AUTH_TOKEN')]) {
                    withSonarQubeEnv("${SONARQUBE_SERVER}") {
                        sh 'npx sonar-scanner ' +
                           '-Dsonar.projectKey=static-react-app ' +
                           '-Dsonar.sources=. ' +
                           '-Dsonar.host.url=http://13.235.94.54:9000 ' +
                           '-Dsonar.login=$SONAR_AUTH_TOKEN'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:${BUILD_NUMBER}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                        sh "docker push ${DOCKER_IMAGE}:${BUILD_NUMBER}"
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}

