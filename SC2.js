//將三個值都從localstorage中取出
function get_Data(){
    User_Info = JSON.parse(localStorage.getItem('User_Info_key')||"[]"); 
    Followed_List = JSON.parse(localStorage.getItem('Followed_List_key')||"[]"); 
    Choosed_List = JSON.parse(localStorage.getItem('Choosed_List_key')||"[]");
    Program = JSON.parse(localStorage.getItem('Program_key')||"[]");
    Teacher_Info = JSON.parse(localStorage.getItem('Teacher_key')||"[]");
}
//將三個陣列都存放回localstorage
function save_Data(){
    localStorage.setItem("User_Info_key", JSON.stringify(User_Info));
    localStorage.setItem("Followed_List_key", JSON.stringify(Followed_List));
    localStorage.setItem("Choosed_List_key", JSON.stringify(Choosed_List));
    localStorage.setItem("Program_key", JSON.stringify(Program));
}
//驗證使用者身分
function Verification(){
    get_Data();
    // 取得帳號和密碼的值
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var status  = false;
    // 進行簡單的帳號密碼驗證
    for(let i = 0; i < User_Info.length; i++){
        if(username.value == User_Info[i].ID && password.value == User_Info[i].Password){
            // console.log(User_ID);
            localStorage.setItem("User_ID_key", i);
            // document.cookie = i;
            status = true;
            alert("登入成功");
            window.location.assign("Main_Page.html");
        }
    }
    // 如果驗證通過，可以跳轉到指定的頁面;
    if(!status){
        console.log("error");
        username.value = "";
        password.value = "";
        alert("帳號或密碼錯誤，請重試。");
        return false; // 防止表單提交
    }
}
function Teacher_Verification(){
    get_Data();
    // 取得帳號和密碼的值
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var status  = false;
    // 進行簡單的帳號密碼驗證
    for(let i = 0; i < Teacher_Info.length; i++){
        if(username.value == Teacher_Info[i].ID && password.value == Teacher_Info[i].Password){
            // console.log(User_ID);
            localStorage.setItem("User_ID_key", i);
            // document.cookie = i;
            status = true;
            alert("登入成功");
            window.location.assign("page1_mid.html");
        }
    }
    // 如果驗證通過，可以跳轉到指定的頁面;
    if(!status){
        console.log("error");
        username.value = "";
        password.value = "";
        alert("帳號或密碼錯誤，請重試。");
        return false; // 防止表單提交
    }
}
var User_ID = 0; //使用者的資料

//將使用者的資料印在左上角(其中有 姓名、學號、學分下限)
function Write_Info(){
    get_Data();
    User_ID = parseInt(localStorage.getItem("User_ID_key"));
    document.write("姓名:"+User_Info[User_ID].Name+"<br>");    
    document.write("學號:"+User_Info[User_ID].ID+"<br>"); 
    document.write("學分下限:"+User_Info[User_ID].Lowest_Credit+"<br>"); 
    document.write("目前累積學分:"+User_Info[User_ID].Accu_Credit+"<br>");
}

//將以選列表中的課填入課表
function Course_Putin(Course_Time){
    get_Data();
    for(let i = 0; i < Choosed_List.length; i++){
        for(let h = 0; h < Choosed_List[i].Time.length; h++){
            if(Choosed_List[i].Time[h] == Course_Time){
                document.write(Choosed_List[i].Name);
            }
        }
    }
}

