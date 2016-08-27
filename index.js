/**
 * Created by Administrator on 2016/8/27.
 */
var fs= require('fs');
module.exports = function() {
    fis.on('release:end', function() {
        var usedByArr = [];
        if (fis.config.get('usedByNS')) {
            usedByArr = fis.config.get('usedByNS').split(',');
        }
        var rootPath = fis.project.getProjectPath().replace(fis.get('namespace'), '');
        for (var i in usedByArr) {
            var path = rootPath + usedByArr[i] + '/fis-conf.js';
            fs.writeFileSync(path, fs.readFileSync(path));
        }
    });
}();
