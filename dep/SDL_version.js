var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var Union = require('ref-union-di')(ref);
var ref = require('ref-napi')

var SDL_stdinc_lib = require('./SDL_stdinc')


var voit = exports.voit = ref.types.void
var Uint8 = SDL_stdinc_lib.Uint8
var SDL_version = exports.SDL_version = Struct({
	major: Uint8,
	minor: Uint8,
	patch: Uint8,
})
var SDL_version_ptr = exports.SDL_version_ptr = ref.refType(SDL_version)
var string = exports.string = ref.types.CString
var int32 = exports.int32 = ref.types.int32

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_GetVersion: [ voit, [ SDL_version_ptr, ] ],
	SDL_GetRevision: [ string, [ ] ],
	SDL_GetRevisionNumber: [ int32, [ ] ],
}, exports)