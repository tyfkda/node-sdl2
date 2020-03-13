var FFI = require('ffi-napi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref-napi')




FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
}, exports)