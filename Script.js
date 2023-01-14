function active360(){
    const url = window.location.origin; // Aqui você vai ter como retorno o caminho do cocumento, completo.
    const imgOfSofa = document.getElementById('statcSofa'); // Aqui estou coletando as imagens.
    const imgBtn = document.getElementById('img-btn-select');
// Condicional para alternar entre as imagens.
    if (imgBtn.src == `${url}/Leave.png`) {
        imgBtn.src = 'Vector.png'; 
        imgOfSofa.src = 'image-2.png';
        return;
    };
// troca de imagens ao clicar.
    imgBtn.src = 'Leave.png';

    imgOfSofa.src = 'sofa-360.gif';
    imgOfSofa.width = '449';
};