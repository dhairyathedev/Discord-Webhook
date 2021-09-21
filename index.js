const embedBody = document.getElementById("embed-body");
const userName = document.getElementById("username");
const Title = document.getElementById("title");
const Avatar = document.getElementById("avatar");
const Image = document.getElementById("image");

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
        color: "0",
        image: {
          url: Image.value
        }
      }
    ]
  };

  request.send(JSON.stringify(params));
}
// https://discord.com/api/webhooks/889714223549153310/VvwjdIWZot9EVBEuBmdnhjJ4gHKE8vHwyrJDZQj1uMcyfM1cgwZ9C1F5IdIB4KGqg6UE
