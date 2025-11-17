Anonymous types can only be created with [object initializers](./object_initializers). They are typically used
in [LINQ expressions](./linq_expressions)

```c#
var v = new { Amount = 108, Message = "Hello" };
Console.WriteLine(v.Amount + v.Message); // Outputs 108Hello
```

You can use local variables to declare an anonymous type, and their name will be taken without having to specify it
again

Anonymous types should be using sparingly. In most cases, it is better to use
a [class](./classes), [struct](./structs), or [tuple](./tuples)

MS docs:

- [Anonymous Types](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/anonymous-types)
