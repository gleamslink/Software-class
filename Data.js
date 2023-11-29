var User_Info= [
    {
        Name:"預設使用者",
        ID:"D1000000",
        Password:"a1234567",
        Class:"資訊三丙",
        Accu_Credit:3,
        Lowest_Credit:12,
    },
    {
        Name:"王曉明",
        ID:"D1000001",
        Password:"a1234567",
        Class:"資訊一甲",
        Accu_Credit:3,
        Lowest_Credit:12,
    },
    {
        Name:"李曉明",
        ID:"D1000002",
        Password:"a1234567",
        Class:"資訊二丁",
        Accu_Credit:3,
        Lowest_Credit:12,
    },
    {
        Name:"張大名",
        ID:"D1000003",
        Password:"a1234567",
        Class:"資訊三乙",
        Accu_Credit:3,
        Lowest_Credit:12,
    }
];
var Teacher_Info = [
    {
        ID : "T1000000",
        Password : "a1234567"
    },
    {
        ID : "T1000001",
        Password : "a1234567"
    }
];

//以追蹤的課表
var Followed_List = [
    {
        ID:"3000",
        Credit:2,
        day: [1],
        Name:"預設課程",
        Opened_Class:"資訊三合",
        course_period:"13:10-14:00",
        Teacher:"王大明",
        Time:[1],
        Abo: ["這是敘述"]
    },
    {
        ID:"3301",
        Credit:2,
        day: [1],
        Name:"程式設計",
        Opened_Class:"資訊一丙",
        Teacher:"李大明",
        Time:[6, 7],
        Abo: ["這是敘述"]
    }
    ,
    {
        ID:"9564",
        Credit:1,
        day: [1],
        Name:"法文(一)",
        Opened_Class:"外語選修",
        Teacher:"張美美",
        Time:[9]
    }
];

//已選課表(輸出到左側的課表)
var Choosed_List = [
    {
        ID:"1120",
        Credit:3,
        day: [1],
        Name:"邏輯設計",
        Opened_Class:"資訊三甲",
        Teacher:"王小天",
        Time:[1, 2, 3],
        Abo: ["這是敘述"]
    }
];

