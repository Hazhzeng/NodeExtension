var package = require('NewExtension');

ext = new package.NewExtension().register('HttpTriggerExt')

module.exports = async function (context, req) {
    context.res = {
        body: 'OK'
    };
}