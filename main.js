// QQPlay window need to be inited first
if (false) {
    BK.Script.loadlib('GameRes://libs/qqplay-adapter.js');
}

var loadingBool = true;
var loadingNum = 0;
window.boot = function() {

    var settings = window._CCSettings;
    window._CCSettings = undefined;

    if (!settings.debug) {
        var uuids = settings.uuids;

        var rawAssets = settings.rawAssets;
        var assetTypes = settings.assetTypes;
        var realRawAssets = settings.rawAssets = {};
        for (var mount in rawAssets) {
            var entries = rawAssets[mount];
            var realEntries = realRawAssets[mount] = {};
            for (var id in entries) {
                var entry = entries[id];
                var type = entry[1];
                // retrieve minified raw asset
                if (typeof type === 'number') {
                    entry[1] = assetTypes[type];
                }
                // retrieve uuid
                realEntries[uuids[id] || id] = entry;
            }
        }

        var scenes = settings.scenes;
        for (var i = 0; i < scenes.length; ++i) {
            var scene = scenes[i];
            if (typeof scene.uuid === 'number') {
                scene.uuid = uuids[scene.uuid];
            }
        }

        var packedAssets = settings.packedAssets;
        for (var packId in packedAssets) {
            var packedIds = packedAssets[packId];
            for (var j = 0; j < packedIds.length; ++j) {
                if (typeof packedIds[j] === 'number') {
                    packedIds[j] = uuids[packedIds[j]];
                }
            }
        }

        var subpackages = settings.subpackages;
        for (var subId in subpackages) {
            var uuidArray = subpackages[subId].uuids;
            if (uuidArray) {
                for (var k = 0, l = uuidArray.length; k < l; k++) {
                    if (typeof uuidArray[k] === 'number') {
                        uuidArray[k] = uuids[uuidArray[k]];
                    }
                }
            }
        }
    }

    function setLoadingDisplay() {
        // Loading splash scene
        var splash = document.getElementById('splash');
        // var progressBar = splash.querySelector('.progress-bar span');



        cc.loader.onProgress = function(completedCount, totalCount, item) {

            loadData.completedCount = completedCount;
            loadData.totalCount = totalCount;

            if (loadingBool) {
                var loadintT = document.getElementById("loadingText")
            }
            var percent = 100 * completedCount / totalCount;
            if (loadingBool && loadingNum >= 1 && totalCount > 1) {
                if (percent.toFixed(0) >= 100) {
                    loadintT.innerHTML = 'loading......100' + '%';
                    setTimeout(function() {
                        loadingBool = false;
                        loadintT.remove();
                    }, 0.1 * 1000);
                    clearInterval(timer);
                }
            }
            loadingNum++;
            // if(loadingBool){
            // 	var loadintT = document.getElementById("loadingText")
            // }
            // var percent = 100 * completedCount / totalCount;
            // if(loadingBool && loadingNum >= 1){
            // 	   console.log("dskpi",loadingNum);
            // 	   loadintT.innerHTML = 'loading......' + parseInt(percent)  + '%';
            // 	   if(percent.toFixed(0) >= 100){

            // 		   loadingBool = false;
            // 		   loadintT.remove();
            // 	   }
            // }
            // loadingNum ++;

            // var percent = 100 * completedCount / totalCount;
            // if (progressBar) {
            // progressBar.style.width = percent.toFixed(2) + '%';
            // }


        };
        splash.style.display = 'block';
        // progressBar.style.width = '0%';

        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function() {
            splash.style.display = 'none';
        });
    }

    var onStart = function() {

        cc.loader.downloader._subpackages = settings.subpackages;

        cc.view.enableRetina(true);
        cc.view.resizeWithBrowserSize(true);

        if (!false && !false) {

            if (cc.sys.isBrowser) {
                setLoadingDisplay();
            }

            if (cc.sys.isMobile) {
                if (settings.orientation === 'landscape') {
                    cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                } else if (settings.orientation === 'portrait') {
                    cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
                }
                // cc.view.enableAutoFullScreen([
                //     cc.sys.BROWSER_TYPE_BAIDU,
                //     cc.sys.BROWSER_TYPE_WECHAT,
                //     cc.sys.BROWSER_TYPE_MOBILE_QQ,
                //     cc.sys.BROWSER_TYPE_MIUI,
                // ].indexOf(cc.sys.browserType) < 0);
                cc.view.enableAutoFullScreen(false);
            }

            // Limit downloading max concurrent task to 2,
            // more tasks simultaneously may cause performance draw back on some android system / browsers.
            // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
            if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
                cc.macro.DOWNLOAD_MAX_CONCURRENT = 2;
            }
        }

        // function loadScene(launchScene) {
        // cc.director.loadScene(launchScene, null,
        // function () {
        // if (cc.sys.isBrowser) {
        // // show canvas
        // var canvas = document.getElementById('GameCanvas');
        // canvas.style.visibility = '';
        // var div = document.getElementById('GameDiv');
        // if (div) {
        // div.style.backgroundImage = '';
        // }
        // }
        // cc.loader.onProgress = null;
        // console.log('Success to load scene: ' + launchScene);
        // }
        // );

        // }

        var launchScene = settings.launchScene;

        // load scene
        // loadScene(launchScene);

        var canvas;

        if (cc.sys.isBrowser) {
            canvas = document.getElementById('GameCanvas');
        }
        var launchScene = settings.launchScene;
        console.log("landscape,", launchScene);
        var MainManger = __require("MainManage");
        MainManger.init(launchScene, cc.sys.isBrowser, canvas.style.visibility);






    };

    // jsList
    var jsList = settings.jsList;

    if (false) {
        BK.Script.loadlib();
    } else {
        var bundledScript = settings.debug ? 'src/project.dev.js' : 'src/project.js';
        if (jsList) {
            jsList = jsList.map(function(x) {
                return 'src/' + x;
            });
            jsList.push(bundledScript);
        } else {
            jsList = [bundledScript];
        }
    }

    var option = {
        id: 'GameCanvas',
        scenes: settings.scenes,
        debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
        showFPS: !false && settings.debug,
        frameRate: 60,
        jsList: jsList,
        groupList: settings.groupList,
        collisionMatrix: settings.collisionMatrix,
    }

    // init assets
    cc.AssetLibrary.init({
        libraryPath: 'res/import',
        rawAssetsBase: 'res/raw-',
        rawAssets: settings.rawAssets,
        packedAssets: settings.packedAssets,
        md5AssetsMap: settings.md5AssetsMap,
        subpackages: settings.subpackages
    });

    cc.game.run(option, onStart);
};

