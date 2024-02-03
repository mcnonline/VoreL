// main.js

$(document).ready(function () {
    // Verifique se o jQuery está carregado corretamente
    if (typeof jQuery === 'undefined') {
        console.error('jQuery não está carregado corretamente. Verifique a inclusão da biblioteca.');
    } else {
        console.log('jQuery carregado com sucesso.');
    }

    // Mostrar popup ao clicar no botão de iniciar
    $("#startButton").click(function () {
        console.log('Botão de iniciar clicado. Exibindo o popup.');
        $("#termsPopup").fadeIn();
    });

    // Fechar popup ao clicar fora dele
    $(document).mouseup(function (e) {
        var popup = $("#termsPopup");
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            console.log('Clicou fora do popup. Fechando o popup.');
            popup.fadeOut();
        }
    });

    // Impedir o fechamento do popup ao clicar dentro dele
    $("#termsPopup .popup-content").click(function (e) {
        e.stopPropagation(); // Impede a propagação do clique para o elemento pai (o documento)
    });

    // Aceitar termos ao clicar no botão dentro do popup
    $("#acceptButton").click(function () {
        if ($("#acceptCheckbox").prop("checked")) {
            console.log('Termos aceitos. Redirecionando para a página de inserção de listas.');
            // Redirecionar para a página de inserção de listas
            window.location.href = "listPage.html";
        } else {
            console.warn('Termos não aceitos. Exibindo alerta.');
            alert("Você deve concordar com os termos para continuar.");
        }
    });
});
