# Wearable Device Web Server API
The web server consumes events sent from a wearable device and displays them on a web dashboard in real time.

<img width="994" alt="Main Dashboard View" src="https://user-images.githubusercontent.com/58123610/235983392-960b3312-bbc9-4c18-8abb-cc96c8aae422.png">

<img width="1104" alt="Extended Data View" src="https://user-images.githubusercontent.com/58123610/235982539-4a8326e3-76dc-4b9b-85e6-b40ee60e1fdd.png">


# Objects

## User Object

```jsx
{
  "id" : "tt1123456"
  "name": "name"
  "gender": "male|female|other",
  "dateOfBirth": "YYYY-MM-DD",
  "height": 123,
  "weight": 123,
  "device": "deviceId"
}

```

- **id:** unique identifier for the user, type string
- **name:** name of the user, type string
- **gender:** gender of the user, type string
- **dateOfBirth:** date of birth YYYY-MM-DD, type string
- **height:** height of user in inches, type number
- **weight:** weight of user in pounds, type number
- ****************device:**************** id of device object paired to user account, type string

## Device Object

```jsx
{
  "id" : "tt1123456"
  "name": "Galaxy Smart Watch",
  "status": "online|offline",
  "battery": 60,
  "lastCharged": "1669671581"
}

```

- **id:** unique identifier for the device, type string
- **name:** name of device, type string
- **status:** device internet connection status, type string
- **battery:** battery percentage (1-100), type number
- **lastCharged:** unix timestamp of when device was last charged, type number

# RESTful Design

### **GET** /api/users/:id

- **Details**
    
    **HTTP Method:** 
    
    - GET
    
    **Description:** 
    
    - Gets profile of user with given id
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Response Body Data:** 
    
    ```json
    {
        "success": true,
        "data": {
            "_id": "638d2b473cb2adbbd2c50804",
            "name": "name",
            "gender": "male",
            "dateOfBirth": "1999-10-12",
            "height": 123,
            "weight": 123,
            "bloodPressure": [],
            "bodyTemperature": [],
            "caloriesBurned": [],
            "heartRate": [
                {
                    "timestamp": "2022-12-03T20:14:50.000Z",
                    "heartRate": 33,
                    "_id": "638d2c150d450e19badf7556",
                    "createdAt": "2022-12-04T23:24:05.426Z",
                    "updatedAt": "2022-12-04T23:24:05.426Z"
                }
            ],
            "sleepTime": [],
            "stepCount": [],
            "createdAt": "2022-12-04T23:20:39.043Z",
            "updatedAt": "2022-12-04T23:24:05.426Z",
            "__v": 0
        }
    }
    ```
    

### **GET** /api/users

- **Details**
    
    **HTTP Method:** 
    
    - GET
    
    **Description:** 
    
    - Gets all users
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Response Body Data:** 
    
    ```
    {
        "success": true,
        "data": [
            {
                "_id": "638d2b473cb2adbbd2c50804",
                "name": "name",
                "gender": "male",
                "dateOfBirth": "1999-10-12",
                "height": 123,
                "weight": 123,
                "bloodPressure": [],
                "bodyTemperature": [],
                "caloriesBurned": [],
                "heartRate": [
                    {
                        "timestamp": "2022-12-03T20:14:50.000Z",
                        "heartRate": 33,
                        "_id": "638d2c150d450e19badf7556",
                        "createdAt": "2022-12-04T23:24:05.426Z",
                        "updatedAt": "2022-12-04T23:24:05.426Z"
                    }
                ],
                "sleepTime": [],
                "stepCount": [],
                "createdAt": "2022-12-04T23:20:39.043Z",
                "updatedAt": "2022-12-04T23:24:05.426Z",
                "__v": 0
            },
            {
                "_id": "638d31b91127e421c1f4c9ff",
                "name": "name",
                "gender": "male",
                "dateOfBirth": "1999-10-12",
                "height": 123,
                "weight": 123,
                "bloodPressure": [],
                "bodyTemperature": [],
                "caloriesBurned": [],
                "heartRate": [],
                "sleepTime": [],
                "stepCount": [],
                "createdAt": "2022-12-04T23:48:09.948Z",
                "updatedAt": "2022-12-04T23:48:09.948Z",
                "__v": 0
            }
        ]
    }
    ```
    
    ```json
    {
      "gender": "male|female|other",
      "dateOfBirth": "YYYY-MM-DD",
      "height": 123,
      "weight": 123
    }
    ```
    

### **GET** /api/user/:id/biometrics/heart-rate