//顯示已關注課表(課名 取消關注 加選) 
function FollowedList_Putin(){
    get_Data();
    //取得
    User_ID = parseInt(localStorage.getItem("User_ID_key"));
    var list = document.getElementById("Follow_Details");
    var conlict_status = true;
    var credit_count = true;
    //每次都刷新整個關注列表
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }

    for(let i = 0; i < Followed_List.length; i++){
        var New_Div = document.createElement("div");
        var New_Unfollow = document.createElement("button");
        var New_Choose = document.createElement("button");
        var New_CourseName = document.createElement("span");
        New_Unfollow.innerText = "取消關注";
        New_Choose.innerText = "加選";
        New_CourseName.innerText = Followed_List[i].Name;
        list.append(New_Div);
        New_Div.append(New_CourseName);
        New_Div.append(New_Unfollow);
        New_Div.append(New_Choose);
        New_Unfollow.id = "Unfollow_Button"+i;
        New_Choose.id = "Choose_Button"+i;
        New_CourseName.id = "Course_Name"+i;
        //取消關注function
        New_Unfollow.addEventListener("click", function(event){
            var tmp = event.target.id;
            var Span_Name = "Course_Name" + tmp.charAt(tmp.length-1);
            var list = document.getElementById(Span_Name);
            for(let j = 0; j < Followed_List.length; j++){
                if(Followed_List[j].Name == list.innerText){
                    Followed_List.splice(j, 1);
                    save_Data();
                    break;
                }
            }
            FollowedList_Putin(); //重新印出新的關注列表
        });
        //加選function
        New_Choose.addEventListener("click", function(event){
            
            var tmp = event.target.id;
            var Span_Name = "Course_Name" + tmp.charAt(tmp.length-1);
            var list = document.getElementById(Span_Name);
            for(let j = 0; j < Followed_List.length; j++){
                if(Followed_List[j].Name == list.innerText){
                    for(let l = 0; l < Choosed_List.length; l++){
                        for(let m = 0; m < Choosed_List[l].Time.length; m++){
                            for(let n = 0; n < Followed_List[j].Time.length; n++){
                                if(Followed_List[j].Time[n] == Choosed_List[l].Time[m]){
                                    conlict_status = false;
                                }
                            }
                        }
                    }
                    if((User_Info[User_ID].Accu_Credit + Followed_List[j].Credit) > 25){
                        console.log(typeof(User_Info[User_ID].Accu_Credit + Followed_List[j].Credit));
                        credit_count = false;
                    }
                    if(!conlict_status && !credit_count){
                        alert("您已衝堂且高於最高學分，加選失敗");
                        break;
                    }
                    else if(!conlict_status){
                        alert("您已衝堂，加選失敗");    
                        break;
                    }
                    else if(!credit_count){
                        alert("您已高於最高學分，加選失敗");    
                        break;
                    }
                    User_Info[User_ID].Accu_Credit += Followed_List[j].Credit;
                    Choosed_List.push(Followed_List[j]);
                    Followed_List.splice(j, 1);
                    save_Data();
                    alert("加選成功");
                    break;
                }
            }
            // FollowedList_Putin();
            // ChoosedList_Putin();
            document.location.reload();//即時更新左側課表內容
        });
    }
}

//顯示已選列表(課程名稱 退選)
function ChoosedList_Putin(){
    get_Data();
    var list = document.getElementById("Choose_Details");
    var Low_credit_count = true;
    User_ID = parseInt(localStorage.getItem("User_ID_key"));
    //每次印之前都刷新整個已選列表
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
    for(let i = 0; i < Choosed_List.length; i++){
        var New_Div = document.createElement("div");
        var New_UnChoose = document.createElement("button");
        var New_CourseName = document.createElement("span");
        New_UnChoose.innerText = "退選";
        New_CourseName.innerText = Choosed_List[i].Name;
        list.append(New_Div);
        New_Div.append(New_CourseName);
        New_Div.append(New_UnChoose);
        New_UnChoose.id = "UnChoose_Button"+i;
        New_CourseName.id = "Choose_Course_Name"+i;
        New_UnChoose.addEventListener("click", function(event){
            var tmp = event.target.id;
            var Span_Name = "Choose_Course_Name" + tmp.charAt(tmp.length-1);
            var list = document.getElementById(Span_Name);
            for(let j = 0; j < Choosed_List.length; j++){
                if(Choosed_List[j].Name == list.innerText){
                    if(User_Info[User_ID].Accu_Credit - Choosed_List[j].Credit < User_Info[User_ID].Lowest_Credit){
                        Low_credit_count = false;
                    }
                    if(!Low_credit_count){
                        alert("您已低於最低學分，退選失敗");
                        break;
                    }
                    User_Info[User_ID].Accu_Credit = User_Info[User_ID].Accu_Credit - Choosed_List[j].Credit;
                    Choosed_List.splice(j, 1);
                    alert("退選成功");
                    save_Data();
                    break;
                }
            }
            document.location.reload();
        });
    }
}

function Back_Login(){
    window.location.assign("login.html");
}


