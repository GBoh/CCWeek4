var repoURL = 'https://api.github.com/users/GBoh/repos';
$.getJSON(repoURL, function (data) {
    console.log(data);
});

$("<div>").text("test");