<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Puzzle des Volcans</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; text-align: center; padding: 20px; }
        .container { max-width: 800px; margin: 0 auto; background: #fff; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
        h1 { font-size: 2.5em; color: #e63946; }
        #puzzle { display: grid; grid-template-columns: repeat(3, 100px); grid-gap: 10px; }
        .piece { width: 100px; height: 100px; border: 1px solid #ccc; cursor: pointer; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Puzzle des Volcans</h1>
        <div id="puzzle">
            <div class="piece" style="background-image: url('piece1.jpg');" onclick="movePiece(this)"></div>
            <div class="piece" style="background-image: url('piece2.jpg');" onclick="movePiece(this)"></div>
            <div class="piece" style="background-image: url('piece3.jpg');" onclick="movePiece(this)"></div>
            <div class="piece" style="background-image: url('piece4.jpg');" onclick="movePiece(this)"></div>
            <div class="piece" style="background-image: url('piece5.jpg');" onclick="movePiece(this)"></div>
            <div class="piece" style="background-image: url('piece6.jpg');" onclick="movePiece(this)"></div>
            <div class="piece" style="background-image: url('piece7.jpg');" onclick="movePiece(this)"></div>
            <div class="piece" style="background-image: url('piece8.jpg');" onclick="movePiece(this)"></div>
            <div class="piece" style="background-image: url('piece9.jpg');" onclick="movePiece(this)"></div>
        </div>
        <p id="message"></p>
    </div>
    <script src="puzzle.js"></script>
</body>
</html>
