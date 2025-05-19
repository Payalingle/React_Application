pipeline {
    node('my-agent') {

    environment {
        GIT_CREDENTIALS_ID = 'github-creds'
        DOCKER_CREDENTIALS_ID = 'dockerhub-creds'
        IMAGE_NAME = 'yourdockerhubusername/react-app'
        SONAR_HOST_URL = 'http://your-ec2-ip:9000'
        SONAR_PROJECT_KEY = 'react_app'
        SONAR_TOKEN = credentials('sonar-token')  // Jenkins secret text
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: "${GIT_CREDENTIALS_ID}", url: 'https://github.com/Payalingle/React_Application.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh """
                        npx sonar-scanner \
                          -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
                          -Dsonar.sources=. \
                          -Dsonar.host.url=${SONAR_HOST_URL} \
                          -Dsonar.login=${SONAR_TOKEN}
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'trivy image --severity HIGH,CRITICAL ${IMAGE_NAME} || true'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker tag ${IMAGE_NAME} ${IMAGE_NAME}:latest
                        docker push ${IMAGE_NAME}:latest
                    """
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh """
                    docker rm -f react_container || true
                    docker run -d --name react_container -p 3000:3000 ${IMAGE_NAME}:latest
                """
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
    }
}
