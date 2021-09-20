const embedBody = document.getElementById("embed-body");
const userName = document.getElementById("username");
const Title = document.getElementById("title");
const Avatar = document.getElementById("avatar");

const webHookURL = document.getElementById("WebhookURL");
function sendMessage() {
  const request = new XMLHttpRequest();
  request.open("POST", webHookURL.value);

  request.setRequestHeader("Content-type", "application/json");

  const params = {
    username: userName.value,
    avatar_url: Avatar.value,
    embeds: [
      {
        title: Title.value,
        description: embedBody.value,
        color: "0"
      }
    ]
  };

  request.send(JSON.stringify(params));
}
