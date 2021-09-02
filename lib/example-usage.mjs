import ASCIIlog from './logger.js';

//standard console log fn
const log = new ASCIIlog();

log.infoBlock('Welcome to ASCII color log')
log.info('\nThis is just an example for usage in scripts.\n')
log.successBlock('Great success!')

log.info('\n\n')
log.infoBlock('These are all the colored options:')
log.infoBlock('infoblock')
log.info('info')
log.success('success')
log.successBlock('succesBlock')
log.error('error')
log.errorBlock('errorBlock')