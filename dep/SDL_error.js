var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var ref = require('ref-napi');
var Union = require('ref-union-di')(ref);


var SDL_errorcode = exports.SDL_errorcode = {
	SDL_ENOMEM: 0,
	SDL_EFREAD: 1,
	SDL_EFWRITE: 2,
	SDL_EFSEEK: 3,
	SDL_UNSUPPORTED: 4,
	SDL_LASTERROR: 5,
}

var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var string = exports.string = ref.types.CString
var uint32 = exports.uint32 = ref.types.uint32

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_SetError: [ int32, [ string, ] ],
	SDL_GetError: [ string, [ ] ],
	SDL_ClearError: [ voit, [ ] ],
	SDL_Error: [ int32, [ uint32, ] ],
}, exports)