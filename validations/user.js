import Joi from 'joi'
export function validation(data) {
  const validation = Joi.object({
    name: Joi.string().trim().min(3).max(100),
    email: Joi.string().trim().max(100),
    password: Joi.string().min(8).max(60)
  })
  return validation.validate(data)
}

export function validationPost(data) {
  const validation = Joi.object({
    name: Joi.string().trim().min(3).max(5).required(),
    email: Joi.string().trim().max(100).required(),
    password: Joi.string().min(8).max(60).required()
  })
  return validation.validate(data)
}
 
export function validationLogin(data) {
  const validation = Joi.object({
    email: Joi.string().trim().max(100).required(),
    password: Joi.string().min(8).max(60).required()
  })
  return validation.validate(data)
}
 