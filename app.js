function submit() {
    let Date=document.querySelector("#val1").value;
    let Points=document.querySelector("#val2").value;
    let Data={dvrDate:Date,Points:Points}
    postData(Data)
    getData()
    
}
// get data from API
async function getData() {
    let str=""
    const res= await fetch("https://dvrdemo.herokuapp.com/api/dvr")
    const data = await res.json()
    data.map(i=>{
        str += `<tr><td>${new Date(i.dvrDate).toLocaleDateString()}</td><td>${i.Points}</td></tr>`
    })
    document.querySelector("tbody").innerHTML=str;
    
}
getData()

// How to use post method in fetch

async function postData(data) {
    const res= await fetch("https://dvrdemo.herokuapp.com/api/dvr",{ method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(data)
  })
  const Data= await res.json()
  console.log(Data);
    
}