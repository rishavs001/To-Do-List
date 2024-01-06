const express= require("express");
const bodyParser= require ("body-parser");

const app= express();
app.use(express.static("public"));

app.set ("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
let NewItems=["EAT","SLEEP"];
let workItems=[];
app.get("/",function(req,res){
   // console.log(req);
  //  res.send("Hello Brother.");

let today= new Date();
let currentDay=today.getDay();
let day = "";


// if(currentDay==0 || currentDay==6 )
// {
//     day="Weekend";
//    // res.send("<h1>Today is holiday</h1>");
    
// }
// else{
//     day="Weekday";
//     // res.write("<h1>Today is work day</h1>");
//     // res.write("<h3>Get up to Work</h3>");
// }


// switch(currentDay){
//     case 0:
//         day="Sunday";
//         break;
//     case 1:
//         day="Monday";
//         break;
//     case 2:
//         day="Tuesday";
//         break;
//     case 3:
//         day="Wednesday";
//         break;
//     case 4:
//         day="Thursday";
//         break;
//     case 5:
//         day="Friday";
//         break;
//     case 6:
//         day="Saturday";
//         break;
//     default:
//         console.log("Enter valid day. Current day is: "+ currentDay);
// }

let options={
    weekday: "long",
    day: "numeric",
    month: "long"
};

day= today.toLocaleDateString("en-US", options);

res.render('list', { listTitle: day, newListItem: NewItems });

});

app.get("/work",function(req,res){
    res.render('contents', { listTitle: "WorkList", newListItem: workItems });
});

app.post("/",function(req,res){
    let item = req.body.newItem;
    
    // console.log(NewItems);
    console.log(req.body);
    if(req.body.list ==="WorkList")
    {
        workItems.push(item);
        res.redirect("/work");
       
    }
    else if(req.body.list==="day"){
        NewItems.push(item);
        res.redirect("/");
    }
    
});


