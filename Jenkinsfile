pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clonar o repositório do GitHub
                git url: 'https://github.com/CarlosEResende/Testando-Funcionalidade.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Instalar as dependências do projeto
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Construir o aplicativo (iniciar a aplicação)
                sh 'npm start' // Para iniciar o seu app React Native
            }
        }
        stage('Deploy') {
            steps {
                // Defina aqui o que precisa para o deploy, por exemplo, subir para um servidor
                // Este é um exemplo fictício, ajuste conforme suas necessidades
                sh 'scp -r build/ user@server:/path/to/deploy/'
            }
        
    }
}
