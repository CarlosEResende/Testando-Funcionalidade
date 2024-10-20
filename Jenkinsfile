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
        stage('Install Expo CLI and Ngrok') {
            steps {
                bat 'npm install -g expo-cli @expo/ngrok'
            }
        }
        stage('Build') {
            steps {
                bat 'npx expo start --tunnel'
            }
        }
    }
}
