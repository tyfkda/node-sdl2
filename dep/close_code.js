var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var ref = require('ref-napi');
var Union = require('ref-union-di')(ref);




FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
}, exports)