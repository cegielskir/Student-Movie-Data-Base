node('docker') {
 
    stage 'Checkout'
        checkout scm
    stage 'Build'
        sh "docker-compose build"
  
    stage 'Tests'
        sh "docker-compose -f docker-compose.integration.yml up --force-recreate --abort-on-container-exit"
        sh "docker-compose -f docker-compose.integration.yml down -v"
}