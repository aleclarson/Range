
# Range v1.0.1 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Inherits from [`Validator`](https://github.com/aleclarson/Validator).

To be validated, a value must pass **all** of these tests:
- return true for `Array.isArray(value)`
- return true for `value.length === 2`
- return true for `Number.test(value[0])`
- return true for `Number.test(value[1])`

`Number.test` is provided by [`Nan`](https://github.com/aleclarson/Nan).
