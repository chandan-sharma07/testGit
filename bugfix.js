for (var i=1; i<=5; i++) {
    let count = 0;
    try{
        setTimeout(()=>{
            count++;
        }, 500)
    } catch(err){
        console.log(err)
    }
    console.log(count)
}