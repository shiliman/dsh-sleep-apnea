export const DATA = {
  id: 'dsh-sleep-apnea',
  name: '睡眠呼吸暂停',
  prefix: 'apnea',
  label: '睡眠呼吸暂停',
  defaultEeriness: 3,
  gain: 0.3,
  flareChance: 0.26,
  flareGain: 20,
  triggerWeight: 0.95,
  flareWeight: 0.9,
  reliefs: [
    { id: 'sidelying', label: '改成侧躺', relief: 20, minutes: 30, calm: 8 },
    { id: 'nap', label: '白天补十分钟', relief: 26, minutes: 25, calm: 9 },
    { id: 'cpap', label: '戴上呼吸机', relief: 30, minutes: 60, calm: 10 },
  ],
  body: {
    stiff: '脑子像蒙了一层，别人说一句得在脑子里过两遍。',
    ache: '白天一直发困；话说到一半会忘了原本要说什么，得停一下重新找。',
    flare: '刚才那几秒像是断片，回过神来已经漏了半句；只能从头再说一遍。',
  },
  voice: {
    base: '允许找词：一句话里卡一下、换一个更笨的词；允许把上一句的开头重复一遍再往下说。别把困说成撒娇。',
    flare: '允许一句话说到一半停住、然后说「我刚说到哪儿了」；不要拿打呼开玩笑。',
  },
}