// main.js is qqplay and jsb platform entry file, so we must leave platform init code here
if (false) {
    BK.Script.loadlib('GameRes://src/settings.js');
    BK.Script.loadlib();
    BK.Script.loadlib('GameRes://libs/qqplay-downloader.js');

    var ORIENTATIONS = {
        'portrait': 1,
        'landscape left': 2,
        'landscape right': 3
    };
    BK.Director.screenMode = ORIENTATIONS[window._CCSettings.orientation];
    initAdapter();
    cc.game.once(cc.game.EVENT_ENGINE_INITED, function() {
        initRendererAdapter();
    });

    qqPlayDownloader.REMOTE_SERVER_ROOT = "";
    var prevPipe = cc.loader.md5Pipe || cc.loader.assetLoader;
    cc.loader.insertPipeAfter(prevPipe, qqPlayDownloader);

    window.boot();
} else if (window.jsb) {

    var isRuntime = (typeof loadRuntime === 'function');
    if (isRuntime) {
        require('src/settings.js');
        require('src/cocos2d-runtime.js');
        require('jsb-adapter/engine/index.js');
    } else {
        require('src/settings.js');
        require('src/cocos2d-jsb.js');
        require('jsb-adapter/jsb-engine.js');
    }

    cc.macro.CLEANUP_IMAGE_CACHE = true;
    window.boot();
}