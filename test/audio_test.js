'use strict'

const NS = require('../index')
const SDL = NS.require('SDL')
const SDL_render = NS.require('SDL_render')
const SDL_pixels = NS.require('SDL_pixels')

// Test app begin
const App = NS.createAppWithFlags(SDL.SDL_InitFlags.SDL_INIT_EVERYTHING)

// Test window begin
const Window = NS.window
const win = new Window({
  title: 'Play sine wave',
  w: 256 * 2,
  h: 256 * 2,
})
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

// Texture
const WIDTH = 256, HEIGHT = 256
const texture = win.render.createTexture(
  WIDTH, HEIGHT, SDL_pixels.PixelFormat.ABGR8888, SDL_render.SDL_TextureAccess.SDL_TEXTUREACCESS_STREAMING)
const pixels = new Uint8Array(WIDTH * HEIGHT * 4)
const pitch = WIDTH * 4

// Loop
let count = 0
setInterval(() => {
  if (++count >= 256)
    count = 0
  for (let i = 0; i < HEIGHT; ++i) {
    for (let j = 0; j < WIDTH; ++j) {
      const index = (i * WIDTH + j) * 4
      pixels[index]     = j
      pixels[index + 1] = i
      pixels[index + 2] = count
      pixels[index + 3] = 255
    }
  }

  texture.update(null, pixels, pitch)
  win.render.copy(texture, null, null)

  win.render.present()
}, 1000 / 100)
