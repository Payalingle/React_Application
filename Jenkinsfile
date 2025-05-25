pipeline {
  agent any

  environment {
    AWS_REGION = 'us-east-2'
    ECR_REPO = '561410231694.dkr.ecr.us-east-2.amazonaws.com/react-app'
    IMAGE_TAG = 'latest'
  }

  tools {
    nodejs "NodeJS"  // Define this in Jenkins global tool config
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/Payalingle/React_Application.git'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('SonarQube') {
          sh 'npm install'
          sh 'sonar-scanner -Dsonar.projectKey=react-app -Dsonar.sources=src'
        }
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t react-app .'
        sh "docker tag react-app:latest ${ECR_REPO}:${IMAGE_TAG}"
      }
    }

    stage('Push to ECR') {
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-creds']]) {
          sh """
            aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REPO
            docker push $ECR_REPO:$IMAGE_TAG
          """
        }
      }
    }

    stage('Deploy to EKS') {
      steps {
        sh 'aws eks update-kubeconfig --region us-east-2 --name react-cluster'
        sh 'kubectl apply -f deployment.yaml'
      }
    }
  }
}
