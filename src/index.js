document.addEventListener("DOMContentLoaded", () => {let form=document.querySelector('form');form.addEventListener('submit', (e)=>{e.preventDefault()
  yoyo(e.target.new_task_description.value)
  yoyo(e.target.user_name.value)
 form.reset()
})})
function yoyo(hey){console.log(hey)
let p=document.createElement('p')
let btn=document.createElement('button')
btn.addEventListener('click',deleter)
btn.textContent='x'
p.textContent=`${hey} `
p.appendChild(btn) 
document.querySelector("#list").appendChild(p)
console.log(p)
}

function deleter(e){e.target.parentNode.remove()}