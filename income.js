function netSalaryCalculator (income, NSSF, NHIF, PAYE){
    if(gross<6000){
        NHIF = 150;
    }
    else if(gross>=6000 && gross<8000){
        NHIF = 300;
    }
    else if(gross>=8000 && gross<12000){
        NHIF = 400;
    }
    else if(gross>=12000 && gross<15000){
        NHIF = 500;
    }
    else if(gross>=15000 && gross<20000){
       NHIF = 600;
    }
    else if(gross>=20000 && gross<25000){
       NHIF = 750;
    }
    else if(gross>=25000 && gross<30000){
       NHIF = 850;
    }
    else if(gross>=30000 && gross<35000){
       NHIF = 900;
    }
    else if(gross>=35000 && gross<40000){
        NHIF = 950;
    }
    else if(gross>=40000 && gross<45000){
        NHIF = 1000;
    }
    else if(gross>=45000 && gross<50000){
        NHIF = 1100;
    }
    else if(gross>=50000 && gross<60000){
        NHIF = 1200;
    }
    else if(gross>=60000 && gross<70000){
        NHIF = 1300
    }else if(gross>=70000 && gross<80000){
        NHIF = 1400
    }
    else if(gross>=80000 && gross<90000){
        NHIF = 1500
    }else if(gross>=90000 && gross<100000){
        NHIF = 1600
    }
    else {
        NHIF = 1700
    }
   console.log("Your NHIF is", NHIF) 
}
   
function NSSF (pensionablePay){
        pensionablePay = 0.06 * income
        if (pensionablePay >= 2160){
            console.log (2160)
        }
        else {
        console.log (pensionablePay)}  
}
function PAYE ()





