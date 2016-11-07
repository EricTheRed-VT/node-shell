var commands = require('./commands.js')
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(' '); // remove the newline
  var args = cmd.slice(1);
  args = args.map(function(element){
  	if (element[0] === '$'){
  		return parse(element.slice(1));
  	} else {
  		return element;
  	}
  });
  var input = args.join(' ');
  commands[cmd[0]](input);
});

function parse(str){
	//switch in environmental variable
};

