var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var ref = require('ref-napi');
var Union = require('ref-union-di')(ref);



var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var string = exports.string = ref.types.CString
var c__F_SDL_main_arr = ArrayType(string, 0)

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_main: [ int32, [ int32, c__F_SDL_main_arr, ] ],
	SDL_SetMainReady: [ voit, [ ] ],
}, exports)