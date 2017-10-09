document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady(){
   console.log("111111111111111",chcp.fetchUpdate);
   chcp.isUpdateAvailableForInstallation(function(error, data) {
    console.log("22222222222222222");
        if(!error) {
            var isConfirm = confirm("Update?");
            if(isConfirm){
                chcp.installUpdate(function(error) {
                            alert("Complete!");
                            //
                        })
            }else{

            }

        } else {
            alert("NOW Your App is latest version!");
        }
    }) 
}

