var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var Union = require('ref-union-di')(ref);
var ref = require('ref-napi')


var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var string = exports.string = ref.types.CString
var uint32 = exports.uint32 = ref.types.uint32

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_SetClipboardText: [ int32, [ string, ] ],
	SDL_GetClipboardText: [ string, [ ] ],
	SDL_HasClipboardText: [ uint32, [ ] ],
}, exports)