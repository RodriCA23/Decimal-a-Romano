function convertir(){
    var roman="";
    var numeroD= document.getElementById("numero").value;
    if(numeroD <1 || numeroD>3999){
        alert("NO ES POSIBLE REALIZAR LA CONVERSIÓN");
        document.getElementById("numero").value = "";
    }else{
    document.getElementById("numero").value = "";
    console.log(numeroD);
    /*MILLARES */
    resto= numeroD % 1000;
    var div=numeroD/1000;
    div=parseInt(div);
    console.log("1000 divi "+div);
    console.log("1000 resto "+resto);
    
    if(div !=0){
        for(var i=1;i<=div;i++){
            roman=roman +"M";
            console.log(roman);
        }
    }else{}
    
    /*CENTENAS */
    var div2=resto/100;
    resto=resto%100;
    div2=parseInt(div2);
    console.log("100 divi "+div2);
    console.log("100 resto "+resto);
    var res=div2/5;
    if(res >= 1 && res <= 1.6){
        console.log("Funciona");
        var d=div2-5;
        roman=roman + "D";
        console.log(roman);
        if(d !=0){
            for(var a=1;a<=d;a++){
                roman= roman +"C";
                console.log(roman);
            } 
        }
    }else{
        if(div2 >=1 && div2 <= 3){
            for(var y=1;y<=div2;y++){
                roman= roman +"C";
                console.log(roman);
            }
        }else{}
        if(div2 == 4){
            roman=roman+"CD";
            console.log(roman);
        }
    }
    if(res == 1.8){
        roman=roman+"CM";
        console.log(roman);
    }else{}
    
    /*DECENAS */
    var div3=resto/10;
    resto=resto%10;
    div3=parseInt(div3);
    console.log("10 divi "+div3);
    console.log("10 resto "+resto);
    var res2=div3/5;
    if(res2 >= 1 && res2 <= 1.6){
        console.log("Funciona");
        var d2=div3-5;
        roman=roman + "L";
        console.log(roman);
        if(d2 !=0){
            for(var r=1;r<=d2;r++){
                roman= roman +"X";
                console.log(roman);
            } 
        }
    }else{
        if(div3 >=1 && div3 <= 3){
            for(var w=1;w<=div3;w++){
                roman= roman +"X";
                console.log(roman);
            }
        }else{}
        if(div3 ==4){
            roman=roman+"XL";
            console.log(roman);
        } 
    }
    if(res2 == 1.8){
        roman=roman+"XC";
        console.log(roman);
    }else{}
    /*UNIDADES*/
    var div4=resto/1;
    resto=resto%1;
    div4=parseInt(div4);
    console.log("1 divi "+div4);
    console.log("1 resto "+resto);
    var res3=div4/5;
    if(res3 >= 1 && res3 <= 1.6){
        console.log("Funciona");
        var d3=div4-5;
        roman=roman + "V";
        console.log(roman);
        if(d3 !=0){
            for(var m=1;m<=d3;m++){
                roman= roman +"I";
                console.log(roman);
            } 
        }
    }else{
        if(div4 >=1 && div4 <= 3){
            for(var v=1;v<=div4;v++){
                roman= roman +"I";
                console.log(roman);
            }
        }else{}
        if(div4==4){
            roman=roman+"IV";
            console.log(roman);
        }
    }
    if(res3 == 1.8){
        roman=roman+"IX";
        console.log(roman);
    }else{}
    document.getElementById("romanos").innerHTML = "El numero "+numeroD+" en romano es: "+roman;
} 
}