
document.getElementById("clickForMarks").onclick = function(){
    var marks = document.getElementById("studentMarks").value
    
    
    if (marks > 79 && marks <= 100){
        console.log ('A')
    }
    if (marks > 60 && marks < 79 ){
        console.log ('B')
    }
    if (marks >=49 && marks<=59){
        console.log ('C')
    }
    if (marks >=40 && marks < 49){
        console.log ('D')
    }
    if (marks < 40){
        console.log ('E')
    }
    else 
        console.log ('invalid')
}







