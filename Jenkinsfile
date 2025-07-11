pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Payalingle/React_Application.git'
        IMAGE_NAME = 'react-application'
        AWS_REGION = 'us-east-1'
        ECR_URL = "561410231694.dkr.ecr.us-east-1.amazonaws.com/react-application"
        SONARQUBE_ENV = 'SonarQube' // Must match name in Jenkins Global Configuration
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: "https://github.com/Payalingle/React_Application.git", credentialsId: 'github-creds'
            }
        }

        stage('Install Dependencies & Build') {
            steps {
                sh '''
                npm install
                npm run build
                '''
            }
        }

        stage('SonarQube Scan') {
            environment {
                SONAR_TOKEN = credentials('sonar-token')
            }
            steps {
                withSonarQubeEnv("${SONARQUBE_ENV}") {
                    script {
                        def scannerHome = tool name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                        sh """
                        ${scannerHome}/bin/sonar-scanner \
                          -Dsonar.projectKey=React_App \
                          -Dsonar.sources=. \
                          -Dsonar.host.url=http://3.90.64.21:9000 \
                          -Dsonar.login=${SONAR_TOKEN}
                        """
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Trivy Scan') {
            steps {
                sh '''
                trivy image --exit-code 1 --severity HIGH,CRITICAL ${IMAGE_NAME}:latest
                '''
                // You can add `|| true` above if you don't want the pipeline to fail on vulnerabilities.
            }
        }

        stage('Login to ECR & Push Image') {
            steps {
                sh '''
                aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_URL}
                docker tag ${IMAGE_NAME}:latest ${ECR_URL}:latest
                docker push ${ECR_URL}:latest
                '''
            }
        }

        stage('Deploy to EKS') {
            steps {
                sh '''
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                '''
            }
        }
    }
}
