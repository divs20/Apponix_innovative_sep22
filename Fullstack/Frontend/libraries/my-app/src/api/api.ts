export const flipkart=async()=>{
    var flipkart=fetch('https://fakestoreapi.com/products')
var data= await (await flipkart).json()

return data
}
