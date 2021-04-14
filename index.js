function sendWebhook() {
  var url = document.getElementById("webhookUrl").value;
  var text = document.getElementById("webhookText").value;
  var name = $('#webhookName').val();
  var pp = $('#webhookImage').val();

  if (url && text) {
    $.post(url, {
      content: text,
      username: name,
      avatar_url: pp,
    })
      .done(function() {
        alert("Webhook sent successfully!\nYour next request will be processed in 3 seconds.")
        console.log("Successfully sent request to " + url);
      })
      .fail(function() {
        alert("That didn't work.")
        console.log("Failed due to unexpected error.");
      })
  } else {
    alert("Please enter a valid Discord-webhook url and text!");
  }
}

function disableButton() {
  document.getElementById("sendButton").disabled = true;
  setTimeout(function () {
    document.getElementById("sendButton").disabled = false;
  }, 3000);
}
