var shoot = {
	direction : 'Up'
}

var ship = {					// It works for Enemy and User ship
	life: 2,
	direction : 'standBy',
	kind : 'Enemy',

	move: function (dir){			// Up, Down, Left or Right
		if (dir === 0){
		this.direction = 'Right';
		console.log('Moving Right');
		}
		else if (dir === 1){
		this.direction = 'Left';
		console.log('Moving Left');
		}
		else if (dir === 2){
		this.direction = 'Down';
		console.log('Moving Down');
		}
		if (dir === 0){
		this.direction = 'Up';
		console.log('Moving Up');
		}
	},
	fire: function(dir){			// Up or Down
		var shooted = new shoot();
		shooted.direction = dir;
		console.log('BANG');
	} 

}
