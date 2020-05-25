
<p align = "center"><img src ="Deno.png" width="100" height="100">
</p>

# Deno Rest API


### Technologies Used

- Deno
- OAK
- JavaScript
- UUID
---

> GET  To get single product 

> GET  To get all Products

> POST To create a new product

> PUT  To Update an existing Product

> Delete To delete the single product

---

**Command To Run:-** 

>deno run --allow-net server.js

_Routes :-_

>> #### To get All products :- localhost:3003/new/products

>> #### To Create New Product :- localhost:3003/new/product


```JSON
{
	"name":"surf xl updated",
	"description":"washing powder",
	"price":"200"
	
} 
```

>> #### To get Single products:- localhost:3003/new/product/:id

>> #### To update  products:- localhost:3003/new/product/:id

>> #### To Delete product:- localhost:3003/new/product/:id