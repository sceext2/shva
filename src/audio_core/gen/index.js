// freq: Hz
// time: ms
export function playSound(freq, time, gain = 1, type = 'sine') {
  const ac = new AudioContext()

  // debug
  const result = {
    sampleRate: ac.sampleRate,
    baseLatency: ac.baseLatency,
    outputLatency: ac.outputLatency,
  }

  // freq
  const nodeO = ac.createOscillator()
  nodeO.type = type
  nodeO.frequency.value = freq

  // gain
  const nodeG = ac.createGain()
  nodeG.gain.value = gain

  // connect
  nodeO.connect(nodeG)
  nodeG.connect(ac.destination)

  // play with time
  nodeO.start(ac.currentTime)
  nodeO.stop(ac.currentTime + (time / 1e3))

  return result
}
