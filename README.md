# E-Commerce-Customer

Deploy Here:

[Ecommerce/CMS-Server](https://ecommerce-cms-fd3f9.web.app/login)

## API Documentation

----
**Customer Register**
---
  
  * **URL**
   
   /customers/register

  * **Method**

    `POST`

  * **Request Headers**

    | key | value | required |
    | :--- | :---: | :---:|
    | Content-Type | application/x-www-form-urlencoded | false |

  * **URL Params**

    none

  * **Data Params**
    
    | key | value | required |
    | :--: | :--: | :--: |
    | fullname | fiahidris | true |
    | email | fiah@mail.com| true |
    | password | 12345 |true |

  * **Success Response**


    * **Code:** 201 OK <br />
    **Content:**
    ```json
      {
        "id": 19,
        "email": "g@mail.com"
      }
      ```
  * **Errors Response**

    * **Code:** 400 BAD REQUEST <br />
      **Content**
      ```json
      {
        "error": "email is taken, login or register with another email"
      }
      
      OR
      
      {
        "errors": [
            {
                "name": "Bad Request",
                "errors": "Email is required"
            }
        ]
      }
      ```
      
**Customer Login**
---
  
  * **URL**
   
   /customers/login

  * **Method**

    `POST`

  * **Request Headers**

    | key | value | required |
    | :--- | :---: | :---:|
    | Content-Type | application/x-www-form-urlencoded | false |

  * **URL Params**

    none

  * **Data Params**
    
    | key | value | required |
    | :--: | :--: | :--: |
    | email | fiah@mail.com| true |
    | password | 12345 |true |

  * **Success Response**


    * **Code:** 200 OK <br />
    **Content:**
    ```json
     {
      "token": "eyJhbGciOiJIUzI1NiJ9.YkBtYWlsLmNvbQ.CPjvf0HZvsxsX14ewPXIZ8-z9AeZAVxB_C-_Igw2bo0"
     }
      ```
  * **Errors Response**

    * **Code:** 400 BAD REQUEST <br />
      **Content**
      ```json
      {
       "error": "Email not found, please register!"
      }
      
      OR
      
      {
      "error": "Password is incorrect"
      }
      ```

**Customer Access Product By Category**
---

* **URL**

  /customers/category

* **Method**

  `POST`

* **Request Headers**

  | key | value | required |
  | :--- | :---: | :---:|
  | Content-Type | application/x-www-form-urlencoded | true |
  | access_token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cmZpYWhpZHJpczA5OEBnbWFpbC5jb20iLCJpYXQiOjE1OTQwNzg5NjV9.Q8JSD8HhZqRRjPFahSnqDYfjUIHvjMbaSWICxEk_Hv4 | true |

* **URL Params**

  none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | category | "clothes" | true |   

* **Success Response**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
     {
        "id": 12,
        "name": "Red Puma Jacket",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGpuArjxCtGiM6yUCRT_K6BLWJCcAppNuYRg&usqp=CAU",
        "price": 500000,
        "category": "clothes",
        "stock": 34,
        "UserId": 1,
        "createdAt": "2020-07-29T08:02:26.128Z",
        "updatedAt": "2020-07-29T17:20:26.431Z"
    },
    {
        "id": 11,
        "name": "Puma",
        "image_url": "https://i3.stycdn.net/images/2019/05/21/article/puma/kj3971401/puma-tyakasha-x-bomberjacke-schwarz-1430-zoom-0.jpg",
        "price": 450000,
        "category": "clothes",
        "stock": 46,
        "UserId": 1,
        "createdAt": "2020-07-29T08:01:29.301Z",
        "updatedAt": "2020-07-29T16:29:31.787Z"
    }
    ```

* **Error Response**

  * **Code:** 400 BAD REQUEST <br />
    **Content**
    ```json
     {
       "error": "Please login to continue"
     }         
    ```
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content**
    ```json
    {
        "status": 500,
        "error":"internal server error"
    }
    ```
**Customer Add Product To Carts**
---
* **URL**

  /customers/add

* **Method**

  `POST`

* **Request Headers**

  | key | value | required |
  | :--- | :---: | :---:|
  | Content-Type | application/x-www-form-urlencoded | true |
  | access_token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cmZpYWhpZHJpczA5OEBnbWFpbC5jb20iLCJpYXQiOjE1OTQwNzg5NjV9.Q8JSD8HhZqRRjPFahSnqDYfjUIHvjMbaSWICxEk_Hv4 | true |

* **URL Params**
  
  none
  
* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | productId | 18 | true |   
  | quantity | 2 | true |   

* **Success Response**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
     {
    "ProductId": 18,
    "quantity": 2,
    "price": 60000,
    "CustomerId": 2,
    "updatedAt": "2020-07-30T04:38:15.748Z",
    "createdAt": "2020-07-30T04:38:15.748Z"
    }
    ```

* **Error Response**

  * **Code:** 400 BAD REQUEST <br />
    **Content**
    ```json
     {
        "status": 400,
        "error":"Product Not Found"
    }
    ```
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content**
    ```json
    {
        "status": 500,
        "error":"internal server error"
    }
    ```

**Customer Request All Product On His Carts**
---
* **URL**

  /customers/carts

* **Method**

  `GET`

* **Request Headers**

  | key | value | required |
  | :--- | :---: | :---:|
  | Content-Type | application/x-www-form-urlencoded | true |
  | access_token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cmZpYWhpZHJpczA5OEBnbWFpbC5jb20iLCJpYXQiOjE1OTQwNzg5NjV9.Q8JSD8HhZqRRjPFahSnqDYfjUIHvjMbaSWICxEk_Hv4 | true |

* **URL Params**
  
  none
  
* **Data Params**
  
  none

* **Success Response**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
     {
    "ProductId": 18,
    "quantity": 2,
    "price": 60000,
    "CustomerId": 2,
    "updatedAt": "2020-07-30T04:38:15.748Z",
    "createdAt": "2020-07-30T04:38:15.748Z"
    }
    ```

* **Error Response**

  * **Code:** 400 BAD REQUEST <br />
    **Content**
    ```json
      {
       "error": "Please login to continue"
      }
    ```
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content**
    ```json
    {
        "status": 500,
        "error":"internal server error"
    }
    ```
    
**Customer Remove Product From Carts**
---
* **URL**

  /customers/carts/delete/:id

* **Method**

  `DELETE`

* **Request Headers**

  | key | value | required |
  | :--- | :---: | :---:|
  | Content-Type | application/x-www-form-urlencoded | true |
  | access_token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cmZpYWhpZHJpczA5OEBnbWFpbC5jb20iLCJpYXQiOjE1OTQwNzg5NjV9.Q8JSD8HhZqRRjPFahSnqDYfjUIHvjMbaSWICxEk_Hv4 | true |

* **URL Params**
    
   ```json
    {
      "id": 18
    }
  
* **Data Params**
     
     none
    
* **Success Response**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
      {
          "destroy": 1
      }
    ```

* **Error Response**

  * **Code:** 400 BAD REQUEST <br />
    **Content**
    ```json
      {
       "error": "Please login to continue"
      }
    ```
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content**
    ```json
    {
        "status": 500,
        "error":"internal server error"
    }
    ```   
     
**Customer Checking Out All Product From Carts**
---
* **URL**

  /customers/carts/checkout

* **Method**

  `DELETE`

* **Request Headers**

  | key | value | required |
  | :--- | :---: | :---:|
  | Content-Type | application/x-www-form-urlencoded | true |
  | access_token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cmZpYWhpZHJpczA5OEBnbWFpbC5jb20iLCJpYXQiOjE1OTQwNzg5NjV9.Q8JSD8HhZqRRjPFahSnqDYfjUIHvjMbaSWICxEk_Hv4 | true |

* **URL Params**
    
   none
  
* **Data Params**
     
    none
    
* **Success Response**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
      {
        "message": "Checkout success"
      }
    ```

* **Error Response**

  * **Code:** 400 BAD REQUEST <br />
    **Content**
    ```json
     {
       "name": "OutOfStock"
       "error": "Sorry, the stock for MoneyBox by Smiggle remain 28"
     }
    ```
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content**
    ```json
    {
        "status": 500,
        "error":"internal server error"
    }
    ```    
    
