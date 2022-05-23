//store the products array in localstorage as "products"

let product_arr= JSON.parse(localStorage.getItem("products")) || []

document.getElementById('add_product').addEventListener("submit",myProducts)

function myProducts(){
   
    event.preventDefault()
     document.getElementById('products').value= ""
    
    let type= document.getElementById('type').value;
    let desc= document.getElementById('desc').value;
    let price= document.getElementById('price').value;
    let image= document.getElementById('image').value;

    let product_obj = {
        "type":type,
        "desc":desc,
        "price":price,
        "image":image
    }
    console.log("obj",product_obj)

    product_arr.push(product_obj)
    console.log("arr",product_arr)

    localStorage.setItem("products",JSON.stringify(product_arr))
    window.location.reload()


}


document.getElementById('show_products').addEventListener('click', function(){
    window.location.href="./inventory.html"
})


