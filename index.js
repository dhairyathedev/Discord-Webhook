const embedBody = document.getElementById("embed-body");
const userName = document.getElementById("username");
const Title = document.getElementById("title");
const Avatar = document.getElementById("avatar");

function sendMessage() {
  const request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/889363795053518848/S3RZcwyPy3_7cX1XWOEl7pUM5CU-Qj-CVPDOAVCTJzIJZfvEwQrrCj_oh27Dp8mjW2uc"
  );

  request.setRequestHeader("Content-type", "application/json");

  const params = {
    username: userName.value,
    avatar_url: Avatar.value,
    embeds: [
      {
        title: Title.value,
        description: embedBody.value
      }
    ]
  };

  request.send(JSON.stringify(params));
}
