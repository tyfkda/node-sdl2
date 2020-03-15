var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var ref = require('ref-napi');
var Union = require('ref-union-di')(ref);


var SDL_BlendMode = exports.SDL_BlendMode = {
	SDL_BLENDMODE_NONE: 0,
	SDL_BLENDMODE_BLEND: 1,
	SDL_BLENDMODE_ADD: 2,
	SDL_BLENDMODE_MOD: 4,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
}, exports)