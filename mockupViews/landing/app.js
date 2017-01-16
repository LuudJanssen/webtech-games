var gamesApp = angular.module('games', []);

gamesApp.controller('gamesController', function ($scope) {
    var api = new Api('localhost', true);
    $scope.gameSorting = 'timesPlayed';

    // Apply selectFX on all select elements with classes cs-select
    (function () {
        [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
            new SelectFx(el, {
                onChange: updateSort
            });
        });
    })();

    api.getGames().then(function (games) {
        $scope.games = games;

        $scope.games.forEach(function (game) {
            game.highscore = null;
        });

        console.log($scope.games);

        $scope.$apply();

        $('.game').each(function (i, gameElement) {
            correctBackgroundBlur($(gameElement).find('.cover-photo'), $(gameElement));
        });

        api.getHighscore().then(function (highscores) {
            setGameHighs(highscores);
            $scope.$apply();
        });
    });

    api.getHighscore().then(function (highscores) {

    });

    function setGameHighs(highscores) {
        highscores.forEach(function (highscore) {
            $scope.games.forEach(function (game) {
                if (highscore.gameId === game.gameId && highscore.highscore > game.highscore) {
                    game.highscore = highscore.highscore;
                }
            });
        });
    }

    function updateSort(value) {
        console.log(value);
        $scope.gameSorting = value;
        $scope.$apply();
        return true;
    }
});