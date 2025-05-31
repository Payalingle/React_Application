pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Payalingle/React_Application.git'
        IMAGE_NAME = 'react-application'
        AWS_REGION = 'us-east-1' // Change as needed
        ECR_URL = "<your_aws_account_id>.dkr.ecr.${AWS_REGION}.amazonaws.com/${IMAGE_NAME}"
        SONARQUBE_ENV = 'SonarQube' // Jenkins SonarQube scanner name
    }

    stages {

        stage('Checkout Code') {
            steps {
                git credentialsId: 'your-github-creds-id', url: "${REPO_URL"
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
                SONAR_TOKEN = credentials('sonarqube-token')
            }
            steps {
                withSonarQubeEnv("${SONARQUBE_ENV}") {
                    sh '''
                    sonar-scanner \
                      -Dsonar.projectKey=ReactApp \
                      -Dsonar.sources=. \
                      -Dsonar.host.url=http://<your-sonarqube-server>:9000 \
                      -Dsonar.login=$SONAR_TOKEN
                    '''
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
                trivy image --exit-code 1 --severity HIGH,CRITICAL ${IMAGE_NAME}:latest || true
                '''
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

    post {
        failure {
            mail to: 'you@example.com',
                 subject: "Jenkins Pipeline Failed",
                 body: "Pipeline failed at ${env.STAGE_NAME}"
        }
    }
}
