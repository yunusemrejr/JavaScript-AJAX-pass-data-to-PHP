function sender() {
    const content = {
        name: "Yunus",
        no: 22,
        value: "human"
    };

    const JsonData = JSON.stringify(content);
    document.write('<h1>I just sent this to server-side:' + JsonData + '</h1>');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', "receiver.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JsonData);

}