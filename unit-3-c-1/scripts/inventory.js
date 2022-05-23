
let data= JSON.parse(localStorage.getItem("products"))
function display(){
let container = document.getElementById('all_products')

data.forEach(function(elem,index){

    let div= document.createElement('div')
    let type= document.createElement('p')
    type.innerText= elem.type;

    let desc = document.createElement('p')
    desc.innerText= elem.desc;

    let price= document.createElement('p')
    price.innerText= elem.price;

    let image= document.createElement("img")
    image.setAttribute("id","picture")
    image.src=elem.image;

    let btn= document.createElement("button")
    btn.innerText= "Remove Product";
    btn.setAttribute("id","remove_product")
    btn.addEventListener("click",function(){
         Remove(elem,index)
    })




    div.append(image,type,desc,price,btn)
    container.append(div)

})

}


function Remove(elem,index){
     console.log("rem",(elem,index))

     let get_data = JSON.parse(localStorage.getItem("products"))
     get_data.splice(index,1)
     localStorage.setItem("products",JSON.stringify(get_data))
     window.location.reload()
}

display()



document.getElementById('add_more_product').addEventListener("click",function(){
    window.location.href="./index.html"
})