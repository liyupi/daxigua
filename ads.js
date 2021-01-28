function noAdGoToScene() {


    var GameConfig = __require("GameConfig");
    console.log("IndexMainMangerMaing", GameConfig.launchScene, GameConfig.Bros, GameConfig.caS);

    var launchScene = GameConfig.launchScene;
    var Bros = GameConfig.Bros;
    var caS = GameConfig.caS;
    cc.director.loadScene(launchScene, null,
        function() {

            adCompleteFlag = false;

            if (Bros) {
                // show canvas
                var canvas = document.getElementById('GameCanvas');
                canvas.style.visibility = '';
                var div = document.getElementById('GameDiv');
                if (div) {
                    div.style.backgroundImage = '';
                }
            }
            cc.loader.onProgress = null;
            console.log('Success to load scene1Main: ' + launchScene);





        }
    );


}
