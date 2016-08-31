/**
 * Created by Administrator on 2016/8/27.
 */
var fs = require('fs');
var fisCrossApp = module.exports = {};
module.exports = function () {
    fis.on('deploy:end', function () {
        var usedByArr = [];
        if (fis.config.get('usedByNS')) {
            usedByArr = fis.config.get('usedByNS').split(',');
        }
        if (usedByArr.length === 0) {
            return;
        }
        var rootPath = fis.project.getProjectPath().replace(fis.get('namespace'), '');

        function sleep(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds) {
                    break;
                }
            }
        }

        for (var i in usedByArr) {
            var path = rootPath + usedByArr[i] + '/fis-conf.js';
            fs.writeFileSync(path, fs.readFileSync(path));
            console.log(path);
            // sleep(2000);
        }
    });
}();