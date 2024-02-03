// listPage.js

$(document).ready(function () {
    $("#submitListButton").click(function () {
        var iptvInputValue = $("#iptvInput").val();

        if (iptvInputValue.trim() !== "") {
            // Lista inserida com sucesso, redirecionar para a página de leitura do tipo de conteúdo
            window.location.href = "contentPage.html";
        } else {
            $("#statusMessage").text("Por favor, insira uma lista válida.");
        }
    });
});
