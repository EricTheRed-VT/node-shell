const fs = require('fs');
const request = require('request');

function pwd(input) {
	done(process.cwd());
};

function date(input) {
	done(new Date())};

function ls(input) {
	fs.readdir('.', function(err, files) {
	  if (err) throw err;
	  var out = '';
	  for (var i = 0; i < files.length; i++){
	    out += files[i].toString() + "\n";
	  }
	  done(out);
	  })
};

function echo(input) {
		done(input);
};

function cat(input) {
	fs.readFile(input, 'utf8', function read(err, data) {
		if (err) throw err;
		done(data);
	})
};

function head(input) {
		fs.readFile(input, 'utf8', function read(err, data) {
		if (err) throw err;
		data = data.split('\n').slice(0,5).join('\n');
		done(data);
	})
};

function tail(input) {
		fs.readFile(input, 'utf8', function read(err, data) {
		if (err) throw err;
		data = data.split('\n').slice(-5).join('\n');
		done(data);
	})
};

function curl (input) {
	request(input, function (error, response, body) {
		var data;
	  if (!error && response.statusCode == 200) {
	    data = body;
	  }
	  done(data);
	})
};

function done(output) {
	console.log(output);
	process.stdout.write('\nprompt > ');
}

module.exports = {
	pwd: pwd,
	date: date,
	ls: ls,
	echo: echo,
	cat: cat,
	head: head,
	tail: tail,
	curl: curl
}
