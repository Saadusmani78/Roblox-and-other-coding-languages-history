let checker = false
 document.addEventListener("keyup", function(Key) {
     if(Key.key === "Enter") {
        const Input1 = Number(document.getElementById("StartN").value)
        const Input2 = Number(document.getElementById("EndN").value)
        const Result = document.getElementById("text")        
        console.log("Enter")
         let plus = Input2 - Input1;
         let plus2 = Input1 - 1
         let plus3 = plus + 1
         let p1 = Math.random()
         let p2 = p1 * plus3
         let p3 = Math.floor(p2 + plus2)
         let p4 = p3 + 1
         console.log(p4)
         console.log(Math.random)
         Result.innerHTML = p4
     } else if(Key.key === "F2"){
         if(checker === false){
        document.getElementById("main-container").id = "MC2"
        document.getElementById("body").id = "body2"
        checker = true
         } else{
             document.getElementById("MC2").id = "main-container"
             document.getElementById("body2").id = "body"
             checker = false
         }
     }
 }, false)

//document.getElementById("text").innerHTML = document.getElementById("main-container").scrollHeight +" "+ document.getElementById("main-container").scrollWidth
