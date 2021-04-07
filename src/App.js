import React, {useState, useEffect} from 'react'
import ProductDescription from './ProductDescription'

//list of products 
function App() {

  const [products, setProducts] = useState([])
  useEffect(() => {

 const fetchData = async()=>
 {
   //get data from the api
   //i use proxyurl with the url because the request was blocked by CORS policy
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://firebasestorage.googleapis.com/v0/b/gorgias-templates-production.appspot.com/o/attachments%2F3291ead6-82a2-43fa-ba6e-58328b4e02a1.json?alt=media&token=56fbe45a-2b91-4e35-bd1a-69f41f7d4363'
   
    let res = await fetch(proxyurl + url)
    let data = await res.json()
//set data into products 
    setProducts(data.mvPurchaseOrders)

 }
 fetchData()
 console.log(products)
  }, [])
  return (

    // mapping products into cards
    <div className="App" style={{display:'flex' }}>
  {
    products.map(product=>
   
      <div class="card p-5 m-5" key={product.PurchaseOrderId} >

  <div class="card-body" >
    <h5 class="card-title"> {product.PurchaseOrderTypeAbbreviation}  - {product.PurchaseOrderNo}</h5>
    
   <ProductDescription key={product.PurchaseOrderId} product={product} />
  </div>
</div>
      )
  }


    </div>
  );
}

export default App;

