# NodeJSAPI
this is the basic API calls in NodeJS with Mongoose/ (MongoDB)


Link for API Calls:

URL: http://node-api-calls.herokuapp.com/api/users

<h2> Model used in this API Call:</h2>

{<br/>
    Name: String,<br/>
    Phone: Number,<br/>
    Email: String,<br/>
    Address: {<br/>
    &emsp;&emsp; Street: String,<br/>
      &emsp;&emsp;  Area: String,<br/>
        &emsp;&emsp;City: String,<br/>
       &emsp;&emsp; Pincode: Number<br/>
 &emsp;}<br/>
   }
   

<h4>GET REQUEST:</h4>

http://node-api-calls.herokuapp.com/api/users    Getting all Users


<h4>POST REQUEST:</h4>

http://node-api-calls.herokuapp.com/api/users  Passing the data in the form of json



<h4>PUT REQUEST:</h4>

http://node-api-calls.herokuapp.com/api/users   Passing the data in the form of json


<h4>DELETE REQUEST:</h4>

http://node-api-calls.herokuapp.com/api/users    Passing the data in the form of json
