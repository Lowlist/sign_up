let id_j;
let pw_j;
let pw_re_j;
let user_name_j;
let email_j;
let birth_y_j;
let birth_m_j;
let birth_d_j;
let sex_j;
let tel1_j;
let tel2_j;
let tel3_j;

let id;
let pw;
let pw_re;
let user_name;
let email;
let birth_y;
let birth_m;
let birth_d;
let tel1;
let tel2;
let tel3;

let sex;
let sexes;
let pw_checks = "";

window.onload = function(){

    id_j = document.getElementById("id");
    pw_j = document.getElementById("pw");
    pw_re_j = document.getElementById("pw_re");
    user_name_j = document.getElementById("user_name");
    email_j = document.getElementById("email");
    birth_y_j = document.getElementById("birth_y");
    birth_m_j = document.getElementById("birth_m");
    birth_d_j = document.getElementById("birth_d");
    tel1_j = document.getElementById("tel1");
    tel2_j = document.getElementById("tel2");
    tel3_j = document.getElementById("tel3");
    sex_j = ipSexes=document.getElementsByName("sex");

}

function check(){

    id=id_j.value;
    pw=pw_j.value;
    pw_re=pw_re_j.value;
    user_name=user_name_j.value;
    email=email_j.value;
    birth_y=birth_y_j.value;
    birth_m=birth_m_j.value;
    birth_d=birth_d_j.value;
    tel1=tel1_j.value;
    tel2=tel2_j.value;
    tel3=tel3_j.value;

    for(let i=0;i<sex_j.length;i++){
        if(sex_j[i].checked == true){
            sex = sex_j[i].value;
        }
    }

    if(pw === pw_re){
        pw_checks = " 패스워드 같음";
    } else if(pw != pw_re) {
        pw_checks = " 패스워드 다름"
    }

    let userInfo = 
        "id: "+id+"\n"
        +"pw: "+pw+"\n"
        +"pw_re: "+pw_re+"\n"
        +"userName: "+user_name+"\n"
        +"email: "+email+"\n"
        +"birth_y: "+birth_y+"\n"
        +"birth_m: "+birth_m+"\n"
        +"birth_d: "+birth_d+"\n"
        +"tel_1: "+tel1+"\n"
        +"tel_2: "+tel2+"\n"
        +"tel_3: "+tel3+"\n"
        +"sex: "+sex+"\n"
        +"pw_check"+ pw_checks;

    alert(userInfo);

    if(checkId() && checkPw() && checkPw_re() && checkUserName() && checkEmail() && pw_check()){
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패");
    }

}

function checkId(){
    if(id.length>=4 && id.length<=12){
        console.log("ok id");
        return true;
    } else {
        console.log("no id");
        return false;
    }
}
function checkPw(){
    if(pw.length>=6 && pw.length<=15){
        console.log("ok pw");
        return true;
    } else {
        console.log("no pw");
        return false;
    }
}
function checkPw_re(){
    if(pw_re.length>=6 && pw_re.length<=15){
        console.log("ok pw_re");
        return true;
    } else {
        console.log("no pw_re");
        return false;
    }
}

function pw_check(){
    if(pw.length === pw_re.length){
        console.log("pw_check ok")
        return true;
    } else {
        console.log("pw_check no")
        return false;
    }
}

function checkUserName(){
    if(user_name.length>=2 && user_name.length<=20){
        console.log("ok name");
        return true;
    } else {
        console.log("no name");
        return false;
    }
}
function checkEmail(){
    if(email.length>=10 && email.length<=20){
        console.log("ok email");
        return true;
    } else {
        console.log("no email");
        return false;
    }
}