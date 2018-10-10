'use strict'

const ref = require('ref')
const FFI = require('ffi')
const SDL_audio = require('../dep/SDL_audio')

class audio {
  static create() {
    return new audio()
  }

  constructor() {
    this.dev = -1
  }

  destroy() {
    SDL_audio.SDL_CloseAudioDevice(this.dev)
    this.dev = -1
  }

  // options: {freq(48000), channels(1), format(AUDIO_F32SYS), samples: 4096}
  // callback: (ArrayBuffer) => void
  openAudioDevice(options, callback) {
    const cbWrapper = (_userdata, stream_, length) => {
      const stream = stream_.reinterpret(length, 0)
      callback(stream.buffer)
    }
    this.callback = FFI.Callback('void', ['pointer', 'pointer', 'int'], cbWrapper)

    const want = new SDL_audio.SDL_AudioSpec()
    want.freq = options.freq || 48000
    want.channels = options.channels || 1
    want.format = options.format || SDL_audio.SDL_AudioFormatFlag.AUDIO_F32SYS
    want.samples = options.samples || 4096
    want.userdata = null
    want.callback = this.callback

    this.spec = new SDL_audio.SDL_AudioSpec()
    this.dev = SDL_audio.SDL_OpenAudioDevice(
      null, 0, want.ref(), this.spec.ref(),
      options.audioChangeFlags || SDL_audio.SDL_AllowChangeFlags.SDL_AUDIO_ALLOW_FREQUENCY_CHANGE)

    SDL_audio.SDL_PauseAudioDevice(this.dev, 0)
  }
}

module.exports = audio
