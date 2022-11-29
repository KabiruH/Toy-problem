
document.getElementById("speedTest").onclick = function(){
  //to activate the click option on the browser. The output is in the browser console
   
  const speed = document.getElementById("speedDetector").value
    
  const points = Math.floor((speed - 70)/5)
// we define points with the formula above
    if (speed <= 70){
       console.log ('ok')
    }
// less than 70 should print ok
    
    else if (points < 12){
        console.log ('points:', points)
    }
// since we defined points earlier, if the points are lower than 12, it should print the number of points 
    else if (points > 12){
        console.log ('License suspended')
    }
// above 12 should show the license is suspended
    }