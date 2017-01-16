function Api(apiRoot) {
    this.apiRoot = apiRoot;
}

Api.prototype.getGames = function () {
    return this._request('games', 'GET');
};

Api.prototype.getGame = function (gameId) {
    return this._request('games/' + gameId, 'GET');
};

Api.prototype.getHighscore = function (gameId, userId) {
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