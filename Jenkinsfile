node('docker') {
 
    stage 'Checkout'
        checkout scm
    stage 'Build & UnitTest'
        sh "docker build -t app-server:B${BUILD_NUMBER} -f Dockerfile ."
        sh "docker build -t app-client:B${BUILD_NUMBER} -f Dockerfile ."
 // 
 //   stage 'Integration Test'
  //      sh "docker-compose -f docker-compose.integration.yml up --force-recreate --abort-on-container-exit"
  //      sh "docker-compose -f docker-compose.integration.yml down -v"
}