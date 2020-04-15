# SpringBoot-Angular6-CRUD-Example
This Project helps you to understand how to integrate Angular project with Spring Boot and 
perform CRUD operations.

There are two methods by which we can integrate Angular with Spring Boot

Method 1: We run the Angular project on one server and Spring Project on another
          In Spring we use the annotation @CrossOrigin(origins = "http://localhost:5000")
          which allows the request from Angular Server 
          to run angular project on any port use command ng serve --port <Any Port>(e.g 5000)
          
 Method 2: Building the Angular Project using command
              ng build or ng build --prod
             This will generate all the files in dist folder.
             Just copy all the files from dist to Spring project's static package inside resource.
             In this scenario both project will run on same server.
             (If you face error just check whether all the js and css files are properly included in index.html)
