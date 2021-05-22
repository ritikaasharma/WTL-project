// $("#write").hide()
// $("#upload").hide()
var addblog = document.getElementById("addblog")
var write = document.getElementById("write")
var upload = document.getElementById("upload")
if(addblog){
  addblog.addEventListener('click', swapper, false);
}
addblog.addEventListener('change',function(){
     if (addblog.value === "Write here"){
     	write.disabled = true;
     	upload.disabled = false;
     }
     else{
     	write.disabled = false;
     	upload.disabled = true;
     }
});


// file validation for image
function fileValidation() {
            var fileInput = 
                document.getElementById('file');
              
            var filePath = fileInput.value;
          
            // Allowing file type
            var allowedExtensions = 
                    /(\.jpg|\.jpeg|\.png|\.gif)$/i;
              
            if (!allowedExtensions.exec(filePath)) {
                alert('Invalid file type');
                fileInput.value = '';
                return false;
            } 
            else 
            {
              
                // Image preview
                if (fileInput.files && fileInput.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        document.getElementById(
                            'imagePreview').innerHTML = 
                            '<img src="' + e.target.result
                            + '"/>';
                    };
                      
                    reader.readAsDataURL(fileInput.files[0]);
                }
            }
        }