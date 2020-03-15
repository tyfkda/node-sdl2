var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var Union = require('ref-union-di')(ref);
var ref = require('ref-napi')



var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
	SDLTest_ResetAssertSummary: [ voit, [ ] ],
	SDLTest_LogAssertSummary: [ voit, [ ] ],
	SDLTest_AssertSummaryToTestResult: [ int32, [ ] ],
}, exports)