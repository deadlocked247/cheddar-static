document.getElementsByClassName('feedback')[0].addEventListener('click', function() {
    document.getElementsByClassName('dialog')[0].className = "dialog dialog--open";
}, false);

document.getElementsByClassName('dialog__overlay')[0].addEventListener('click', function() {
    document.getElementsByClassName('dialog')[0].className = "dialog dialog--close";
}, false);


document.getElementById('feedbackSubmit').addEventListener('click', function() {
    var txt = document.getElementById('feedbackText').value.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    if(txt) {
        $.ajax({
            url: "https://hooks.slack.com/services/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",
            method: "POST",
            dataType: 'json',
            data: JSON.stringify({ "text": txt }),
            success: function() {
                this.className = "btn btn-flat done";
                this.innerHTML = "<i style='font-size:20px' class='material-icons'>done</i>";
                setTimeout(function(){
                    document.getElementsByClassName('dialog')[0].className = "dialog dialog--close";
                    this.className = "btn btn-flat";
                    this.innerHTML = "SEND";
                    document.getElementById('feedbackText').value = "";
                }.bind(this), 2000);
            }.bind(this),
            error: function(payload) {
                if (payload.status == 200) {
                    this.className = "btn btn-flat done";
                    this.innerHTML = "<i style='font-size:20px' class='material-icons'>done</i>";
                    setTimeout(function(){
                        document.getElementsByClassName('dialog')[0].className = "dialog dialog--close";
                        this.className = "btn btn-flat";
                        this.innerHTML = "SEND";
                        document.getElementById('feedbackText').value = "";
                    }.bind(this), 2000);
                }
                else {
                    this.className = "btn btn-flat done";
                    this.innerHTML = "Error: Try again";
                }
            }.bind(this)
        });
    }
}, false);
