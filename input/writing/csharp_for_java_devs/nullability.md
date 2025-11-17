Add `<Nullable>enable</Nullable\>` to your `.csproj` file to enable global null safety

Suffixing a type with `?` in variable declaration indicates that it may be null

In order to check if a variable is nullable, use `IsNullable(typeof(variable))`

A suffix of `!` when assigning a variable can be used for null forgiveness. Avoid using this in most cases

```c#
string? nullable = null;
string notNull = "abc";
notNull = nullable!; // Will probably cause bugs
```

Pattern matching (`is`, `is not`) is preferred over equality expressions (`==`, `!=`)

`??` returns the left-hand operand if it isn't null, and the right-hand operand if it is

`??=` assigns the value of its right-hand operand to its left-hand operand if its left-hand operand is null

```c#
int? a = null;

Console.WriteLine(a is null); // Outputs true
Console.WriteLine(a ?? 3); // Outputs 3

a ??= 5; // a is now 5
a ??= 10; // a is still 5

Console.WriteLine(a ?? 8); // Outputs 5
```

`?.` and `?[]` can be used to access or assign a member or element only if it isn't `null`, and are short-circuiting (a
chain of operations will stop at a fail)

MS docs:

- [Nullable Reference Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types)
- [Nullable Value Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-value-types)
- [Null-Coalescing Operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-coalescing-operator)
- [Member Access Operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators)
