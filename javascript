function redirectToPayment() {
    window.location.href = "https://pagamento.com";
}

document.getElementById("offerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Obrigado! Seu demo e bônus serão enviados por email.");
});
