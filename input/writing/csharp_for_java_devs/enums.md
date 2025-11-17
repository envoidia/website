Unlike Java enums, C# enums cannot contain fields/[properties](./properties) or methods. However, they can
have [extensions](./extensions)

Unlike Java, enums have a backing value type (default `int`) and can be cast (eg `(SomeEnum) 10` and
`(int) SomeEnumMember`). These casts should usually be avoided (especially to the enum type)

The backing type can be changed with `:` syntax

Each enum member can also be assigned a specific value:

```c#
enum Color : ushort {
    Red,        // 0
    Green = 10, // 10
    Blue        // 11
}
```

Also see: [Classes](./classes), [Interfaces](./interfaces), [Structs](./structs)

MS docs:

- [Enums](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum)
