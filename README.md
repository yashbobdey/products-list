# products-list
 How to start ?
   - Clone the repository in local code editor (ex: VS Code)
   - run the command "npm install"
   - The above command may take few minutes, after which you can launch the project using the command "npm start"
   - The project will open up on localhost:3000, but the home page will be empty.
   - Since we have two routes: /products & /products/productId, change the url from localhost:3000 to localhost:3000/products
   - You will be able to see products list displayed.

About the project:
   -As mentioned above the project has 2 routes: /products & /products/productId
   -/products page will display the list of products coming from the API response.
   -The number of products displayed on single page is limited to 10. Pagination is implemented at the bottom of the page to go through all the   
    products.
   -Once you click on any product, you will be directed to /product/productId route, where you will be able to see all the product information in 
    detail.
