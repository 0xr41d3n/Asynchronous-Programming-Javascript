

function walkDog() {

return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const  walkeddog=true
       if (walkeddog) {
           resolve("dog is walked")
       }else {
           reject("dog is not walked")
       }
   
    },2500)
      
})

}

function cleanKitchen() {

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const  kitchenCleaned=true
            if (kitchenCleaned) {
                resolve("kitchen is cleaned !")
            }else {
                reject("kitchen not cleaned ! ")
            }
        },4000)
    })

}

async function doChores() {
    const dogWalkedResult=await walkDog()
    console.log(dogWalkedResult)
    const cleanKitchenResult=await cleanKitchen()   
    console.log(cleanKitchenResult)
}

doChores()