var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var ref = require('ref-napi');
var Union = require('ref-union-di')(ref);




FFI.Library(__dirname + '/SDL2', {
}, exports)