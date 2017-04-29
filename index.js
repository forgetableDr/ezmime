const fs = require('fs');
const bundle = fs.readFileSync(__dirname+'/types.json', 'utf-8');
class Mime {
  constructor() {
    this.ext = {};
    this.define(JSON.parse(bundle));
  }
  define(every) {
    for(let item in every) {
      const names = every[item];
      for(let i = 0; i < names.length; i++) {
        this.ext[names[i]] = item;
      }
    }
  }
  see(name) {
    const extName = this.findExt(name);
    return(this.ext[extName] || 'application/octet-stream');
  }
  findExt(name) {
    let ext = name.slice((name.lastIndexOf(".") - 1 >>> 0) + 2);
    ext ? ext = ext : ext = name.replace(/[.]/, '');
    return ext;
  }
}
module.exports = new Mime();
