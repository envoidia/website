Functions can be expression-bodied rather than block-bodied. They can also be local (contained within another function)

```c#
public string GetGlyph(InputDevice inputDevice) => FormatSingleGlyph(button.GetSingleGlyph(), inputDevice);
```

Function parameters can have default values, which you can omit. You can specify specific ones to include when calling the function

```c#
private int Foo(int bar, char lorem = 'a', string ipsum = "dolor", ulong sit = 12, bool isAmet = false) {}

Foo(10);  
Foo(10, 'a', "abc", 500, true);  
Foo(10, ipsum: "abcde", isAmet: true);
```

Lambdas are `=>` rather than `->`. Lambdas can be declared `static`

`delegate` defines a delegate type, which stores a function. In most cases, just use the stdlib `Action` and `Func` delegates. Defining a custom delegate just lets you give it a unique type and param names

`event` defines an event, which is a delegate type that listeners can subscribe to. todo event details

`add`, `remove` defines a custom event accessor

MS docs:

- [Expression-Bodied Members](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/expression-bodied-members)
- [Local Functions](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/local-functions)
