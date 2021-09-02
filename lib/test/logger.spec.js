const dummyConsole = (msg)=>msg;
const ASCIIlog = require('../logger');
const log = new ASCIIlog(dummyConsole);
const logConsole = new ASCIIlog();

describe('ASCII colored output', ()=>{
  it('should console log msg',()=>{
    expect(logConsole.successBlock('Great success block!')).toBe(undefined);
  });
  it('should return error colored msg',()=>{
    expect(log.error('test')).toBe(`\u001b[91mtest\u001b[0m`);
  });
  it('should return error block colored msg',()=>{
    expect(log.errorBlock('test')).toBe(`\u001b[41mtest\u001b[0m`);
  });
  it('should return error info colored msg',()=>{
    expect(log.info('test')).toBe(`\u001b[34mtest\u001b[0m`);
  });
  it('should return error info block colored msg',()=>{
    expect(log.infoBlock('test')).toBe(`\u001b[104mtest\u001b[0m`);
  });
  it('should return error success colored msg',()=>{
    expect(log.success('test')).toBe(`\u001b[92mtest\u001b[0m`);
  });
  it('should return error success block colored msg',()=>{
    expect(log.successBlock('test')).toBe(`\u001b[42mtest\u001b[0m`);
  })
})
