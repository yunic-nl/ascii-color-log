//ASCII color config
const colorConfig = {
	'errorBlock': '[41m',
	'error': '[91m',
	'infoBlock': '[104m',
	'info': '[34m',
	'successBlock': '[42m',
	'success': '[92m'
}

/**
 * Log message in colored output
 * @param {('error'|'errorBlock'|'info'|'infoBlock'|'succes'|'successBlock')} type 
 * @param {string} msg 
 */
const colorOutput = (type,msg) => `\u001b${colorConfig[type]}${msg}\u001b[0m`;

module.exports = class {
	/**
	 * Logger function, for example console.log
	 * @param {Function} loggerFN 
	 */
	constructor(loggerFN) {
		this.logFN = loggerFN || console.log;
	}

	/**
	 * Return ASCII error colored msg
	 * @param {String} msg 
	 * @returns {function(): void} 
	 */
	error(msg) {
		return this.logFN(colorOutput('error',msg));
	}

	/**
	 * Return ASCII errorBlock colored msg
	 * @param {String} msg 
	 * @returns {function(): void} 
	 */
	errorBlock(msg){
		return this.logFN(colorOutput('errorBlock',msg));
	}

	/**
	 * Return ASCII info colored msg
	 * @param {String} msg 
	 * @returns {function(): void} 
	 */
	info(msg){
		return this.logFN(colorOutput('info',msg));
	}

	/**
	 * Return ASCII infoBlock colored msg
	 * @param {String} msg 
	 * @returns {function(): void} 
	 */
	infoBlock(msg){
		return this.logFN(colorOutput('infoBlock',msg));
	}

	/**
	 * Return ASCII success colored msg
	 * @param {String} msg 
	 * @returns {function(): void} 
	 */
	success(msg){
		return this.logFN(colorOutput('success',msg));
	}

	/**
	 * Return ASCII successBlock colored msg
	 * @param {String} msg 
	 * @returns {function(): void} 
	 */
	successBlock(msg){
		return this.logFN(colorOutput('successBlock',msg));
	}
}

