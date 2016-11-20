
{Number} = require "Nan"

Validator = require "Validator"
wrongType = require "wrongType"

Range = Validator

  test: (value) ->
    return no if not Array.isArray value
    return no if value.length isnt 2
    return no if not Number.test value[0]
    return no if not Number.test value[1]
    return yes

  assert: (value, key) ->

    if not Array.isArray value
      return wrongType Array, key

    if value.length isnt 2
      return Error "'#{key}' must have a length of 2!"

    if not Number.test value[0]
      return wrongType Number, key + "[0]"

    if not Number.test value[1]
      return wrongType Number, key + "[1]"

module.exports = Range
