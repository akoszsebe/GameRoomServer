'use strict';

let xbox = { game: 'XBOX', free: true, date: 0 ,client_id : 0};
let ping = { game: 'PING', free: true, date: 0 ,client_id : 0};
let chocso = { game: 'CHOCSO', free: true, date: 0 ,client_id : 0};

let games = [xbox, ping, chocso];

module.exports = (app) => {

  app.get('/api/games', (req, res) => {
    console.log(req.body)
    res.json(games)
  });


  //{
  //	"gametype" : "CHOCSO"
  //}
  app.post('/api/game/reserved', (req, res) => {
    console.log(req.body)
    switch (req.body.gametype) {
      case 'XBOX': xbox.free = false;
        xbox.date = new Date().getTime();
        break;
      case 'PING': ping.free = false;
        ping.date = new Date().getTime();
        break;
      case 'CHOCSO': chocso.free = false;
        chocso.date = new Date().getTime();
        break;
    }
    res.json(games)
  });

  //{
  //	"gametype" : "XBOX"
  //}
  app.post('/api/game/free', (req, res) => {
    console.log(req.body)
    switch (req.body.gametype) {
      case 'XBOX': xbox.free = true;
        xbox.date = 0;
        break;
      case 'PING': ping.free = true;
        ping.date = 0;
        break;
      case 'CHOCSO': chocso.free = true;
        chocso.date = 0;
        break;
    }
    res.json(games)
  });

};
