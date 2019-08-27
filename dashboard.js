$(document).ready(function()
{
    $('#imageBtn').on("click",function(){
        $('#fileChooser').click();
    });

    $('#fileChooser').on("change",function()
    {
        var reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.onload = function(e)
        {
            $('#canvas').empty();
            $('#canvas').append("<img id='img' src='"+e.target.result+"'>");
        }
    });

    $('#cameraBtn').on("click",function()
    {
        $('#canvas').empty();
        $('#canvas').append("<video id='video' height='380' autoplay></video>");
        var video = document.getElementById('video');
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                video.srcObject = stream;
                video.play();
            });
        }
    });
});
