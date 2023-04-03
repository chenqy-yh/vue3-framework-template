import _ from 'lodash'
const env: any = _.cloneDeep(import.meta.env)

Object.entries(env as Record<string, any>).forEach(([key, value]) => {
  if (value == 'true' || value == 'false') {
    env[key] = value == 'true' ? true : false
  }
  if (/^\d+$/.test(value)) {
    env[key] = Number(value)
  }
  if (value == 'null') {
    env[key] = null
  }
  if (value == 'undefined') {
    env[key] = undefined
  }
})

export default env as ImportMetaEnv
