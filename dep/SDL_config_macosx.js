var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var Union = require('ref-union-di')(ref);
var ref = require('ref-napi')



var voit = exports.voit = ref.types.void

FFI.Library(__dirname + '/SDL2', {
}, exports)