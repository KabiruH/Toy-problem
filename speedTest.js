
document.getElementById("speedTest").onclick = function(){
  
    var speed = document.getElementById("speedDetector").value
    const points = ((speed - 70)/5)
    if (speed < 70){
       conslole.log ('ok')
    }
    else if (points < 12){
        console.log ('points:', points)
    }
    else if (points > 12){
        console.log ('License suspended')
    }
    }