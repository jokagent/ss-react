var fs = require('fs'),
    reactTools = require('react-tools');

exports.init = function(root, config) {

  if (!(config && typeof(config) === 'object')) config = {};

  return {

    name: 'React',

    extensions: ['jsx'],

    assetType: 'js',

    contentType: 'text/javascript',

    compile: function(path, options, cb) {

      var input = fs.readFileSync(path, 'utf8');
      var output = reactTools.transform(input, {sourceFilename: path});
      cb(output);
    }
  };
};
