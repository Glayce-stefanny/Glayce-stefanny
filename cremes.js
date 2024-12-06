// scripts.js

// Detalhes dos cremes
document.querySelectorAll('.detalhes-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const tipo = e.target.parentElement.getAttribute('data-tipo');
        alert(`Você selecionou o creme de ${tipo}. Ele é ideal para cabelos que precisam de ${tipo.toLowerCase()}.`);
    });
});

// Ajuda para encontrar o creme ideal
document.getElementById('form-ajuda').addEventListener('submit', (e) => {
    e.preventDefault();
    const tipoCacho = document.getElementById('tipo-cacho').value;
    const problemaCabelo = document.getElementById('problema-cabelo').value;

    const resultado = `Com base no seu tipo de cacho (${tipoCacho}) e necessidade (${problemaCabelo}), recomendamos um creme de ${problemaCabelo}.`;
    document.getElementById('resultado').textContent = resultado;
});
