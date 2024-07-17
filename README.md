## Next Dependency Injection

This is a [Next.js](https://nextjs.org/) project created to validate how we can create a NextJs application using Clean Architecture. 

### Folder Structure

```
src
├── app
│   └── user
├── data
│   ├── protocols
│   └── usecases
├── domain
│   ├── models
│   └── usecases
├── infra
│   ├── http
│   └── repository
└── main
    └── factories
```

- app: NextJs implementation details
- data: Implementation of business logic
- domain: Definition of business logic
- infra: Implementation of outside details like database and HTTP
- main: putting the pieces together and creating a service locator to use the dependency injection in NextJs

### Dependency Injection

The service locator will be the point of connection between the Next Application and our business logic. It uses static methods and variables to maintain the references of our use cases. 

![image](https://github.com/user-attachments/assets/b111f664-6460-4dd9-9e55-00c2388c5a6d)


This is an example of how we can create an instance of a use case and add it to our locator. 
![image](https://github.com/user-attachments/assets/951a717d-7128-402c-a7b6-b5546b1c2c37)

Now, on our NextJs pages, we can get the instance of a use case by calling our locator. But the good thing about it is that we get just the reference of the class, not accessing its implementation details. 
![image](https://github.com/user-attachments/assets/d33443e5-5d5c-45a1-bc9a-bc01de27ec17)




## Running the project

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
