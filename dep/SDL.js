var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var ref = require('ref-napi');
var Union = require('ref-union-di')(ref);

var SDL_stdinc_lib = require('./SDL_stdinc')


var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var Uint32 = SDL_stdinc_lib.Uint32

var SDL_INIT_TIMER          = 0x00000001
var SDL_INIT_AUDIO          = 0x00000010
var SDL_INIT_VIDEO          = 0x00000020  /**< SDL_INIT_VIDEO implies SDL_INIT_EVENTS */
var SDL_INIT_JOYSTICK       = 0x00000200  /**< SDL_INIT_JOYSTICK implies SDL_INIT_EVENTS */
var SDL_INIT_HAPTIC         = 0x00001000
var SDL_INIT_GAMECONTROLLER = 0x00002000  /**< SDL_INIT_GAMECONTROLLER implies SDL_INIT_JOYSTICK */
var SDL_INIT_EVENTS         = 0x00004000
var SDL_INIT_NOPARACHUTE    = 0x00100000  /**< compatibility; this flag is ignored. */
var SDL_INIT_EVERYTHING     = (SDL_INIT_TIMER |
                               SDL_INIT_AUDIO |
                               SDL_INIT_VIDEO |
                               SDL_INIT_EVENTS |
                               SDL_INIT_JOYSTICK |
                               SDL_INIT_HAPTIC |
                               SDL_INIT_GAMECONTROLLER)

var SDL_InitFlags = exports.SDL_InitFlags = {
  SDL_INIT_TIMER,
  SDL_INIT_AUDIO,
  SDL_INIT_VIDEO,
  SDL_INIT_JOYSTICK,
  SDL_INIT_HAPTIC,
  SDL_INIT_GAMECONTROLLER,
  SDL_INIT_EVENTS,
  SDL_INIT_NOPARACHUTE,
  SDL_INIT_EVERYTHING,
}

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDL_Init: [ int32, [ Uint32, ] ],
	SDL_InitSubSystem: [ int32, [ Uint32, ] ],
	SDL_QuitSubSystem: [ voit, [ Uint32, ] ],
	SDL_WasInit: [ Uint32, [ Uint32, ] ],
	SDL_Quit: [ voit, [ ] ],
}, exports)
