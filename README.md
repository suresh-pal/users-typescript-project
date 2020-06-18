# Getting Started

### Project Description
This project depends suresh-pal/ornl-spring-rest-api project to be running. This project calls the microservices hosted by the suresh-pal/ornl-spring-rest-api application. This project uses http://localhost:8080/api/users and http://localhost:8080/api/users/{userId} microservices and displays the results on the console based on the number of command line parameters passed.

### Technology Demonstrated
This project is a typescript application which is javascript project that is essential to understand as typescripts are used in Angular javascript framework. 

### User Testing
The instructions below are currently provided for running this application on Windows environment. To test this application, the assumption is that the user has the below:

1) Windows PC
2) Install node and typescript compiler using npm.
3) Git Bash or Windows PowerShell that has Git installed. Git bash can be installed from https://gitforwindows.org/. Open command line git and clone the project from GitHub using the below commands

     **$mkdir sureshtscapp**

     **$cd sureshtscapp**

     **$git clone https://github.com/suresh-pal/users-typescript-project.git**

     **cd users-typescript-project**


     To install the dependencies and start the application run the below commands from C:..\sureshtscapp\users-typescript-project> folder level.
     
     **npm install**
    
     **npm start**
     The output of the above command will give the below results
     
     [
      User {
        userid: 'BILLINGSJJ',
        firstname: 'Jay',
        lastname: 'Billings',
        email: 'billingsjj@ornl.gov'
      },
      User {
        userid: 'CARTERKA',
        firstname: 'Kate',
        lastname: 'Carter',
        email: 'carterka@ornl.gov'
      }
    ]
    You can enter user ID as the 3rd command line argument to get specific user information..
    Example: npm start billingsjj
    
    **npm start billingsjj**
    
    The output of the above command will log the below on the console
    
    User {
      userid: 'BILLINGSJJ',
      firstname: 'Jay',
      lastname: 'Billings',
      email: 'billingsjj@ornl.gov'
    }