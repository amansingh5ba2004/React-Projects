

import express from "express";

const app = express() ;


app.get('/api/products', (req,res)=> {
    const products = [
        {       
            id: 1,
            Name: 'table wooden ' ,
            price: 200 ,
            image: "https://images.pexels.com/photos/17392834/pexels-photo-17392834/free-photo-of-cloud-over-sunlit-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }  ,  
        {       
            id: 2,
            Name: 'chair wooden ' ,
            price: 100 ,
            image: "https://images.pexels.com/photos/17392834/pexels-photo-17392834/free-photo-of-cloud-over-sunlit-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }  , 
        {
            id: 3,
            Name: 'table glass ' ,
            price: 400 ,
            Image: "https://images.pexels.com/photos/17392834/pexels-photo-17392834/free-photo-of-cloud-over-sunlit-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }  ,
        {
            id: 4,
            Name: 'chair glass ' ,
            price: 150 ,
            Image: "https://images.pexels.com/photos/17392834/pexels-photo-17392834/free-photo-of-cloud-over-sunlit-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }  ,
        {
            id: 5,
            Name: 'table steel ' ,
            price: 500 ,
            Image: "https://images.pexels.com/photos/17392834/pexels-photo-17392834/free-photo-of-cloud-over-sunlit-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        } ,
        {
            id: 6,
            Name: 'chair steel ' ,
            price: 250 ,
            Image: "https://images.pexels.com/photos/17392834/pexels-photo-17392834/free-photo-of-cloud-over-sunlit-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        } 
    ]


    //run in browser ===> "http://localhost:3000/api/products?search="

    if(req.query.search) {
        const filterProducts = products.filter(products => products.Name.includes(req.query.search))
        res.send(filterProducts);
        return ; 
    }
    


     setTimeout(() => {
        res.send(products);
     }, 3000)

    }
 ) 


const port = process.env.PORT || 3000 ;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}) ;