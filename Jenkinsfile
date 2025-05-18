pipeline {
  agent any

  environment {
    SONAR_HOST_URL = 'http://13.235.94.54:9000'
    IMAGE_NAME = 'your-dockerhub-username/react-app'  // <--- change this!
  }

  tools {
    nodejs 'Node18'   // Set this to match your Node version configured in Jenkins
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main',
            credentialsId: 'github-creds',   // <-- Make sure this is created in Jenkins
            url: 'https://github.com/Payalingle/React_Application.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('SonarQube Scan') {
      environment {
        // SONAR_TOKEN is injected here
      }
      steps {
        withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
          withSonarQubeEnv('SonarQube') {
            sh """
              npx sonar-scanner \
                -Dsonar.projectKey=react_app \
                -Dsonar.sources=. \
                -Dsonar.host.url=$SONAR_HOST_URL \
                -Dsonar.login=$SONAR_TOKEN
            """
          }
        }
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME:latest .'
      }
    }

    stage('Trivy Scan') {
    steps {
        sh '''
            export TRIVY_CACHE_DIR=/var/lib/jenkins/.cache/trivy
            mkdir -p $TRIVY_CACHE_DIR
            trivy image --download-db-only
            trivy image --severity HIGH,CRITICAL yourdockerhubusername/react-app
        '''
    }
}
    }

    stage('Push to DockerHub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh """
            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
            docker push $IMAGE_NAME:latest
          """
        }
      }
    }

    stage('Deploy Container') {
      steps {
        sh """
          docker rm -f react_app || true
          docker run -d -p 3000:3000 --name react_app $IMAGE_NAME:latest
        """
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished.'
    }
    failure {
      echo 'Pipeline failed!'
    }
  }
}
