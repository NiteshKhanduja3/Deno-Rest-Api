import { v4 } from 'https://deno.land/std/uuid/mod.ts'

let products = [
    {
        id:"1",
        name:"Washig Powder Nirma",
        description:"Washing powder",
        price:100

    },
    {
        id:"2",
        name:"ujala",
        description:"stensil",
        price:200

    },
    {
        id:"3",
        name:"Tide",
        description:"Washing powder",
        price:80

    }
]
// to get all products
//route:- /new/products

const getProducts = ({ response }) =>{
    response.body ={
        success:true,
        data:products
    }
}

//get single product
//route new/product/:id
const getProduct = ({ params,response }) =>{
    const product = products.find(p => p.id === params.id)
    if(product){
        response.status = 200
        response.body = {
            sucess:true,
            data:product
        }
    } 
    else{
        response.status =404
        response.body = {
            sucess:false,
            msg:"No Producct Found"
        }

    }
    
}


//post addsingle product
//route new/product/add
const addProduct =async ({request, response }) =>{
    const body = await request.body()
    if (!request.hasBody){
        response.status =400
        response.body ={
            sucess:false,
            msg:"No data"
        }
    }
    else {
        const product = body.value
        product.id = v4.generate()
        products.push(product)
        response.status =201
        response.body ={
            success:true,
            data:product
        }

    }
}


//put single product update
//route new/product/:id
const updateProduct =async ({ params,request ,response }) =>{
    const product = products.find(p => p.id === params.id)
    if(product){
       const body = await request.body()
       const updateData = body.value
       products = products.map(p => p.id ==params.id ? {...p, ...updateData}:p)
       response.status =200
       response.body = {
           success : true,
           data : products
       } 
    }
    else{
        response.status =404
        response.body = {
            sucess:false,
            msg:"No Producct Found"
        }

    }
    
}

//delete single product
//route new/product/:id
const deleteProduct = ({params, response }) =>{
    products = products.filter(p => p.id !== params.id)
    response.body ={
        success:true,
        msg: "Product Removed"
    }
    
}


export {getProducts, getProduct,updateProduct,deleteProduct,addProduct}