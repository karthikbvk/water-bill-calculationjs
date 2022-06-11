calculate = () => {    
    var Mcbill = document.getElementById('Mcbill').value;
    var Acbill = document.getElementById('Acbill').value;
    document.getElementById('pbill').value = parseFloat(Mcbill) + parseFloat(Acbill);
    var powerBill = parseInt(document.getElementById('pbill').value);
    var y = document.getElementsByName('array[]');
    var z = y.value;
    let totalLit = 0 ;
    var finalAmount = 0; 
    if(Mcbill == " " && Acbill == " "){
        alert('fill the Metercharges and actual charges values ');
    }
    else{
            for(i=0;i<y.length;i++){
                totalLit += parseInt(y[i].value);
            document.getElementById('Lit').value = totalLit;
            }
            for(i=0;i<y.length;i++){
                document.getElementById('Mcbil'+ i).value = Mcbill / y.length;
            var perLit = Acbill / totalLit ;
            document.getElementById('perLitre').value = perLit; 
        r = document.getElementById('Acbil' + i);
        r.value = y[i].value * perLit; 
        document.getElementById('Totalbil'+ i).value = parseFloat(document.getElementById('Mcbil'+ i).value) + parseFloat(r.value);
        finalAmount += parseFloat(document.getElementById('Totalbil'+ i).value);
        document.getElementById('result').value = parseInt(finalAmount);
            }  
            
    }
    var k = finalAmount;
    var t =parseInt(k);
    if (powerBill === t ){
        alert(" successfull");
    }
    else {
        alert('recheck the input values ');
    }
} 

    












