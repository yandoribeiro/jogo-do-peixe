var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

var tartaruga;
function preload() {
    this.load.image('água', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('tartaruga', 'assets/peixes/tartaruga.png');
    this.load.image('coral', 'assets/coral.png');
}

function create() {
    this.add.image(400, 300, 'água');
    this.add.image(400, 525, 'logo').setScale(0.5);
    tartaruga = this.add.image(400, 300, 'tartaruga');
    tartaruga.setFlip(true, false);
    this.add.image(700, 450, 'coral').setScale(0.5);
}

function update() {
    tartaruga.x = this.input.x;
    tartaruga.y = this.input.y;
}
