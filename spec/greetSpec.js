'use strict';
var greet = function(name) {if (name === undefined) {name = 'world';
}
return 'Hello ' + name + '!';
};
module.exports = greet



var greet = require('../src/greet');
describe('greet', 
function() {
it('should greet the given name', 

function() {expect(greet('Joe')).toEqual('Hello Joe!');
});
it('should greet no-one special if no name is given',

function() {expect(greet()).toEqual('Hello world!');
});
});

describe('A candle', 

    function() {
    it('should burn when lighted', 

    function() {
    });
    it('should grow smaller while burning',

    function() {
    });
    it('should no longer burn when all wax has been burned', 

    function() {
    });
    it('should go out when no oxygen is available to it', 

    function() {
    });
    });


function show(response) {console.log("Request handler 'show' was called.");
response.writeHead(200, {"Content-Type": "image/png"});
fs.createReadStream("/tmp/test.png").pipe(response);
}
exports.start = start;
exports.upload = upload;
exports.show = show