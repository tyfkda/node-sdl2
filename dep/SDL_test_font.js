var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var Union = require('ref-union-di')(ref);
var ref = require('ref-napi')



var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var char = exports.char = ref.types.char
var string = exports.string = ref.types.CString

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDLTest_DrawCharacter: [ int32, [ int32_ptr, int32, int32, char, ] ],
	SDLTest_DrawString: [ int32, [ int32_ptr, int32, int32, string, ] ],
}, exports)