function try_catch(){
    const x = 0;
    try{
        if(x <= 0 )throw "enter with positive value!"
        if(x >= 10)throw "value too high";
        if(x >=1 && x <= 9) console.log("value is: " + x);
    }
    catch(err){
        console.log(err);
    }
}

try_catch();