function Api(apiRoot, dummy) {
    this.apiRoot = apiRoot;
    this.dummy = dummy || false;
}

Api.prototype.getGames = function () {
    if (this.dummy) {
        return this._dummyRequest([
            {
                "url": "http://127.0.0.1:8000/games/1/",
                "gameId": "snakegame",
                "name": "Snake Game",
                "description": "A snake needs food",
                "location": "snakegame",
                "genre": "highscore",
                "timesPlayed": 5,
                "dateAdded": "2017-01-16T10:54:22"
            }, {
                "url": "http://127.0.0.1:8000/games/2/",
                "gameId": "battleship",
                "name": "Battleship",
                "description": "Battleship",
                "location": "battleship",
                "genre": "highscore",
                "timesPlayed": 3,
                "dateAdded": "2017-01-17T10:54:22"
            }
        ]);
    }
    return this._request('games', 'GET');
};

Api.prototype.getGame = function (gameId) {
    if (this.dummy) {
        return this._dummyRequest([
            {
                "url": "http://127.0.0.1:8000/games/1/",
                "gameId": "snakegame",
                "name": "Snake Game",
                "description": "A snake needs food",
                "location": "snakegame",
                "genre": "highscore",
                "timesPlayed": 5,
                "dateAdded": "2017-01-16T10:54:22"
            }
        ]);
    }
    return this._request('games/' + gameId, 'GET');
};

Api.prototype.getHighscore = function (gameId, userId) {
    if (this.dummy) {
        return this._dummyRequest([
            {
                "url": "http://127.0.0.1:8000/highscore/1/",
                "username": "Luud Janssen",
                "gameId": "snakegame",
                "userId": "luudjanssen",
                "highscore": 589,
                "date": "2017-01-16T11:17:33"
            }, {
                "url": "http://127.0.0.1:8000/highscore/1/",
                "username": "Pieter Janssen",
                "gameId": "snakegame",
                "userId": "pieterjanssen",
                "highscore": 900,
                "date": "2017-01-16T11:17:33"
            }, {
                "url": "http://127.0.0.1:8000/highscore/1/",
                "username": "Luud Janssen",
                "gameId": "battleship",
                "userId": "luudjanssen",
                "highscore": 2,
                "date": "2017-01-16T11:17:33"
            }
        ]);
    }
    return this._request('highscore/' + gameId + ( userId ? ('/' + userId) : ''), 'GET');
};

Api.prototype.setHighscore = function (gameId, userId, highscore) {
    return this._request('highscore/' + gameId + '/' + userId, 'POST', { highscore: highscore });
};

Api.prototype._request = function (url, method, data) {
    var fullUrl = this.apiRoot + '/' + url;

    if (method === 'GET') {
        return $.get(fullUrl);
    } else {
        return $.post(fullUrl, data);
    }
};

Api.prototype._dummyRequest = function (sendBackData) {
    return {
        then: function (fn) {
            setTimeout(function () {fn(sendBackData)}, 200);
        }
    }
};