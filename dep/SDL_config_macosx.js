var FFI = require('ffi-napi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref-napi')



var voit = exports.voit = ref.types.void

FFI.Library(__dirname + '/SDL2', {
}, exports)