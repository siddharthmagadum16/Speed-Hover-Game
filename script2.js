var button = document.getElementsByClassName("hover")[0];
var count =0;
var start ,end;
var ret=0;var gettime;
var d;
var time=0,flag=0;
function f1(){
    var r=[];
    r[0]=document.getElementById("r1");
    r[1]=document.getElementById("r2");
    r[2]=document.getElementById("r3");
    r[3]=document.getElementById("r4");
    r[4]=document.getElementById("r5");
    r[5]=document.getElementById("r6");
    for(var i=0;i<6;i++){
        if(r[i].checked===true){
            gettime= Number(r[i].value);
            // alert("gettime: "+r[i].value);
            break;
        }
    }
}

ret = button.addEventListener("mouseenter",function() {
    d = new Date();
    time=d.getTime();
    if (count===0){ 
        start=time;
        console.log("start time: "+start);
    }
    end=time-start;
    console.log("GETTIME: ",gettime);
    if(end>=gettime){
        
        // document.getElementsByClassName("end")[0].innerHTML ="  : "+ end;
        alert("STOP Your Score: "+(count-1)+" \n Hit Reset button to play  again");
        flag=1;
    }
    if(flag===0){
        document.getElementsByClassName("hover1")[0].innerHTML = "Hover count: " + count;
        // document.getElementsByClassName("TIME")[0].innerHTML = "Current time: " + time;
        count++;
    }
    else {
        document.getElementsByTagName("hover1")[0].innerHTML = "Hover count: " + (count-1);
        
    }
});
document.getElementsByClassName("hover1")[0].innerHTML = "Hover count:" + 0;
// document.getElementsByClassName("TIME")[0].innerHTML = "Current time: " + time;
var button2= document.getElementsByClassName("button2")[0];
button2.addEventListener("click",function (){
    end=0;
    count=0;
    flag=0; 
    console.log("End,count : "+ end+" "+count);
});