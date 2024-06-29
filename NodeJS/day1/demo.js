console.log("hello");
function asynch(){
    setTimeout(()=>{
        console.log("async");
    },1000)
}
function dev(){
    console.log("dev");
}
asynch();
dev();