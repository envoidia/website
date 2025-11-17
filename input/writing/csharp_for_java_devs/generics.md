Unlike Java, C# generics are reified, meaning their type is known at runtime, and they can be value types and not just
objects

Constraints:
`where`: Specifies constraints
`in`: Specifies a contravariant type parameter
`out`: Specifies a covariant type parameter
`new`: Specifies that a type argument must have a public parameterless constructor
`unmanaged`: Limits to unmanaged types
`class`: Limits to classes
`struct`: Limits to structs
`ref struct`: Limits to ref structs
`notnull`: Limits to non-nullable types
`default`: Complicated;
see [docs](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/where-generic-type-constraint)
for details (todo explain here)

In this case, `Foo`'s `T` must extend `Bar` and have a public parameterless constructor, and `U` must be a `struct`:

```c#
public class Foo<T, U>
	where T : Bar<T>, new()
	where U : struct
{}
```

MS docs:

- [Generics Docs](https://learn.microsoft.com/en-us/dotnet/standard/generics/)
- [Generics Guide](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/generics)
- [Where](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/where-generic-type-constraint)
