pipeline {
    agent any

    environment {
        SONARQUBE = 'SonarQubeServer'
        SONAR_TOKEN = credentials('sonar-token')
        DOCKER_IMAGE = 'my-react-app'
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Payalingle/React_Application.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv("${SONARQUBE}") {
                    sh """
                        npx sonar-scanner \
                        -Dsonar.projectKey=react-app \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=$SONAR_HOST_URL \
                        -Dsonar.login=$SONAR_TOKEN
                    """
                }
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'trivy image --exit-code 0 --severity HIGH,CRITICAL $DOCKER_IMAGE'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:80 --name react_app_container $DOCKER_IMAGE'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}

