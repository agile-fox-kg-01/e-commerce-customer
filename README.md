# e-commerce-customer

  Deploy Here:

[e-commerce-customer](https://ecomm-customer-sandi.web.app/)

# ClientSide Routes
----
  **Home**
----
* **URL**

  /

----
  **Login**
----
* **URL**

  /login

----
  **Register Customer**
----
* **URL**

  /register

----
  **Register Admin**
----
* **URL**

  /register/admin

----
  **Single Product**
----
* **URL**

  /product/:id

----
  **Cart**
----
* **URL**

  /cart

----
  **Transaction**
----
* **URL**

  /transaction

## NEW API UPDATE Documentation

----
  **Add to Cart**
----
  add product to cart

* **URL**

  /addToCart/:id

* **Method:**

  `POST`

* **Request Headers**
  | key | value | required |
  | :---: | :---: | :---: |
  | token | <USER_TOKEN> | true |

* **URL Params**
  | key | value | required |
  | :---: | :---: | :---: |
  | id | <Product_id> | true |

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:**
    ```json
    {
        "id": 1,
        "UserId": 1,
        "ProductId": 1,
        "updatedAt": "2020-07-29T19:52:49.165Z",
        "createdAt": "2020-07-29T19:52:49.165Z"
    }
    ```
----
  **Get All User Carts**
----
  browse all item in user carts

* **URL**

  /carts

* **Method:**

  `GET`

* **Request Headers**
  | key | value | required |
  | :---: | :---: | :---: |
  | token | <USER_TOKEN> | true |

* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
    [
        {
            "id": 1,
            "ProductId": 1,
            "UserId": 1,
            "createdAt": "2020-07-29T19:52:49.165Z",
            "updatedAt": "2020-07-29T19:52:49.165Z",
            "Product": {
                "id": 1,
                "name": "laptop",
                "image_url": "https://www.notebookcheck.net/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG",
                "price": 10000,
                "stock": 5,
                "createdAt": "2020-07-29T19:52:10.435Z",
                "updatedAt": "2020-07-29T19:52:10.435Z"
            }
        }
    ]
    ```
----
  **Delete Cart Item**
----
  Delete item's in user cart

* **URL**

  /carts/delete/:id

* **Method:**

  `DELETE`

* **Request Headers**
  | key | value | required |
  | :---: | :---: | :---: |
  | token | <USER_TOKEN> | true |

* **URL Params**
  | key | value | required |
  | :---: | :---: | :---: |
  | id | <Cart_id> | true |

* **Data Params**

  None

* **Success Response:**
  * **Code:** 200 OK <br />
    **Content:**
    ```json
    {
        "message": "Successfully delete item in your cart"
    }
    ```
----
  **Checkout process**
----
  if checkout run update product stock or delete product if stock 1, then clear all cart item
  and create data to table transaction

* **URL**

  /checkout

* **Method:**

  `POST`

* **Request Headers**
  | key | value | required |
  | :---: | :---: | :---: |
  | token | <USER_TOKEN> | true |

* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:**
    ```json
    {
        "id": 1,
        "email": "customer@user.com",
        "detail": "product: laptop3 - Rp.3,849,000, product: laptop4 - Rp.2,330,000",
        "total": 6179000,
        "UserId": 1,
        "updatedAt": "2020-07-29T20:02:24.815Z",
        "createdAt": "2020-07-29T20:02:24.815Z"
    }
    ```
----
  **Browse Transaction Data**
----
  see all user transactions

* **URL**

  /transactions

* **Method:**

  `GET`

* **Request Headers**
  | key | value | required |
  | :---: | :---: | :---: |
  | token | <USER_TOKEN> | true |

* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
    [
        {
            "id": 1,
            "email": "customer@user.com",
            "detail": "product: laptop3 - Rp.3,849,000, product: laptop4 - Rp.2,330,000",
            "total": 6179000,
            "createdAt": "2020-07-29T20:02:24.815Z"
        }
    ]
    ```
----
  **Delete Transaction Data**
----
  Delete selected user transaction data

* **URL**

  /transactions/delete/:id

* **Method:**

  `POST`

* **Request Headers**
  | key | value | required |
  | :---: | :---: | :---: |
  | token | <USER_TOKEN> | true |

* **URL Params**
  | key | value | required |
  | :---: | :---: | :---: |
  | id | <Transaction_id> | true |

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
    {
        "message": "Successfully delete your selected transaction history"
    }
    ```
