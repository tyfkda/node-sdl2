'use strict'

const NS = require('../index')
const SDL = NS.require('SDL')

// Test app begin
const App = NS.createAppWithFlags(SDL.SDL_InitFlags.SDL_INIT_EVERYTHING)

// Test window begin
const Window = NS.window
const win = new Window
win.title = 'Play sine wave'
win.on('close', function() {
  App.quit()
})
win.on('keydown', (key) => {
  if (key.scancode === 41)  // Escape
    return App.quit()
})

// Audio.
const SDL_audio = NS.require('SDL_audio')
const audio = NS.audio.create()
const options = {
  freq: 48000,
  channels: 1,
  format: SDL_audio.SDL_AudioFormatFlag.AUDIO_F32,
  samples: 4096,
}

// Play sine wave.
const tone = 440  // Hz
let counter = 0
audio.openAudioDevice(options, (arrayBuffer) => {
  const array = new Float32Array(arrayBuffer)
  const len = array.length
  const sampleRate = audio.spec.freq
  let c = counter
  for (let i = 0; i < len; ++i) {
    array[i] = Math.sin(c * tone * Math.PI * 2 / sampleRate)
    c = (c + 1) % sampleRate
  }
  counter = c
})
