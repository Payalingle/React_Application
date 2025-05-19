pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('sonar-token')
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: 'github-creds', url: 'https://github.com/Payalingle/React_Application.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'npx sonar-scanner -Dsonar.projectKey=react-app -Dsonar.sources=. -Dsonar.host.url=$SONAR_HOST_URL -Dsonar.login=$SONAR_TOKEN'
                }
            }
        }

        stage('Trivy Scan') {
            steps {
                sh '''
                docker build -t react-app-temp .
                trivy image --exit-code 0 --severity HIGH,CRITICAL react-app-temp
                '''
            }
        }

        stage('Docker Build and Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh '''
                    docker build -t $USERNAME/react-app:latest .
                    echo $PASSWORD | docker login -u $USERNAME --password-stdin
                    docker push $USERNAME/react-app:latest
                    '''
                }
            }
        }

        stage('Clean Up') {
            steps {
                sh 'docker rmi react-app-temp || true'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
    }
}
