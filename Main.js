//將三個值都從localstorage中取出
function get_Data(){
    User_Info = JSON.parse(localStorage.getItem('User_Info_key')||"[]"); 
    Followed_List = JSON.parse(localStorage.getItem('Followed_List_key')||"[]"); 
    Choosed_List = JSON.parse(localStorage.getItem('Choosed_List_key')||"[]");
    program = JSON.parse(localStorage.getItem('Program_key')||"[]");
}
//將三個陣列都存放回localstorage
function save_Data(){
    localStorage.setItem("User_Info_key", JSON.stringify(User_Info));
    localStorage.setItem("Followed_List_key", JSON.stringify(Followed_List));
    localStorage.setItem("Choosed_List_key", JSON.stringify(Choosed_List));
    localStorage.setItem("Program_key", JSON.stringify(program));
}

var testInput = document.getElementById("testInput");
var submitBtn = document.querySelector(".submitBtn");
let standard1 = "(五)13:10-14:00(五)14:10-15:00";
let standard2 = "(二)18:30-19:20(二)19:25-20:15(二)20:25-21:15";


function FsubmitBtn() {
    get_Data();
    var str1 = testInput.value;
    for(var i = 0 ;i < program.length ; i++){
        if(str1 == program[i].ID){
            var period = "";
            var b1Element = document.getElementById('b1');
            b1Element.style.visibility = 'hidden';
            var b2Element = document.getElementById('b2');
            b2Element.style.visibility = 'hidden';
            var b3Element = document.getElementById('b3');
            b3Element.style.visibility = 'hidden';
            var conten1Element = document.getElementById('content1');
            conten1Element.style.display = 'none';
            var conten2Element = document.getElementById('content2');
            conten2Element.style.display = 'none';
            var conten3Element = document.getElementById('content3');
            conten3Element.style.display = 'none';
            var buttonElement = document.getElementById('but');
            buttonElement.style.visibility = 'visible';
            var resultElement = document.getElementById('result');
            resultElement.style.visibility = 'visible';
            period = what_time(i);
            document.getElementById('result').innerHTML = ("<span style='white-space:pre;'>"+ "<font size=4>" + program[i].ID +"\t" + program[i].Opened_Class +"\t"+ period +"\t"+"\t"+  program[i].Teacher+"\t"+"\t"+"\t"+  program[i].Name +"\t");
            break;
        }
        else if(str1 !="" && i+1 == program.length){
            alert("查無此課程");
            var userInput = document.getElementById("testInput");
            userInput.value = "";
        }   
    }
}
submitBtn.addEventListener("click", FsubmitBtn);

function show1(){
    document.write("<br>");
    document.write("<span style='white-space:pre;'>" + "<font size=4>"+"選課代碼"+" " +"</span>");
    document.write("<span style='white-space:pre;'>" +"開課班級"+ "\t" +"</span>");
    document.write("<span style='white-space:pre;'>" +"\t"+"課程時段"+"\t"+"\t"+"</span>");
    document.write("<span style='white-space:pre;'>"+"\t"+"\t"+"\t" +"\t"+"\t"+"\t"+"授課老師"+"\t"+"</span>");
    document.write("<span style='white-space:pre;'>" +"\t"+"課堂名稱"+"</span>");
}
function show2(){
    get_Data();
    for(i = 0 ;i < 14 ; i++){
        var period = "";
        document.write("<span style='white-space:pre;'>" + program[i].ID + "\t");
        document.write( program[i].Opened_Class);
        period = what_time(i);
        document.write("\t"+period +"\t");
        document.write("\t"+ program[i].Teacher+ "\t"+"\t");
        document.write("\t"+ program[i].Name );
        document.write("<br>" + "<br>" +"</span>");
    }
}
function show3(){
    get_Data();
    for(i = 14 ;i < 28 ; i++){
        var period = "";
        document.write("<span style='white-space:pre;'>" + program[i].ID + "\t");
        document.write( program[i].Opened_Class);
        period = what_time(i);
        document.write("\t"+period +"\t");
        document.write("\t"+ program[i].Teacher+ "\t"+"\t");
        document.write("\t"+ program[i].Name );
        document.write("<br>" + "<br>" +"</span>");
    }
}
function show4(){
    get_Data();
    var period = "";
    for(i = 28 ;i < program.length ; i++){
        document.write("<span style='white-space:pre;'>" + program[i].ID + "\t");
        document.write( program[i].Opened_Class);
        period = what_time(i);
        document.write("\t"+period +"\t");
        document.write("\t"+ program[i].Teacher+ "\t"+"\t");
        document.write("\t"+ program[i].Name );
        document.write("<br>" + "<br>" +"</span>");
    }
}
function button_press(){
    get_Data();
    var str2 = testInput.value;
    var i = 0;
    for(i = 0 ;i < program.length ; i++){
        if( str2 == program[i].ID ){
            break;
        }
    }
    for(var j = 0 ;j < Followed_List.length ; j++){
        if(str2 == Followed_List[j].ID ){
            alert("重複關注ㄌ");
            break;
        }
        else if( j + 1 == Followed_List.length){
            Followed_List.push(program[i]);
            alert("關注成功!!");
            save_Data();
            break;
        }
    }
    var buttonElement = document.getElementById('but');
    buttonElement.style.visibility = 'hidden';
    var resultElement = document.getElementById('result');
    resultElement.style.visibility = 'hidden';
    var content1Element = document.getElementById('content1');
    content1Element.style.display = 'block';
    var b1Element = document.getElementById('b1');
    b1Element.style.visibility = 'visible';
    var b2Element = document.getElementById('b2');
    b2Element.style.visibility = 'visible';
    var b3Element = document.getElementById('b3');
    b3Element.style.visibility = 'visible';
    var userInput = document.getElementById("testInput");
    userInput.value = "";
}
function button_press1(){
    var conten1Element = document.getElementById('content1');
    conten1Element.style.display = 'block';
    var conten2Element = document.getElementById('content2');
    conten2Element.style.display = 'none';
    var conten3Element = document.getElementById('content3');
    conten3Element.style.display = 'none';
}
function button_press2(){
    var conten1Element = document.getElementById('content1');
    conten1Element.style.display = 'none';
    var conten2Element = document.getElementById('content2');
    conten2Element.style.display = 'block';
    var conten3Element = document.getElementById('content3');
    conten3Element.style.display = 'none';
}
function button_press3(){
    var conten1Element = document.getElementById('content1');
    conten1Element.style.display = 'none';
    var conten2Element = document.getElementById('content2');
    conten2Element.style.display = 'none';
    var conten3Element = document.getElementById('content3');
    conten3Element.style.display = 'block';
}

