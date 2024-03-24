const puzzleContainer = document.getElementById('puzzle');
const ROWS = 3; // Número de filas del rompecabezas
const COLS = 3; // Número de columnas del rompecabezas

// Función para crear las piezas del rompecabezas
function createPuzzlePieces() {
    const pieceWidth = puzzleContainer.offsetWidth / COLS;
    const pieceHeight = puzzleContainer.offsetHeight / ROWS;

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const piece = document.createElement('div');
            piece.classList.add('puzzle-piece');
            piece.style.width = pieceWidth + 'px';
            piece.style.height = pieceHeight + 'px';
            piece.style.left = col * pieceWidth + 'px';
            piece.style.top = row * pieceHeight + 'px';
            puzzleContainer.appendChild(piece);
        }
    }
}

// Llama a la función para crear las piezas del rompecabezas
createPuzzlePieces();
