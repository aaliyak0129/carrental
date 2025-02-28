let fetchData= async()=>{
let url='http://localhost:3000/hotel'
let res= await fetch(url,method:'GET')
let data=await res.json()

console.log(data)
let display=document.querySelector("dataDisplay")
data.map((e)=>{
    display.innerHTML+=`
    <tr>
        <td>${e.name}</td>
        <td ${e.email}</td>
        <td>${e.phone}</td>
        <td>${e.date}</td>
        <td>${e.dropoff}</td>
        <td>${e.car}</td>
        <td>${e.price}</td>
        <td onclick="delette('${e.id}')">cancel</td>
</tr>    `
})
}
let delette=(id)=>{
    let url='http://localhost:3000/hotel/'+id
    fetch(url,{
        method:'DELETE'
    })
    }
    let ins=()=>{
        let inpname=document.querySelector("#name").value
        let inpemail=document.querySelector("#email").value
        let inpphone=document.querySelector("#phone").value
        let inpdate=document.querySelector("#date").value
        let inpdropoff=document.querySelector("#dropoff").value
        let inpcar=document.querySelector("#car").value
        let inpprice=document.querySelector("#price").value
        let url='http://localhost:3000/hotel'
        .fetch(url,{method:'POST',Headers:{'Content-Type':'application/json'},  
        body:JSON.stringify({name:inpname,email:inpemail,phone:inpphone,date:inpdate,dropoff:inpdropoff,car:inpcar,price:80000/day

        })
        }
        )
    return false}