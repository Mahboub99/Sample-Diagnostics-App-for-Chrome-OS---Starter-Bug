var SystemData = [];


function getCPU() {
    return new Promise(function(resolve, reject) {
        chrome.system.cpu.getInfo((CpuInfo)=>{
            resolve(CpuInfo);
        });
    });
}

function getMemory() {
    return new Promise(function(resolve, reject) {
        chrome.system.memory.getInfo((MemoryInfo)=>{
           resolve(MemoryInfo);
        });
    });
}

function getStorage() {
    return new Promise(function(resolve, reject) {
        chrome.system.storage.getInfo((StorageUnitInfo)=>{
           resolve(StorageUnitInfo);
        });
        
    });
}

// function getDisplay() {
//     return new Promise(function(resolve, reject) {
//         chrome.system.display.getInfo((DisplayUnitInfo)=>{
//             resolve(DisplayUnitInfo);
//         });
//     });
// }

setInterval(function(){
   
    // chrome.system.cpu.getInfo((CpuInfo)=>{
    //     console.log("CPU");
    //     console.log(CpuInfo);
    //     SystemData.push({CpuInfo: CpuInfo});
    // });


    // chrome.system.memory.getInfo((MemoryInfo)=>{
    //     console.log("Memory");
    //     console.log(MemoryInfo);
    //     SystemData.push(MemoryInfo);
    // });
    
    // chrome.system.storage.getInfo((StorageUnitInfo)=>{
    //     console.log("Storage");
    //     console.log( StorageUnitInfo);
    //     SystemData.push(StorageUnitInfo);
    // });
    
    // chrome.system.display.getInfo((DisplayUnitInfo)=>{
    //     console.log("Display");
    //     console.log(DisplayUnitInfo);
    //     SystemData.push(DisplayUnitInfo);
    // });
    
    var CPU = getCPU();
    var Memory = getMemory();
    var Storage = getStorage() ;
    // var Display = getDisplay();

    Promise.all([CPU , Memory , Storage ]).then(function(data){
        SystemData = data;
    });

    console.log(SystemData);
  
},30000);




chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {    
    sendResponse(SystemData);    
});