var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var Union = require('ref-union-di')(ref);
var ref = require('ref-napi')



var voit = exports.voit = ref.types.void
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var string = exports.string = ref.types.CString

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_LoadObject: [ voit_ptr, [ string, ] ],
	SDL_LoadFunction: [ voit_ptr, [ voit_ptr, string, ] ],
	SDL_UnloadObject: [ voit, [ voit_ptr, ] ],
}, exports)