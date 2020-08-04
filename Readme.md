Delilah Resto 
Acamica
Author: Gastón Medici

Instructions for initializing the API 

You need to have installed Xampp, Node js and Postman and Code Editor in order to start the server. 

1 - Clone the proyect from the Github Repo to your Computer. (You'll need to open the project with your Code Editor )

2 - Run Xampp and start both Apache Server and Mysql.

3 - Go to Admin, in the Mysql cell and open PhPmyAdmin

4 - In PhpmyAdmin, Create a new Database named "delilah". The name of the user should be 'root'.

5 - Open the terminal, go to your folder directory and write 'npm i' to install all dependencies in your project.

6 - In the terminal, write 'node create-tables.js' to install the database and fill it up with some examples. 

7 - Then you should run the command 'nodemon index.js' to start your server.

8 - After the server was set up you can do the requests with postman. There is a Postman collection that you can import with all the requests available.

9 - You can find the API Documentation in 'https://app.swaggerhub.com/apis/gmedici/Delilah/1.0.0#free' or in the file delilah.yaml. You can also find more examples of requests in Examples.txt