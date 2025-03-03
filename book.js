let fetchData= async()=>{
let url='http://localhost:3000/hotel'
let res= await fetch(url)
let data=await res.json()

console.log(data)
let display=document.querySelector("#display")
data.map((e)=>{
    display.innerHTML+=`<tbody>
        <td>${e.name}</td>
        <td ${e.email}</td>
        <td>${e.phone}</td>
        <td>${e.adhar}</td>
        <td>${e.number}</td>
        <td>${e.date}</td>
        <td>${e.dropoff}</td>
        <td>${e.car}</td>
<td>${e.people}</td>
        <td>${e.price*e.person}</td>
        <td onclick="delette('${e.id}')">Cancel</td>
    <td onclick="formfill('${e.id}')">Update</td>
    </tbody>`
   
})
}
let delette=(id)=>{
    let url='http://localhost:3000/hotel/'+id
    fetch(url,{
        method:'DELETE'
    })
    }
    let userinput=()=>{
        let inpname=document.querySelector("#name").value
        let inpemail=document.querySelector("#email").value
        let inpphone=document.querySelector("#phone").value
        let inpaadhar=document.querySelector("#aadhar").value
        let inpnumber=document.querySelector("#number").value
        let inpdate=document.querySelector("#date").value
        let inpdropoff=document.querySelector("#dropoff").value
        let inpcar=document.querySelector("#car").value
        let inpperson=document.querySelector("#people").value
        let url='http://localhost:3000/hotel'
        .fetch(url,{method:'POST',Headers:{'Content-Type':'application/json'},  
        body:JSON.stringify(
            {name:inpname,
            email:inpemail,
            phone:inpphone,
            adhar:inpaadhar,
            number:inpnumber,
            date:inpdate,
            dropoff:inpdropoff,
            car:inpcar,
            people:inpperson,
            price:5000,
        })
        }
        )
        location.href = "bookshow.html"
    return false
}

let formfill=async(id)=>{
    let url=http://localhost:3000/hotel/${id}
    let res= await fetch(url,{method:"GET"})
    let data=await res.json()
    console.log(data);
    
    let formdata=`
    enter your name:<input type="text" id="name" value="${data.name}"><br> <br>
    enter your email:<input type="text" id="email" value="${data.email}"><br> <br>
    enter your phone:<input type="text" id="phone" value="${data.phone}"><br> <br>
    enter your adhar:<input type="text" id="aadhar" value="${data.adhar}"><br> <br>
    enter your number:<input type="text" id="number" value="${data.number}"><br> <br>
    enter your date:<input type="text" id="date" value="${data.date}"><br> <br>
    enter your dropoff:<input type="text" id="dropoff" value="${data.dropoff}"><br> <br>
    enter your car:<input type="text" id="car" value="${data.car}"><br> <br>
    enter your people:<input type="text" id="people" value="${data.people}"><br> <br>
    <button onclick="update('${data.id}')">update</button>
    `
    document.querySelector("#show").innerHTML=formdata
}
    