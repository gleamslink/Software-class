//將三個值都從localstorage中取出
function get_Data(){
    User_Info = JSON.parse(localStorage.getItem('User_Info_key')||"[]"); 
    Followed_List = JSON.parse(localStorage.getItem('Followed_List_key')||"[]"); 
    Choosed_List = JSON.parse(localStorage.getItem('Choosed_List_key')||"[]");
    All_List = JSON.parse(localStorage.getItem('Program_key')||"[]");
    Teacher_Info = JSON.parse(localStorage.getItem('Teacher_key')||"[]");
}
//將三個陣列都存放回localstorage
function save_Data(){
    localStorage.setItem("User_Info_key", JSON.stringify(User_Info));
    localStorage.setItem("Followed_List_key", JSON.stringify(Followed_List));
    localStorage.setItem("Choosed_List_key", JSON.stringify(Choosed_List));
    localStorage.setItem("Program_key", JSON.stringify(All_List));
}
var id = JSON.parse(localStorage.getItem('id')) || 2000;

function check_ID(id) {
    get_Data();
    for (let j = 0; j < All_List.length; j++) {
        let ID = parseInt(All_List[j].ID, 10);
        if (ID == id) {
            id++;
            return 0
        }
    }
    return 1
}

function check_teachTime(teacher_name, str_time, end_time, day) {
    get_Data();
    for (let j = 0; j < All_List.length; j++) {
        if (teacher_name == All_List[j].Teacher) {
            for (let k = 0; k < All_List[j].Time.length; k++) {
                let time = parseInt(All_List[j].Time[k], 10);
                for (let g = str_time + (day - 1) * 14; g <= end_time + (day - 1) * 14; g++) {
                    if (time == g) {
                        alert("老師時間撞到了");
                        return 0;
                    }
                }
            }
        }
    }
    return 1;
}


function check_classTime(class_name, str_time, end_time, day) {
    get_Data();
    for (let j = 0; j < All_List.length; j++) {
        if (class_name == All_List[j].Opened_Class) {
            for (let k = 0; k < All_List[j].Time.length; k++) {
                let time = parseInt(All_List[j].Time[k], 10);
                for (let g = str_time + (day - 1) * 14; g <= end_time + (day - 1) * 14; g++) {
                    if (time == g) {
                        alert("班級時間撞到了");
                        return 0;
                    }
                }
            }
        }
    }
    return 1;
}



function getCountry() {
    get_Data();
    var form = document.getElementById("form_name");
    //  讀取select的值
    var day = form.day.value;
    var str_time = form.str_time.value;
    var end_time = form.end_time.value;
    var Credit = form.cridit.value;
    var day2 = form.day2.value;
    var str_time2 = form.str_time2.value;
    var end_time2 = form.end_time2.value;
    // 讀取文字方塊
    var course_name = form.course_name.value;
    var class_name = form.class_name.value;
    var teacher_name = form.teacher_name.value;
    var abo = form.abo.value;
    str_time = parseInt(str_time, 10);
    str_time2 = parseInt(str_time2, 10);
    end_time = parseInt(end_time, 10);
    end_time2 = parseInt(end_time2, 10);
    day = parseInt(day, 10);
    day2 = parseInt(day2, 10);
    Credit = parseInt(Credit, 10);

    course_name = String(course_name);
    class_name = String(class_name);
    teacher_name = String(teacher_name);
    abo = String(abo);

    alert("課程名稱: " + course_name);
    alert("班級名稱: " + class_name);
    alert("禮拜幾: " + day);
    alert("開始時間(第幾節) " + str_time);
    alert("結束時間(第幾節) " + end_time);
    if (day2 != 0) alert("第二次課程禮拜幾: " + day2);
    if (str_time2 != 0) alert("第二次課程開始時間(第幾節): " + str_time2);
    if (end_time2 != 0) alert("第二次課程結束時間(第幾節): " + end_time2);
    alert("老師名子: " + teacher_name);
    alert("學分 " + Credit);
    alert("課程敘述: " + abo);
    //檢查有沒有少填
    if (course_name == '') {
        alert("課程名子缺少");
        return 0;
    }
    if (class_name == '') {
        alert("課程班級缺少");
        return 0;
    }
    if (day == 0) {
        alert("課程禮拜幾缺少");
        return 0;
    }
    if (Credit == -1) {
        alert("學分缺少");
        return 0;
    }
    if (str_time == 0 || end_time == 0 || end_time < str_time) {
        alert("課程時間錯誤");
        return 0;
    }
    if (teacher_name == '') {
        alert("老師名子缺少");
        return 0;
    }
    if (abo == '') {
        alert("敘述缺少");
        return 0;
    }
    if (end_time - str_time > 3){
        alert("課程時間超過三堂，創建失敗");
        return 0;
    }
    //檢查是否可以增加課程
    if (day2 == 0) {
        if (check_classTime(class_name, str_time, end_time, day) == 1 && check_teachTime(teacher_name, str_time, end_time, day) == 1) {
            //將課程輸入到全部的目錄
            while (check_ID(id) == 0) {
                id++;
            }
            let coursein = {
                ID: [String(id)],
                Name: [course_name],
                Opened_Class: [class_name],
                day: [day],
                Teacher: [teacher_name],
                Credit: parseInt([Credit]),
                Time: [],
                Abo: [abo]
            }
            id++;
            for (let k = str_time + (day - 1) * 14; k <= end_time + (day - 1) * 14; k++) {
                coursein.Time.push(k);
            }
            All_List.push(coursein);
            alert("增加成功");
        }
        else {
            alert("課程增加失敗");
            return 0;
        }
        localStorage.setItem('id', JSON.stringify(id));
        save_Data();
    }
    else {
        //檢查是否可以增加課程
        if (check_classTime(class_name, str_time, end_time, day) == 1 && check_teachTime(teacher_name, str_time, end_time, day) == 1) {
            //將課程輸入到全部的目錄
            if (check_classTime(class_name, str_time2, end_time2, day2) == 1 && check_teachTime(teacher_name, str_time2, end_time2, day2) == 1) {
                while (check_ID(id) == 0) {
                    id++;
                }
                let coursein = {
                    ID: [String(id)],
                    Name: [course_name],
                    Opened_Class: [class_name],
                    day: [day],
                    Teacher: [teacher_name],
                    Credit: parseInt([Credit]),
                    Time: [],
                    Abo: [abo]
                }
                id++;
                for (let k = str_time + (day - 1) * 14; k <= end_time + (day - 1) * 14; k++) {
                    coursein.Time.push(k);
                }
                for (let k = str_time2 + (day2 - 1) * 14; k <= end_time2 + (day2 - 1) * 14; k++) {
                    coursein.Time.push(k);
                }
                All_List.push(coursein);
                alert("增加成功");
            }
            else {
                alert("課程增加失敗");
                return 0;
            }
        }
        else {
            alert("課程增加失敗");
            return 0;
        }
        localStorage.setItem('id', JSON.stringify(id));
        save_Data();
    }
}

function to_login(){
    window.location.assign("login.html");
}