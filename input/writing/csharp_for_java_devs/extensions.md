Extensions allow you to add methods to an existing type without modifying it, so they can be called with `this` syntax

```c#
extension(string str) {
	public int WordCount() => str.Split([' ', '.', '?'], StringSplitOptions.RemoveEmptyEntries).Length;
}

Console.WriteLine("Lorem ipsum dolor".WordCount()); // Outputs 3
```

Extensions can be made for any type, including enums

MS docs:

- [Extensions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/extension)
- [Extensions Guide](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods)
- [Enum Extensions](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/how-to-create-a-new-method-for-an-enumeration)
