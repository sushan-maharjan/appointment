
Appointment Management System 

The main technologies I used in the project are Spring Boot, Hibernate ORM, Spring Data and MySQL (as database).
I have used jQuery plugins for date time picker.
 
To run the project please follow the following steps:
1)Clone the project from git or download as zip file and import.
2)Update maven
3)Inside src/main/resources the file application.properties has
spring.datasource.username=root
spring.datasource.password= 
Please change the credentials as per your database.
 
Comment out the ddl-auto line seen below after the first time you run the application
spring.jpa.hibernate.ddl-auto=create
 
5)Finally run project as Spring Boot App. 
  Type localhost:8080 in the browser to see the result 


