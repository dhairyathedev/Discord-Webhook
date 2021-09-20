function sendMessage() {
  const request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/889363795053518848/S3RZcwyPy3_7cX1XWOEl7pUM5CU-Qj-CVPDOAVCTJzIJZfvEwQrrCj_oh27Dp8mjW2uc"
  );

  request.setRequestHeader("Content-type", "application/json");

  const params = {
    username: "Nokohashi",
    avatar_url: "",
    embeds: [
      {
        title: "Nokomon"
      }
    ]
  };

  request.send(JSON.stringify(params));
}
