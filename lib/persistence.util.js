function createUUID () {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789ABCDEF";
    for ( var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[12] = "4";
    s[16] = hexDigits.substr((s[16] & 0x3) | 0x8, 1);

    var uuid = s.join("");
    return uuid;
}

if(!Array.prototype.map) {
    Array.prototype.map = function(fn) {
        var newAr = [];
        var length = this.length;
        for(var i = 0; i < length; i++) {
            newAr.push(fn(this[i]));
        }
        return newAr;
    }
}

Number.prototype.equals = function(other) {
    return this == other; // Can't do === because typeof this is always 'object', Javascript FAIL
}

Boolean.prototype.equals = function(other) {
    return this == other; 
}

String.prototype.equals = function(other) {
    return this == other; 
}

Array.prototype.equals = function(other) {
    if(this.length !== other.length) {
        return false;
    }
    for(var i = 0; i < this.length; i++) {
        if(!this[i].equals(other[i])) {
            return false;
        }
    }
    return true;
}