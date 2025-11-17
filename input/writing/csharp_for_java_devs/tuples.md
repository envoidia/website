A tuple is an arbitrarily-sized collection of arbitrary variables stored as a value type. They are commonly used as
method return types to avoid using [`out` method parameters](./references)

```c#
(double, int) tuple = (4.5, 3);
Console.WriteLine($"Tuple of {t1.Item1} and {t1.Item2}."); // Outputs Tuple of 4.5 and 3
```

Tuple items can be given names via various means:

```c#
(short a, char b, float c) tuple = (6, 'x', 8.5);

(short, char, float) tuple = (a: 6, b: 'x', c: 8.5);

short a = 6;
char b = 'x';
float c = 8.5;
(short, char, float) tuple = (a, b, c);
```

All three of the above tuple definitions result in items named `a`, `b`, and `c`. Even with explicit names, you can also
use the default names (`Item1` and etc)

You can set an alias for a tuple type with a `using` or `global using` directive

```c#
using TupleName = (int a, char b);

TupleName tuple = (30, 'x');
Console.WriteLine(tuple.b); // Outputs x
```

To create a tuple that is a reference type, you can create an instance of the `System.Tuple` class

Tuples have built-in [deconstructors](./deconstructors)

```c#
(int a, string b, uint c, sbyte d) = someTuple;
```

Tuples should be used sparingly. In most cases, it is better to use a [class](./classes) or [struct](./structs)

MS docs:

- [Tuple types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples)
- [Deconstructors](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/deconstruct)