var Program =[
    {
        ID:"1234",
        Credit:3,
        day: [1,5],
        Opened_Class:"資訊三合",
        Teacher:"黃美美",
        Name:"密碼學",
        Time:[9,65,66],
        Abo: ["這是敘述"]
    },
    {
        ID:"9564",
        Credit:1,
        day: [1],
        Opened_Class:"語言中心",
        Teacher:"張美美",
        Name:"法文(一)",
        Time:[6],
        Abo: ["這是敘述"]
    },
    {
        ID:"5566",
        Credit:3,
        day: [2,5],
        Opened_Class:"資訊三乙",
        Teacher:"林美美",
        Name:"實用職場英文",
        Time:[15,16,66],
        Abo: ["這是敘述"]
    },
    {
        ID:"5678",
        Credit:1,
        day: [4],
        Opened_Class:"資訊一甲",
        Teacher:"黃嘉惠",
        Name:"物件導向設計",
        Time:[46],
        Abo: ["這是敘述"]
    },
    {
        ID:"8432",
        Credit:1,
        day: [5],
        Opened_Class:"資訊一丙",
        Teacher:"李大明",
        Name:"程式設計",
        Time:[66],
        Abo: ["這是敘述"]
    },
    {
        ID:"9999",
        Credit:2,
        day: [5],
        Opened_Class:"通識中心",
        Teacher:"張美美",
        Name:"電影與性別",
        Time:[62,63],
        Abo: ["這是敘述"]
    },
    {
        ID:"9998",
        Credit:3,
        day: [2],
        Opened_Class:"通識中心",
        Teacher:"楊美美",
        Name:"創新綠色科技",
        Time:[25,26,27],
        Abo: ["這是敘述"]
    },
    {
        ID:"9997",
        Credit:2,
        day: [3,4],
        Opened_Class:"通識中心",
        Teacher:"黃阿基",
        Name:"衛星科技應用",
        Time:[30,31,48],
        Abo: ["這是敘述"]
    },
    {
        ID:"9996",
        Credit:3,
        day: [1],
        Opened_Class:"通識中心",
        Teacher:"林雨天",
        Name:"智慧財產之保護",
        Time:[12,13,14],
        Abo: ["這是敘述"]
    },
    {
        ID:"9995",
        Credit:3,
        day: [4,5],
        Opened_Class:"資訊三合",
        Teacher:"張哲誠",
        Name:"微處理機系統",
        Time:[45,46,66],
        Abo: ["這是敘述"]
    },
    {
        ID:"9994",
        Credit:2,
        day: [3],
        Opened_Class:"資訊二丁",
        Teacher:"朱宇心",
        Name:"離散數學",
        Time:[36,37],
        Abo: ["這是敘述"]
    },
    {
        ID:"9993",
        Credit:3,
        day: [1,2],
        Opened_Class:"資訊二丁",
        Teacher:"朱宇心",
        Name:"線性代數",
        Time:[1,2,19],
        Abo: ["這是敘述"]
    },
    {
        ID:"9992",
        Credit:3,
        day: [1,4],
        Opened_Class:"資訊三丙",
        Teacher:"張哲誠",
        Name:"作業系統",
        Time:[8,9,49],
        Abo: ["這是敘述"]
    },
    {
        ID:"1402",
        Credit:2,
        day: [4],
        Name:"程式設計",
        Opened_Class:"資訊一丙",
        Teacher:"李大明",
        Time:[48,49],
        Abo: ["這是敘述"]
    },
    {
        ID:"1302",
        Credit:2,
        day: [4],
        Name:"資料結構",
        Opened_Class:"資訊二乙",
        Teacher:"李大明",
        Time:[54,55],
        Abo: ["這是敘述"]
    },
    {
        ID:"1845",
        Credit:2,
        day: [3],
        Name:"西班牙文",
        Opened_Class:"語言中心",
        Teacher:"李明通",
        Time:[40,41],
        Abo: ["這是敘述"]
    }  ,
    {
        ID:"5000",
        Credit:1,
        day: [1],
        Opened_Class:"資訊三合",
        Teacher:"蔡家豪", 
        Name:"英文寫作",  
        Time:[1],
	    Abo: ["這是敘述"]
    },
    {
        ID:"5001",
        Credit:2,
        day: [1],
        Opened_Class:"資訊四合",
        Teacher:"鍾怡君",
        Name:"大學數學",
        Time:[4,5],
	Abo: ["這是敘述"]
    },
    {
        ID:"5002",
        Credit:3,
        day: [1,3],
        Opened_Class:"資訊三甲",
        Teacher:"張家銘",
        Name:"自然科學導論",
        Time:[7,32],
	Abo: ["這是敘述"]
    },
    {
        ID:"5005",
        Credit:2,
        day: [2],
        Opened_Class:"資訊四合",
        Teacher:"王怡婷",
        Name:"現代西方藝術",
        Time:[16,17],
	Abo: ["這是敘述"]
    },
    {
        ID:"5006",
        Credit:3,
        day: [4],
        Opened_Class:"資訊三乙",
        Teacher:"林美琪",
        Name:"音樂欣賞",
        Time:[47,48],
	Abo: ["這是敘述"]
    },
    {
        ID:"5007",
        Credit:3,
        day: [3,4],
        Opened_Class:"資訊一乙",
        Teacher:"李怡文",
        Name:"基礎物理學",
        Time:[38,39],
	Abo: ["這是敘述"]
    },
    {
        ID:"5008",
        Credit:2,
        day: [5],
        Opened_Class:"資訊二合",
        Teacher:"許怡君",
        Name:"計算機科學導論",
        Time:[57,58],
	Abo: ["這是敘述"]
    },
    {
        ID:"5009",
        Credit:1,
        day: [5],
        Opened_Class:"通識中心",
        Teacher:"陳美玉",
        Name:"歷史與文化研究",
        Time:[63],
	Abo: ["這是敘述"]
    },
    {
        ID:"5010",
        Credit:2,
        day: [2,3],
        Opened_Class:"通識中心",
        Teacher:"王家瑜",
        Name:"生命科學概論",
        Time:[19,33],
	Abo: ["這是敘述"]
    },
    {
        ID:"5011",
        Credit:3,
        day: [4],
        Opened_Class:"資訊三合",
        Teacher:"吳家偉",
        Name:"經濟學原理",
        Time:[55,56],
	Abo: ["這是敘述"]
    },
    {
        ID:"5012",
        Credit:2,
        day: [2],
        Opened_Class:"通識中心",
        Teacher:"許家瑜",
        Name:"人體解剖學",
        Time:[18,19],
	Abo: ["這是敘述"]
    },
    {
        ID:"5013",
        Credit:2,
        day: [5],
        Opened_Class:"資訊四合",
        Teacher:"詹白廷",
        Name:"電腦圖學",
        Time:[57,58],
    Abo: ["這是敘述"]
    },
    {
        ID:"5014",
        Credit:2,
        day: [2],
        Opened_Class:"資訊三合",
        course_period:"(二):20:25-22:10",
        Teacher:"詹白廷",
        Name:"系統分析與設計",
        Time:[27,28],
    Abo: ["這是敘述"]
    }
];
function initial_Data(){
    localStorage.setItem("User_Info_key", JSON.stringify(User_Info));
    localStorage.setItem("Followed_List_key", JSON.stringify(Followed_List));
    localStorage.setItem("Choosed_List_key", JSON.stringify(Choosed_List));
    localStorage.setItem("Program_key", JSON.stringify(Program));
    localStorage.setItem("Teacher_key", JSON.stringify(Teacher_Info));
}
