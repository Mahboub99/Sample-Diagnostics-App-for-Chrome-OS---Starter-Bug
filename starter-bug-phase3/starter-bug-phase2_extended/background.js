setInterval(function(){

    chrome.runtime.onMessageExternal.addListener(
        function(request, sender, sendResponse) {
          if (sender.url == blocklistedWebsite)
            return;  // don't allow this web page access
            
          if (request.openUrlInEditor)
            openUrl(request.openUrlInEditor);
        });



    chrome.system.cpu.getInfo((CpuInfo)=>{
        console.log("CPU");
        console.log(CpuInfo);
    });

    chrome.system.memory.getInfo((MemoryInfo)=>{
        console.log("Memory");
        console.log(MemoryInfo);
    });
    
    chrome.system.storage.getInfo((StorageUnitInfo)=>{
        console.log("Storage");
        console.log( StorageUnitInfo);
    });
    
    chrome.system.display.getInfo((DisplayUnitInfo)=>{
        console.log("Display");
        console.log(DisplayUnitInfo);
    });

},30000);