- **Details**
    
    **HTTP Method:** 
    
    - GET
    
    **Description:** 
    
    - Gets heart rate data points for user with given id sorted by timestamp in descending order
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - limit: Number (limits results)
    
    **Expected Response Body Data:** 
    
    ```json
    {
        "success": true,
        "data": [
            {
                "timestamp": "2022-12-03T20:14:50.000Z",
                "heartRate": 33,
                "_id": "638d2c150d450e19badf7556",
                "createdAt": "2022-12-04T23:24:05.426Z",
                "updatedAt": "2022-12-04T23:24:05.426Z"
            },
            {
                "timestamp": "2022-12-03T20:13:10.000Z",
                "heartRate": 70,
                "_id": "638d2b6c3cb2adbbd2c5080e",
                "createdAt": "2022-12-04T23:21:16.615Z",
                "updatedAt": "2022-12-04T23:21:16.615Z"
            }
        ]
    }
    ```
    

### **GET** /api/users/:id/biometrics/blood-pressure

- **Details**
    
    **HTTP Method:** 
    
    - GET
    
    **Description:** 
    
    - Gets blood pressure data points for user with given id sorted by timestamp in descending order
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "timestamp": 1669671581,
      "bloodPressureSystolic": 110,
      "bloodPressureDiastolic": 75
    }
    ```
    

### **GET** /api/users/:id/biometrics/body-temperature

- **Details**
    
    **HTTP Method:** 
    
    - POST
    
    **Description:** 
    
    - Creates new body temperature data point for user with given id
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "timestamp": 1669671581,
      "bodyTemperature": 98
    }
    ```
    

### **GET** /api/users/:id/biometrics/step-count

- **Details**
    
    **HTTP Method:** 
    
    - POST
    
    **Description:** 
    
    - Creates new step count data point for user with given id
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "timestamp": 1669671581,
      "stepCount": 750
    }
    ```
    

### **GET** /api/users/:id/biometrics/calories-burned

- **Details**
    
    **HTTP Method:** 
    
    - POST
    
    **Description:** 
    
    - Creates new calories burned data point for user with given id
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "timestamp": 1669671581,
      "caloriesBurned": 123
    }
    ```
    

### **GET** /api/users/:id/biometrics/sleep-time

- **Details**
    
    **HTTP Method:** 
    
    - POST
    
    **Description:** 
    
    - Creates new sleep data point for user with given id
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "timestamp": 1669671581,
      "sleepTime": (time slept in minutes)
    }
    ```
    

### **POST** /api/users

- **Details**
    
    **HTTP Method:** 
    
    - POST
    
    **Description:** 
    
    - Creates a new user
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "gender": "male|female|other",
      "dateOfBirth": "YYYY-MM-DD",
      "height": 123,
      "weight": 123
    }
    ```
    

### **POST** /api/users/:id/biometrics/heart-rate

- **Details**
    
    **HTTP Method:** 
    
    - POST
    
    **Description:** 
    
    - Creates new heart rate data point for user with given id
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "timestamp": 1669671581,
      "heartRate": 75
    }
    ```
    

### **POST** /api/users/:id/biometrics/blood-pressure

- **Details**
    
    **HTTP Method:** 
    
    - POST
    
    **Description:** 
    
    - Creates new blood pressure data point for user with given id
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "timestamp": 1669671581,
      "bloodPressureSystolic": 110,
      "bloodPressureDiastolic": 75
    }
    ```
    

### **POST** /api/users/:id/biometrics/body-temperature

- **Details**
    
    **HTTP Method:** 
    
    - POST
    
    **Description:** 
    
    - Creates new body temperature data point for user with given id
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "timestamp": 1669671581,
      "bodyTemperature": 98
    }
    ```
    

### **POST** /api/users/:id/biometrics/step-count

- **Details**
    
    **HTTP Method:** 
    
    - POST
    
    **Description:** 
    
    - Creates new step count data point for user with given id
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "timestamp": 1669671581,
      "stepCount": 750
    }
    ```
    

### **POST** /api/users/:id/biometrics/gps-location

- **Details**
    
    **HTTP Method:** 
    
    - POST
    
    **Description:** 
    
    - Creates new gps data point for user with given id
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "timestamp": 1669671581,
      "longitude": 500,
      "latitude": 750,
    }
    ```
    

### **POST** /api/users/:id/biometrics/calories-burned

- **Details**
    
    **HTTP Method:** 
    
    - POST
    
    **Description:** 
    
    - Creates new calories burned data point for user with given id
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "timestamp": 1669671581,
      "caloriesBurned": 123
    }
    ```
    

### **POST** /api/users/:id/biometrics/sleep-time

- **Details**
    
    **HTTP Method:** 
    
    - POST
    
    **Description:** 
    
    - Creates new sleep data point for user with given id
    
    **URL Parameters:** 
    
    - None
    
    **Supported Query Parameters:** 
    
    - None
    
    **Expected Request Body Data:** 
    
    ```json
    {
      "timestamp": 1669671581,
      "sleepTime": (time slept in minutes)
    }
    ```
