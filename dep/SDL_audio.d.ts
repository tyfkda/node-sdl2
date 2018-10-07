type ushort = number
type Uint8 = number
type Uint16 = number
type Uint32 = number
type voit_ptr = any

export type SDL_AudioFormat = ushort

export type SDL_AudioCallback = Function

export const SDL_AudioFormatFlag: {
  AUDIO_U8: number
  AUDIO_S8: number
  AUDIO_U16LSB: number
  AUDIO_S16LSB: number
  AUDIO_U16MSB: number
  AUDIO_S16MSB: number
  AUDIO_U16: number
  AUDIO_S16: number
  AUDIO_S32LSB: number
  AUDIO_S32MSB: number
  AUDIO_S32: number
  AUDIO_F32LSB: number
  AUDIO_F32MSB: number
  AUDIO_F32: number
}

export class SDL_AudioSpec {
  freq: number
  format: SDL_AudioFormat
  channels: Uint8
  silence: Uint8
  samples: Uint16
  padding: Uint16
  size: Uint32
  callback: SDL_AudioCallback
  userdata: voit_ptr
}
