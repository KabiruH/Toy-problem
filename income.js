document.getElementById("netSalary").onclick = function(){
//to activate the click option on the browser. The output is in the browser console

let income = parseInt(document.getElementById("netSalaryCalculator").value)
function netSalaryCalculator (){
let NHIF = 0
let NSSF = 0
let PAYE = 0
let net = 0

  
  function getNHIF (NHIF){  
    
    if(income<6000){
        NHIF = 150;
    }
    if(income>=6000 && income<8000){
        NHIF = 300;
    }
    if(income>=8000 && income<12000){
        NHIF = 400;
    }
    if(income>=12000 && income<15000){
        NHIF = 500;
    }
    if(income>=15000 && income<20000){
       NHIF = 600;
    }
    if(income>=20000 && income<25000){
       NHIF = 750;
    }
    if(income>=25000 && income<30000){
       NHIF = 850;
    }
    if(income>=30000 && income<35000){
       NHIF = 900;
    }
    if(income>=35000 && income<40000){
        NHIF = 950;
    }
    if(income>=40000 && income<45000){
        NHIF = 1000;
    }
    if(income>=45000 && income<50000){
        NHIF = 1100;
    }
    if(income>=50000 && income<60000){
        NHIF = 1200;
    }
    if(income>=60000 && income<70000){
        NHIF = 1300
    }
    if(income>=70000 && income<80000){
        NHIF = 1400
    }
    if(income>=80000 && income<90000){
        NHIF = 1500
    }
    if(income>=90000 && income<=100000){
        NHIF = 1600
    }
    if (income > 100000) {
        NHIF = 1700
    }
   console.log("Your NHIF is", NHIF) 
}
// the NHIF calculations first

function getNSSF (){
    NSSF = (0.06 * income) 
    Math.max(NSSF || 18000)
          console.log ("your NSSF is", NSSF)}  
     
     
// the NSSF payments follow

function getPAYE (taxDue){
    
    taxDue = income - (NHIF + NSSF)
           
        if (taxDue <= 24000){
        PAYE = taxDue * 0.1
    }
    if (taxDue > 24000 && taxDue <= 32333){
        PAYE = taxDue * 0.25
    }
    if (taxDue > 32333){
        PAYE = taxDue * 0.3
    }
    console.log ("your PAYE is", PAYE)
}
    
    getNHIF()
    getNSSF()
    getPAYE()
    net = income - (NSSF + NHIF + PAYE)
    console.log ('your net is', net)
    //this is to compute the tax

    
    
}
netSalaryCalculator()


    //this gives a summary of the computations plus
 
}






