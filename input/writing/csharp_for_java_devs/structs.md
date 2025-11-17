Structs, unlike classes, are value types, meaning they do not have object headers, are passed by value, and are
allocated on the stack rather than the heap (unless part of a [collection](./collections))

They do not support inheritance, but they can implement interfaces

They should only be used for small, simple data that is commonly created and destroyed

Most programmers will never create their own struct, but it's important to understand how the ones in libraries you're
using work

`record struct` can be used to declare a struct that is a record
`ref struct` can be used to declare a struct that cannot escape to the heap

todo struct marshalling info

Also
see: [Classes](./classes), [Enums](./enums), [Extensions](./extensions), [Interfaces](./interfaces), [Object Initializers](./object_initializers)

MS docs:

- [Structure Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct)
- [ref Structure Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/ref-struct)
- [Records](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)
- [Customizing Structure Marshalling](https://learn.microsoft.com/en-us/dotnet/standard/native-interop/customize-struct-marshalling)
