node('docker') {
 
    stage 'Checkout'
        checkout scm
    stage 'Build & UnitTest'
	    sh "cd app-server"
		sh "chmod a+x mvnw"
		sh "cd .."
        sh "docker-compose build"
 // 
 //   stage 'Integration Test'
  //      sh "docker-compose -f docker-compose.integration.yml up --force-recreate --abort-on-container-exit"
  //      sh "docker-compose -f docker-compose.integration.yml down -v"
}