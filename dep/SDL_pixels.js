var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var Union = require('ref-union-di')(ref);
var ref = require('ref-napi')

var SDL_stdinc_lib = require('./SDL_stdinc')

var PixelType = exports.PixelType = {
	UNKNOWN: 0,
	INDEX1: 1,
	INDEX4: 2,
	INDEX8: 3,
	PACKED8: 4,
	PACKED16: 5,
	PACKED32: 6,
	ARRAYU8: 7,
	ARRAYU16: 8,
	ARRAYU32: 9,
	ARRAYF16: 10,
	ARRAYF32: 11,
}
var PackedOrder = exports.PackedOrder = {
	NONE: 0,
	XRGB: 1,
	RGBX: 2,
	ARGB: 3,
	RGBA: 4,
	XBGR: 5,
	BGRX: 6,
	ABGR: 7,
	BGRA: 8,
}
var PackedLayout = exports.PackedLayout = {
	NONE: 0,
	_332: 1,
	_4444: 2,
	_1555: 3,
	_5551: 4,
	_565: 5,
	_8888: 6,
	_2101010: 7,
	_1010102: 8,
}

function SDL_DEFINE_PIXELFORMAT(type, order, layout, bits, bytes) {
  return ((1 << 28) | ((type) << 24) | ((order) << 20) | ((layout) << 16) |
          ((bits) << 8) | ((bytes) << 0))
}

var PixelFormat = exports.PixelFormat = {
	UNKNOWN: 0,
	ABGR8888: SDL_DEFINE_PIXELFORMAT(PixelType.PACKED32, PackedOrder.ABGR, PackedLayout._8888, 32, 4),
}
var SDL_bool = exports.SDL_bool = {
	SDL_FALSE: 0,
	SDL_TRUE: 1,
}

var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var Uint8 = SDL_stdinc_lib.Uint8
var SDL_Color = exports.SDL_Color = Struct({
	r: Uint8,
	g: Uint8,
	b: Uint8,
	a: Uint8,
})
var int32 = exports.int32 = ref.types.int32
var SDL_Color_ptr = exports.SDL_Color_ptr = ref.refType(SDL_Color)
var Uint32 = SDL_stdinc_lib.Uint32
var SDL_Palette = exports.SDL_Palette = Struct({
	ncolors: int32,
	colors: SDL_Color_ptr,
	version: Uint32,
	refcount: int32,
})
var SDL_Palette_ptr = exports.SDL_Palette_ptr = ref.refType(SDL_Palette)
var c__S_SDL_PixelFormat_FI_padding_arr = ArrayType(Uint8, 2)
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var SDL_PixelFormat = exports.SDL_PixelFormat = Struct({
	format: Uint32,
	palette: SDL_Palette_ptr,
	BitsPerPixel: Uint8,
	BytesPerPixel: Uint8,
	padding: c__S_SDL_PixelFormat_FI_padding_arr,
	Rmask: Uint32,
	Gmask: Uint32,
	Bmask: Uint32,
	Amask: Uint32,
	Rloss: Uint8,
	Gloss: Uint8,
	Bloss: Uint8,
	Aloss: Uint8,
	Rshift: Uint8,
	Gshift: Uint8,
	Bshift: Uint8,
	Ashift: Uint8,
	refcount: int32,
	next: voit_ptr,
})
var string = exports.string = ref.types.CString
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var Uint32_ptr = exports.Uint32_ptr = ref.refType(Uint32)
var SDL_PixelFormat_ptr = exports.SDL_PixelFormat_ptr = ref.refType(SDL_PixelFormat)
var Uint8_ptr = exports.Uint8_ptr = ref.refType(Uint8)
var float = exports.float = ref.types.float
var Uint16 = SDL_stdinc_lib.Uint16
var Uint16_ptr = exports.Uint16_ptr = ref.refType(Uint16)

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_GetPixelFormatName: [ string, [ Uint32, ] ],
	SDL_PixelFormatEnumToMasks: [ uint32, [ Uint32, int32_ptr, Uint32_ptr, Uint32_ptr, Uint32_ptr, Uint32_ptr, ] ],
	SDL_MasksToPixelFormatEnum: [ Uint32, [ int32, Uint32, Uint32, Uint32, Uint32, ] ],
	SDL_AllocFormat: [ SDL_PixelFormat_ptr, [ Uint32, ] ],
	SDL_FreeFormat: [ voit, [ SDL_PixelFormat_ptr, ] ],
	SDL_AllocPalette: [ SDL_Palette_ptr, [ int32, ] ],
	SDL_SetPixelFormatPalette: [ int32, [ SDL_PixelFormat_ptr, SDL_Palette_ptr, ] ],
	SDL_SetPaletteColors: [ int32, [ SDL_Palette_ptr, SDL_Color_ptr, int32, int32, ] ],
	SDL_FreePalette: [ voit, [ SDL_Palette_ptr, ] ],
	SDL_MapRGB: [ Uint32, [ SDL_PixelFormat_ptr, Uint8, Uint8, Uint8, ] ],
	SDL_MapRGBA: [ Uint32, [ SDL_PixelFormat_ptr, Uint8, Uint8, Uint8, Uint8, ] ],
	SDL_GetRGB: [ voit, [ Uint32, SDL_PixelFormat_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr, ] ],
	SDL_GetRGBA: [ voit, [ Uint32, SDL_PixelFormat_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr, ] ],
	SDL_CalculateGammaRamp: [ voit, [ float, Uint16_ptr, ] ],
}, exports)
