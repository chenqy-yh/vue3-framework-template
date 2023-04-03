import rules from '@vee-validate/rules'
import * as veeValidate from 'vee-validate'
import { useField } from 'vee-validate'
import yup from './yup'

Object.keys(rules).forEach((key: string) => {
  veeValidate.defineRule(key, rules[key] as any)
})

const useFields = (fields: string[]) => {
  Object.keys(fields).forEach((field: string) => {
    useField(field)
  })
}

const modules = { yup, ...veeValidate, useFields }

export default modules
