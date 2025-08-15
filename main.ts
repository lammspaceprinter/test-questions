let mySprite = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . b b 3 3 3 3 b b . . . . 
    . . . c b 3 3 3 3 1 1 b c . . . 
    . . c b 3 3 3 3 3 1 1 1 b c . . 
    . c c 1 1 1 3 3 3 3 1 1 3 c c . 
    c c d 1 1 1 3 3 3 3 3 3 3 b c c 
    c b d d 1 3 3 3 3 3 1 1 1 b b c 
    c b b b 3 3 1 1 3 3 1 1 d d b c 
    c b b b b d d 1 1 3 b d d d b c 
    . c b b b b d d b b b b b b c . 
    . . c c b b b b b b b b c c . . 
    . . . . c c c c c c c c . . . . 
    . . . . . . b 1 1 b . . . . . . 
    . . . . . . b 1 1 b b . . . . . 
    . . . . . b b d 1 1 b . . . . . 
    . . . . . b d d 1 1 b . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
let locationTiles = scene.aStar(mySprite.tilemapLocation(), tiles.getTileLocation(0, 4))
scene.followPath(mySprite, locationTiles, 50)
