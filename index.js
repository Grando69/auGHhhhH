const input = document.getElementById("input")
const output = document.getElementById("output")

input.oninput = function(){
    let finish = ""
    const chars = input.value.split("")
    for (let i = 0; i< chars.length; i++){
        const rnd = Math.random()
        let letter = chars[i]
        if(rnd > 0.4){
            letter = letter.toUpperCase()
        }else{
            letter = letter.toLowerCase()
        }
        finish += letter
    }
    output.innerText = finish
}

output.onclick = function(){
   // Copy the text inside the text field
  navigator.clipboard.writeText(output.innerText);
  alert("Text copied")
}