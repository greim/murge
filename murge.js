/*
 * Copyright 2014 https://raw.github.com/greim
 * Credit for original version goes to https://raw.github.com/yeikos
 * License MIT
 */

;(function(isCJS, isAMD){

	function murge(){

		var result = arguments[0],
			deep = (result === true),
			size = arguments.length,
			item, index, key;

		if (deep || typeOf(result) !== 'object'){
			result = {};
		}

		for (index=1;index<size;++index){
			if (typeOf(item = arguments[index]) === 'object'){
				for (key in item){
					if (item.hasOwnProperty(key)){
						result[key] = deep ? clone(item[key]) : item[key];
					}
				}
			}
		}

		return result;
	}

	function clone(input){

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array'){

			output = [];
			size = input.length;

			for (index=0;index<size;++index){
				output[index] = clone(input[index]);
			}
		} else if (type === 'object'){

			output = {};
			for (index in input){
				if (input.hasOwnProperty(index)){
					output[index] = clone(input[index]);
				}
			}
		}

		return output;
	}

	function typeOf(input){
		if (Array.isArray(input)){
			return 'array';
		} else if (input instanceof Object){
			return 'object';
		}
	}

	if (isCJS){
		module.exports = murge;
	}
	if (isAMD){
		define([], function(){
			return murge;
		})
	}
	if (!isCJS && !isAMD){
		window.murge = murge;
	}

})(
	typeof module === 'object' &&
	module &&
	typeof module.exports === 'object' &&
	module.exports,
	typeof define === 'function' &&
	window.define.amd
);
