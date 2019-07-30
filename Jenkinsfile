node('docker') {
 
    stage 'Checkout'
        checkout scm
    stage 'Build & UnitTest'
	    cd api
		sudo chmod a+x mvnw
		cd ..
        sh "docker-compose build"
 // 
 //   stage 'Integration Test'
  //      sh "docker-compose -f docker-compose.integration.yml up --force-recreate --abort-on-container-exit"
  //      sh "docker-compose -f docker-compose.integration.yml down -v"
}