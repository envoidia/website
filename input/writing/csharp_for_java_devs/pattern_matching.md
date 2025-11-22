Type patterns `variable is type` can be used to check a type

Declaration patterns can be used to declare new local variables

```c#
object greeting = "Hello, World!";
if (greeting is string message) {
    Console.WriteLine(message);  // Outputs Hello, World!
}
```

Patterns can be used in [switch statements and expressions](./switch_statements_and_expressions). The discard
pattern `_` matches any expression (can only be used in switch expressions, not statements)

```c#
public static int GetSourceLabel<T>(IEnumerable<T> source) => source switch {
    Array array => 1,
    ICollection<T> collection => 2,
    _ => 3
};

int[] numbers = [10, 20, 30];
Console.WriteLine(GetSourceLabel(numbers));  // Outputs 1

List<char> letters = ['a', 'b', 'c', 'd'];
Console.WriteLine(GetSourceLabel(letters));  // Outputs 2
```

Patterns can use relational operators

```c#
public static string GetSeason(DateTime date) => date.Month switch {
    >= 3 and < 6 => "spring",
    >= 6 and < 9 => "summer",
    >= 9 and < 12 => "autumn",
    12 or (>= 1 and < 3) => "winter",
    _ => throw new ArgumentOutOfRangeException(nameof(date), $"Unexpected month: {date.Month}"),
};

Console.WriteLine(GetSeason(new DateTime(2026, 3, 14)));  // Outputs spring
Console.WriteLine(GetSeason(new DateTime(2026, 7, 19)));  // Outputs summer
Console.WriteLine(GetSeason(new DateTime(2026, 2, 17)));  // Outputs winter
```

You can use a property pattern to match an expression's [Properties](./properties) or fields

```c#
public bool IsNearChristmas(DateTime date) =>
	date is { Month: 12, Day: >= 21 and <= 25 };
```

When pattern matching with [tuples](./tuples), you can match each component individually

```c#
public bool IsCelebratingHoliday(bool celebratesChristmas, bool celebratesHalloween, DateTime date) => (celebratesChristmas, celebratesHalloween, date) switch {
    (true, _, { Month: 12, Day: >= 21 and <= 25 }) => true,
    (_, true, { Month: 10, Day: >= 25 and <= 31 }) => true,
    _ => false
};
```

You can also assign variables in a pattern

```c#
public static Point Transform(Point point) => point switch {
    { X: 0, Y: 0 }            => new Point(0, 0),
    (int x, int y) when x < y => new Point(x + y, y),
    (int x, int y) when x > y => new Point(x - y, y),
    (int x, int y)            => new Point(2 * x, 2 * y),
};
```

[Collections](./collections) can be matched against a sequence of patterns. The slice pattern `..` can be used to match
at the start or end

```c#
int[] arr = [1, 2, 3, 4, 5];

Console.WriteLine(arr is [1, 2, 3, 4, 5]);  // Outputs True
Console.WriteLine(arr is [1, 2, 3, 4, 5, 6]);  // Outputs False
Console.WriteLine(arr is [1, 2, ..]);  // Outputs True
Console.WriteLine(arr is [0 or 1, <= 2, >= 3, ..]);  // Outputs True
```

Elements can also be captured:

```c#
List<int> numbers = [1, 2, 3];

if (numbers is [var int, _, _]) {
    Console.WriteLine($"The first element of a three-item list is {first}.");
}
```

You can nest a subpattern within a slice pattern

```c#
void Validate(int[] numbers) {
    var result = numbers is [< 0, .. { Length: 2 or 4 }, > 0] ? "valid" : "invalid";
    Console.WriteLine(result);
}

Validate([-1, 0, 1]);  // Outputs invalid
Validate([-1, 0, 0, 1]);  // Outputs valid
Validate([-1, 0, 0, 0, 0, 1]);  // Outputs valid
```

MS docs:

- [Patterns](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/patterns)
- [Pattern Matching](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)