function what_time(j){
    get_Data();
    var temp_period = "";
    for(var n = 0; n<program[j].Time.length ;n++){
        if(program[j].Time[n] == 1){
            temp_period = temp_period + "(一)08:10-09:00";
        }
        else if (program[j].Time[n] == 2){
            temp_period = temp_period + "(一)09:10-10:00";
        }
        else if (program[j].Time[n] == 3){
            temp_period = temp_period + "(一)10:10-11:00";
        }
        else if (program[j].Time[n] == 4){
            temp_period = temp_period + "(一)11:10-12:00";
        }
        else if (program[j].Time[n] == 5){
            temp_period = temp_period + "(一)12:10-13:00";
        }
        else if (program[j].Time[n] == 6){
            temp_period = temp_period + "(一)13:10-14:00";
        }
        else if (program[j].Time[n] == 7){
            temp_period = temp_period + "(一)14:10-15:00";
        }
        else if (program[j].Time[n] == 8){
            temp_period = temp_period + "(一)15:10-16:00";
        }
        else if (program[j].Time[n] == 9){
            temp_period = temp_period + "(一)16:10-17:00";
        }
        else if (program[j].Time[n] == 10){
            temp_period = temp_period + "(一)17:10-18:00";
        }
        else if (program[j].Time[n] == 11){
            temp_period = temp_period + "(一)18:30-19:20";
        }
        else if (program[j].Time[n] == 12){
            temp_period = temp_period + "(一)19:25-20:15";
        }
        else if (program[j].Time[n] == 13){
            temp_period = temp_period + "(一)20:25-21:15";
        }
        else if (program[j].Time[n] == 14){
            temp_period = temp_period + "(一)21:20-22:10";
        }
        else if(program[j].Time[n] == 15){
            temp_period = temp_period + "(二)08:10-09:00";
        }
        else if (program[j].Time[n] == 16){
            temp_period = temp_period + "(二)09:10-10:00";
        }
        else if (program[j].Time[n] == 17){
            temp_period = temp_period + "(二)10:10-11:00";
        }
        else if (program[j].Time[n] == 18){
            temp_period = temp_period + "(二)11:10-12:00";
        }
        else if (program[j].Time[n] == 19){
            temp_period = temp_period + "(二)12:10-13:00";
        }
        else if (program[j].Time[n] == 20){
            temp_period = temp_period + "(二)13:10-14:00";
        }
        else if (program[j].Time[n] == 21){
            temp_period = temp_period + "(二)14:10-15:00";
        }
        else if (program[j].Time[n] == 22){
            temp_period = temp_period + "(二)15:10-16:00";
        }
        else if (program[j].Time[n] == 23){
            temp_period = temp_period + "(二)16:10-17:00";
        }
        else if (program[j].Time[n] == 24){
            temp_period = temp_period + "(二)17:10-18:00";
        }
        else if (program[j].Time[n] == 25){
            temp_period = temp_period + "(二)18:30-19:20";
        }
        else if (program[j].Time[n] == 26){
            temp_period = temp_period + "(二)19:25-20:15";
        }
        else if (program[j].Time[n] == 27){
            temp_period = temp_period + "(二)20:25-21:15";
        }
        else if (program[j].Time[n] == 28){
            temp_period = temp_period + "(二)21:20-22:10";
        }
        else if(program[j].Time[n] == 29){
            temp_period = temp_period + "(三)08:10-9:00";
        }
        else if (program[j].Time[n] == 30){
            temp_period = temp_period + "(三)09:10-10:00";
        }
        else if (program[j].Time[n] == 31){
            temp_period = temp_period + "(三)10:10-11:00";
        }
        else if (program[j].Time[n] == 32){
            temp_period = temp_period + "(三)11:10-12:00";
        }
        else if (program[j].Time[n] == 33){
            temp_period = temp_period + "(三)12:10-13:00";
        }
        else if (program[j].Time[n] == 34){
            temp_period = temp_period + "(三)13:10-14:00";
        }
        else if (program[j].Time[n] == 35){
            temp_period = temp_period + "(三)14:10-15:00";
        }
        else if (program[j].Time[n] == 36){
            temp_period = temp_period + "(三)15:10-16:00";
        }
        else if (program[j].Time[n] == 37){
            temp_period = temp_period + "(三)16:10-17:00";
        }
        else if (program[j].Time[n] == 38){
            temp_period = temp_period + "(三)17:10-18:00";
        }
        else if (program[j].Time[n] == 39){
            temp_period = temp_period + "(三)18:30-19:20";
        }
        else if (program[j].Time[n] == 40){
            temp_period = temp_period + "(三)19:25-20:15";
        }
        else if (program[j].Time[n] == 41){
            temp_period = temp_period + "(三)20:25-21:15";
        }
        else if (program[j].Time[n] == 42){
            temp_period = temp_period + "(三)21:20-22:10";
        }
        else if(program[j].Time[n] == 43){
            temp_period = temp_period + "(四)08:10-09:00";
        }
        else if (program[j].Time[n] == 44){
            temp_period = temp_period + "(四)09:10-10:00";
        }
        else if (program[j].Time[n] == 45){
            temp_period = temp_period + "(四)10:10-11:00";
        }
        else if (program[j].Time[n] == 46){
            temp_period = temp_period + "(四)11:10-12:00";
        }
        else if (program[j].Time[n] == 47){
            temp_period = temp_period + "(四)12:10-13:00";
        }
        else if (program[j].Time[n] == 48){
            temp_period = temp_period + "(四)13:10-14:00";
        }
        else if (program[j].Time[n] == 49){
            temp_period = temp_period + "(四)14:10-15:00";
        }
        else if (program[j].Time[n] == 50){
            temp_period = temp_period + "(四)15:10-16:00";
        }
        else if (program[j].Time[n] == 51){
            temp_period = temp_period + "(四)16:10-17:00";
        }
        else if (program[j].Time[n] == 52){
            temp_period = temp_period + "(四)17:10-18:00";
        }
        else if (program[j].Time[n] == 53){
            temp_period = temp_period + "(四)18:30-19:20";
        }
        else if (program[j].Time[n] == 54){
            temp_period = temp_period + "(四)19:25-20:15";
        }
        else if (program[j].Time[n] == 55){
            temp_period = temp_period + "(四)20:25-21:15";
        }
        else if (program[j].Time[n] == 56){
            temp_period = temp_period + "(四)21:20-22:10";
        }
        else if(program[j].Time[n] == 57){
            temp_period = temp_period + "(五)08:10-09:00";
        }
        else if (program[j].Time[n] == 58){
            temp_period = temp_period + "(五)09:10-10:00";
        }
        else if (program[j].Time[n] == 59){
            temp_period = temp_period + "(五)10:10-11:00";
        }
        else if (program[j].Time[n] == 60){
            temp_period = temp_period + "(五)11:10-12:00";
        }
        else if (program[j].Time[n] == 61){
            temp_period = temp_period + "(五)12:10-13:00";
        }
        else if (program[j].Time[n] == 62){
            temp_period = temp_period + "(五)13:10-14:00";
        }
        else if (program[j].Time[n] == 63){
            temp_period = temp_period + "(五)14:10-15:00";
        }
        else if (program[j].Time[n] == 64){
            temp_period = temp_period + "(五)15:10-16:00";
        }
        else if (program[j].Time[n] == 65){
            temp_period = temp_period + "(五)16:10-17:00";
        }
        else if (program[j].Time[n] == 66){
            temp_period = temp_period + "(五)17:10-18:00";
        }
        else if (program[j].Time[n] == 67){
            temp_period = temp_period + "(五)18:30-19:20";
        }
        else if (program[j].Time[n] == 68){
            temp_period = temp_period + "(五)19:25-20:15";
        }
        else if (program[j].Time[n] == 69){
            temp_period = temp_period + "(五)20:25-21:15";
        }
        else if (program[j].Time[n] == 70){
            temp_period = temp_period + "(五)21:20-22:10";
        }
    }
    if(temp_period.length<standard1.length){
        temp_period = temp_period.padEnd(standard1.length)+"\t"+"\t"+"\t"+"\t";
    }
    else if(temp_period.length<standard2.length){
        temp_period = temp_period.padEnd(standard2.length)+"\t";
    }
    return  temp_period;
}
console.log(Followed_List);