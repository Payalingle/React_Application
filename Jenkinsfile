pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'
        ECR_REPO = 'react-app-repo'
        ECR_URI = '561410231694.dkr.ecr.us-east-1.amazonaws.com/react-app-repo'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Payalingle/React_Application.git'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('My SonarQube Server') {
                    sh '''
                    npm install
                    sonar-scanner \
                      -Dsonar.projectKey=ReactApp \
                      -Dsonar.sources=. \
                      -Dsonar.host.url=http://18.212.39.138:9000 \
                      -Dsonar.login=squ_3cf631f9aee94493eb3078e559e5d1e4ef7c7098
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $ECR_REPO .'
                }
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    sh '''
                    aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_URI
                    docker tag $ECR_REPO:latest $ECR_URI:latest
                    docker push $ECR_URI:latest
                    '''
                }
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
