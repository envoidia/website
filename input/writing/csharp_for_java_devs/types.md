Value types (primitives and [structs](./structs)) are stored on the stack and do not invoke the GC. Reference types (
objects) are stored on the heap and do invoke the GC

Value types can escape to the heap if part of a [collection](./collections)

integer literals can be declared in decimal, hexadecimal (`0x` prefix), or binary (`0b` prefix)

`short`, `int`, and `long` are the same as Java. `sbyte` is the same as Java's `byte`

`byte` is an unsigned byte, `uint` is an unsigned int, and `ulong` is an unsigned long
`nint` and `nuint` use the platform they're running on (32 or 64 bit). Only use this if working directly with platform
details (eg memory addresses)

`float` and `double` are the same as Java
`decimal` is an extremely precise 128-bit float, accurate up to 28-29 digits, with a "small" range of 10^-28 to 10^28

`bool` is the same as Java `boolean`
`char` cannot be directly treated as a 16-bit integer like it can in Java, but it can be cast

`object` is Java `Object` (any reference type)

`string` is Java `String` (immutable reference type, array of `char`s)

[Nullability](./nullability): Primitives can be `null`

MS docs:

- [Integral Numeric Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)
- [Floating-Point Numeric Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types)
- [Reference Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types)
