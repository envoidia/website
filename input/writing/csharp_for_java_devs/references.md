You can use `ref` to pass or declare a value type as a reference

```c#
int a = 1;  
ref int b = ref a;

Console.WriteLine(a); // Outputs 1  
Console.WriteLine(b); // Outputs 1  

b = 2;  

Console.WriteLine(a); // Outputs 2  
Console.WriteLine(b); // Outputs 2  

a = 3;  

Console.WriteLine(a); // Outputs 3  
Console.WriteLine(b); // Outputs 3
```

Method parameters may use the following keywords to force arguments to be passed as a specific type of reference, with
the following modifications:
`ref`: Argument must be initialized
`ref readonly`: Argument must be initialized. The method cannot assign a new value to it
`out`: Argument may not be initialized. The method must assign a new value to it
`in`: Argument must be initialized. The method cannot assign a new value to it. The compiler might create a temporary
copy of it

`out` parameters are often used as a way of creating methods with multiple return values ([tuples](./tuples) can also
be used for this purpose)

```c#
Dictionary<string, int> someDictionary = new();
someDictionary.Add("someKey", 10);
bool success = someDictionary.TryGetValue("someKey", out int returnVal);
Console.WriteLine(success); // Outputs true
Console.WriteLine(returnVal); // Outputs 10
```

MS docs:

- [ref](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ref)
- [ref Structure Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/ref-struct)
- [Method Parameters](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/method-parameters)
