

function Task1(callback) {
    setTimeout(()=>{
        console.log("task 1 is done !")
    callback()
    },2000)
    
}


function Task2(callback) {
    setTimeout(()=>{
    console.log("Task 2 is done !")
     callback()
    })
  
}


Task1(Task2)