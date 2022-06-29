var calc=require('./calc')
console.log(calc.add(1,2))
console.log(calc.sub(1,2))
console.log(calc.mul(1,2))
calc.div(1,2,(err,result)=>{
    if(err)
        console.log(err)
    else
        console.log(result)
})
calc.div(1,0,(err,result)=>{
    if(err)
        console.log(err)
    else
        console.log(result)
})