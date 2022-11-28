document.getElementById("netSalary").onclick = function(){
//to activate the click option on the browser. The output is in the browser console

function netSalaryCalculator (gross, NSSF, NHIF, PAYE){
    let gross = salary 

    
    if(gross<6000){
        NHIF = 150;
    }
    if(gross>=6000 && gross<8000){
        NHIF = 300;
    }
    if(gross>=8000 && gross<12000){
        NHIF = 400;
    }
    if(gross>=12000 && gross<15000){
        NHIF = 500;
    }
    if(gross>=15000 && gross<20000){
       NHIF = 600;
    }
    if(gross>=20000 && gross<25000){
       NHIF = 750;
    }
    if(gross>=25000 && gross<30000){
       NHIF = 850;
    }
    if(gross>=30000 && gross<35000){
       NHIF = 900;
    }
    if(gross>=35000 && gross<40000){
        NHIF = 950;
    }
    if(gross>=40000 && gross<45000){
        NHIF = 1000;
    }
    if(gross>=45000 && gross<50000){
        NHIF = 1100;
    }
    if(gross>=50000 && gross<60000){
        NHIF = 1200;
    }
    if(gross>=60000 && gross<70000){
        NHIF = 1300
    }
    if(gross>=70000 && gross<80000){
        NHIF = 1400
    }
    if(gross>=80000 && gross<90000){
        NHIF = 1500
    }
    if(gross>=90000 && gross<100000){
        NHIF = 1600
    }
    else {
        NHIF = 1700
    }
   console.log("Your NHIF is", NHIF) 
}
// the NHIF calculations first

function NSSF (pensionablePay){
        pensionablePay = 0.06 * gross
        if (pensionablePay >= 2160){
            console.log (2160)
        }
        else {
        console.log (pensionablePay)}  
}

// the NSSF payments follow
function PAYE (taxDue){
    taxDue = gross - (NHIF-NSSF)
        console.log ('your taxDue', taxDue)
   
        if (taxDue <= 24000){
        PAYE = taxDue * 0.1
    }
    if (taxDue > 24000 && taxDue <= 32333){
        PAYE = taxDue * 0.25
    }
    if (taxDue > 32333){
        PAYE = taxDue * 0.3
    }
    console.log (taxDue)
    
    //this is to compute the tax

    computeNHIF()
    computeNSSF()
    computePAYE()
    netSalaryCalculator = gross - (NSSF + NHIF + PAYE)
    console.log ('your net is', netSalaryCalculator)

    //this gives a summary of the computations plus
 }
}






