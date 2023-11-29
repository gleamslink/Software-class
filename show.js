function get_Data(){
    User_Info = JSON.parse(localStorage.getItem('User_Info_key')||"[]"); 
    Followed_List = JSON.parse(localStorage.getItem('Followed_List_key')||"[]"); 
    Choosed_List = JSON.parse(localStorage.getItem('Choosed_List_key')||"[]");
    Program = JSON.parse(localStorage.getItem('Program_key')||"[]");
}
function save_Data(){
    localStorage.setItem("User_Info_key", JSON.stringify(User_Info));
    localStorage.setItem("Followed_List_key", JSON.stringify(Followed_List));
    localStorage.setItem("Choosed_List_key", JSON.stringify(Choosed_List));
    localStorage.setItem("Program_key", JSON.stringify(Program));
}

function functionToExecute(time){    
    localStorage.setItem("time", time); 
}
var Time_Key = parseInt(localStorage.getItem('time'));
function show_ID(){
    console.log(Key);
    // document.write(Choosed_List[Key].ID);
}
function show_Name(){//輸出課程名稱
    var Key;
    get_Data();
    for(var i = 0; i < Choosed_List.length; i++){
        for(var j = 0; j < Choosed_List[i].Time.length; j++){
            if(Time_Key == Choosed_List[i].Time[j]){
                Key = i;
                break;
            }
        }
    }
    document.write(Choosed_List[Key].Name);
}
function show_Opened_Class(){//輸出開課班級
    var Key;
    get_Data();
    for(var i = 0; i < Choosed_List.length; i++){
        for(var j = 0; j < Choosed_List[i].Time.length; j++){
            if(Time_Key == Choosed_List[i].Time[j]){
                Key = i;
                break;
            }
        }
    }
    document.write(Choosed_List[Key].Opened_Class);
}
function show_Teacher(){//輸出開課老師
    get_Data();
    for(var i = 0; i < Choosed_List.length; i++){
        for(var j = 0; j < Choosed_List[i].Time.length; j++){
            if(Time_Key == Choosed_List[i].Time[j]){
                Key = i;
                break;
            }
        }
    }
    document.write(Choosed_List[Key].Teacher);
}
function show_Time(){//輸出時間
    var Key;
    get_Data();
    for(var i = 0; i < Choosed_List.length; i++){
        for(var j = 0; j < Choosed_List[i].Time.length; j++){
            if(Time_Key == Choosed_List[i].Time[j]){
                Key = i;
                var Times = Choosed_List[i].Time[j] % 14;
                document.write(Start_Time_Trans(Times) + "~" + End_Time_Trans(Times) + "</br>");
                break;
            }
        }
    }
}
function show_Credit(){//輸出學分
    get_Data();
    for(var i = 0; i < Choosed_List.length; i++){
        for(var j = 0; j < Choosed_List[i].Time.length; j++){
            if(Time_Key == Choosed_List[i].Time[j]){
                Key = i;
                break;
            }
        }
    }
    document.write(Choosed_List[Key].Credit);
}
function show_Abo(){//輸出敘述
    get_Data();
    for(var i = 0; i < Choosed_List.length; i++){
        for(var j = 0; j < Choosed_List[i].Time.length; j++){
            if(Time_Key == Choosed_List[i].Time[j]){
                Key = i;
                break;
            }
        }
    }
    document.write(Choosed_List[Key].Abo);
}
function Start_Time_Trans(k){
    if (k == 1) ar = ["8:10"];
    else if (k == 2) ar = ["9:10"];
    else if (k == 3) ar = ["10:10"];
    else if (k == 4) ar = ["11:10"];
    else if (k == 5) ar = ["12:10"];
    else if (k == 6) ar = ["13:10"];
    else if (k == 7) ar = ["14:10"];
    else if (k == 8) ar = ["15:10"];
    else if (k == 9) ar = ["16:10"];
    else if (k == 10) ar = ["17:10"];
    else if (k == 11) ar = ["18:30"];
    else if (k == 12) ar = ["19:25"];
    else if (k == 13) ar = ["20:25"];
    else if (k == 14) ar = ["21:20"];
    return ar
}
function End_Time_Trans(k){
    if (k == 1) ar = ["9:00"];
    else if (k == 2) ar = ["10:00"];
    else if (k == 3) ar = ["11:00"];
    else if (k == 4) ar = ["12:00"];
    else if (k == 5) ar = ["13:00"];
    else if (k == 6) ar = ["14:00"];
    else if (k == 7) ar = ["15:00"];
    else if (k == 8) ar = ["16:00"];
    else if (k == 9) ar = ["17:00"];
    else if (k == 10) ar = ["18:00"];
    else if (k == 11) ar = ["19:25"];
    else if (k == 12) ar = ["20:25"];
    else if (k == 13) ar = ["21:20"];
    else if (k == 14) ar = ["22:10"];
    return ar
}