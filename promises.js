
const ride=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isarrived=true
            if (isarrived) {
                resolve('driver is arrived !')
            }else {
                reject('driver is not arrived !')
            }
    
        },2000)
       

})


ride.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.error(error)
})