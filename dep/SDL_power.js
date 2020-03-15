var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var Union = require('ref-union-di')(ref);
var ref = require('ref-napi')


var SDL_PowerState = exports.SDL_PowerState = {
	SDL_POWERSTATE_UNKNOWN: 0,
	SDL_POWERSTATE_ON_BATTERY: 1,
	SDL_POWERSTATE_NO_BATTERY: 2,
	SDL_POWERSTATE_CHARGING: 3,
	SDL_POWERSTATE_CHARGED: 4,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var int32 = exports.int32 = ref.types.int32
var int32_ptr = exports.int32_ptr = ref.refType(int32)

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_GetPowerInfo: [ uint32, [ int32_ptr, int32_ptr, ] ],
}, exports)