


function Task1(callback) {
    setTimeout(()=>{
        console.log("task 1 is done !")
         callback()
    },2000)
    
}


function Task2 (callback) {
    setTimeout(()=>{
        console.log("task 2 is done !")
         callback()
    },4000)
}


function Task3(callback) {
    setTimeout(()=>{
        console.log("task 3 is done !")
         callback()
    },6000)
}


function Task4(callback) {
    setTimeout(()=>{
        console.log("task 4 is done !")
         callback()
    },8000)
}


Task1(()=>{
    Task2(()=>{
        Task3(()=>{
            Task4(()=>{
                console.log("All tasks are already done !")
            })
        })
    })
})