# tech used

  -  Node js  8.11
  -  npm  3.6
  -  npm  6.11
  -  Mongo  3.6
  -  Angualr   7


##  How to run  backend server
  - Downlaod zip or Clone project
  - navigate to folder
  - cd web_api
  - npm start

##  How to run  front end 
  - Downlaod zip or Clone project
  - navigate to folder
  - cd frontEnd
  - npm install
  - ng serve

#### API Endpoint
- http://localhost:5000/api/v1/user/register
- Method - post 
- Description - Api for register user
- json 
```
{
     
     "name" : "NewEntry",
	   "email" : "New",
	   "city" : "pune",
	   "state" : "maharastra"
}
```



- http://localhost:5000/api/v1/user/getall
- Method - get 
- Description - Api for get all user from db.




- http://localhost:5000/api/v1/user/edit
- Method - post 
- Description - Api for update user
- json 
```{

   "id" : "5d78980135e14938b83dc287",
	 "name": "Chetan Taydae",
   "email": "cchetantayade@gmail.com",
   "city": "Chinchwad"
   
}
```


- http://localhost:5000/api/v1/user/delete
- Method - post
- Description - Api for delete user using id
```
{
	"Id" : "5d78980135e14938b83dc287"
}
```


