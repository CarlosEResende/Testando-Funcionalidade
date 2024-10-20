pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/CarlosEResende/Testando-Funcionalidade.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Install Expo CLI') {
            steps {
                bat 'npm install -g expo-cli'
            }
        }
        stage('Build') {
            steps {
                bat 'expo start --tunnel'
            }
        }
    }
}
