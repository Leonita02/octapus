function Validation(values){

    let error ={};
    const name_pattern = /^[a-zA-Z]+$/;
    const surname_pattern =  /^[a-zA-Z]+$/;
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const birthday_pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    const city_pattern = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
    const payement_pattern =/^((0?\.((0[1-9])|[1-9]\d))|([1-9]\d*(\.\d{2})?))$/ ;
    const number_pattern =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/ ;
    const username_pattern =/^[a-zA-Z0-9]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

//Validimi per Sign Up Form
//Emri validimi
if(values.emri ===""){
    error.emri ="Emri nuk duhet te jete i zbrazet";
}
else if(!name_pattern.test(values.emri)){
    error.emri = "Email nuk eshte i duhuri";
}
else{
    error.emri = ""
}

//Mbiemri validimi
if(values.mbiemri ===""){
    error.mbiemri ="Emri nuk duhet te jete i zbrazet";
}
else if(!surname_pattern.test(values.mbiemri)){
    error.mbiemri = "Email nuk eshte i duhuri";
}
else{
    error.mbiemri = ""
}


//Email validimi
    if(values.email ===""){
        error.email ="Emri nuk duhet te jete i zbrazet";
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email nuk eshte i duhuri";
    }
    else{
        error.email = ""
    }

//Ditelindja validimi
if(values.datelindja ===""){
    error.datelindja ="Emri nuk duhet te jete i zbrazet";
}
else if(!birthday_pattern.test(values.datelindja)){
    error.datelindja = "Email nuk eshte i duhuri";
}
else{
    error.datelindja = ""
}


//Qyteti validimi

if(values.qyteti ===""){
    error.qyteti ="Emri nuk duhet te jete i zbrazet";
}
else if(!city_pattern.test(values.qyteti)){
    error.qyteti = "Email nuk eshte i duhuri";
}
else{
    error.qyteti = ""
}

//Paga validimi

if(values.paga ===""){
    error.paga ="Emri nuk duhet te jete i zbrazet";
}
else if(!payement_pattern.test(values.paga)){
    error.paga = "Email nuk eshte i duhuri";
}
else{
    error.paga = ""
}

//numri telefonit validimi

if(values.numri_telefonit ===""){
    error.numri_telefonit ="Emri nuk duhet te jete i zbrazet";
}
else if(!number_pattern.test(values.numri_telefonit)){
    error.numri_telefonit = "Email nuk eshte i duhuri";
}
else{
    error.numri_telefonit = ""
}

 //username validimi
 if(values.username ===""){
    error.username ="Username nuk duhet te jete i zbrazet";
}
else if(!username_pattern.test(values.username)){
    error.username = "Username nuk eshte i duhuri";
}
else{
    error.username = ""
}

//Pasword validimi
    if(values.password === ""){
        error.password = "Passwordi nuk duhet te jete i zbrazet";
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Passwordi nuk eshte mjaftueshem i sigurt";
    }
    else{
        error.password = ""
    }
    return error;


}