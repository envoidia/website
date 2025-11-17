Interfaces can have static fields

They can have [properties](./properties), which implementing classes must provide

Interface default methods do not use the `default` keyword

When implementing an interface method, you do not use the `override` keyword

Interfaces can have `static abstract` and `static virtual` members (todo more detail)

You can create an explicit interface implementation that is only called through the specified interface

```c#
public class SampleClass : IControl, ISurface {
    void IControl.Paint() {
        System.Console.WriteLine("IControl.Paint");
    }
    void ISurface.Paint() {
        System.Console.WriteLine("ISurface.Paint");
    }
}
```

Also see: [Classes](./classes), [Enums](./enums), [Extensions](./extensions), [Structs](./structs)

MS docs:

- [Interface Overview](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface)
- [Interface Guide](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/)
