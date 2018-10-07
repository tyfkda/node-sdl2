import {SDL_AudioSpec, SDL_AudioFormat} from '../dep/SDL_audio'

export type Options = {
  freq?: number
  format?: SDL_AudioFormat
  channels?: number
  samples?: number
}

export class audio {
  static create(): audio

  readonly spec: SDL_AudioSpec

  openAudioDevice(options: Options, callback: (buffer: ArrayBuffer) => void)
}
