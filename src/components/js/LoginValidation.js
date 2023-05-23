// function Validation(values){
// //Validimi per Login Form
//     let error = {};
//     const username_pattern =/^[a-zA-Z0-9]+$/;
//     const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

//     //username validimi
//     if(values.username ===""){
//         error.username ="Username nuk duhet te jete i zbrazet";
//     }
//     else if(!username_pattern.test(values.username)){
//         error.username = "Username nuk eshte i duhuri";
//     }
//     else{
//         error.username = ""
//     }

//     //Password validimi
//     if(values.password === ""){
//         error.password = "Passwordi nuk duhet te jete i zbrazet";
//     }
//     else if(!password_pattern.test(values.password)){
//         error.password = "Passwordi nuk eshte mjaftueshem i sigurt";
//     }
//     else{
//         error.password = ""
//     }
//     return error;


// }


// export default Validation;