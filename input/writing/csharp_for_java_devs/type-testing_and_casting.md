Cast expressions (`(type) variable`) are the same as Java

`is` is usually equivalent to `==`, but cannot be overloaded. It respects inheritance rather than being exact

`as` is similar to a cast expression, but cannot throw an exception or perform a user-defined conversion

`typeof(type)` obtains the type

```c#
public class Animal {}
public class Giraffe : Animal {}


object b = new Giraffe();
Console.WriteLine(b is Animal);  // Output: true
Console.WriteLine(b.GetType() == typeof(Animal));  // Output: false

Console.WriteLine(b is Giraffe);  // Output: true
Console.WriteLine(b.GetType() == typeof(Giraffe));  // Output: true
```

User-defined implicit and explicit type conversions can be created like so:

```c#
public readonly struct Digit {

    private readonly byte digit;

    public Digit(byte digit) {
        if (digit > 9) {
            throw new ArgumentOutOfRangeException(nameof(digit), "Digit cannot be greater than nine.");
        }
        
        this.digit = digit;
    }

    public static implicit operator byte(Digit d) => d.digit;
    public static explicit operator Digit(byte b) => new Digit(b);

    public override string ToString() => $"{digit}";
}

Digit d = new Digit(7);

byte number = d;
Console.WriteLine(number);  // Output: 7

Digit digit = (Digit) number;
Console.WriteLine(digit);  // Output: 7
```

MS docs:

- [Type-Testing and Casting](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/type-testing-and-cast)
