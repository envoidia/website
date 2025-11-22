Switch statements are the same as Java, but can use [pattern matching](./pattern_matching)

`goto case` can be used to jump to a different `case`. You generally shouldn't use this

Switch expressions are declared with slightly different syntax. They can take up an entire function body. `_` matches
`default`

You may add case guards that must be matched alongside patterns with `when` and a boolean value

```c#
public static Point Transform(Point point) => point switch {
	{ X: 0, Y: 0 } => new Point(0, 0),
	X < Y => new Point(X + Y, Y),
	X > Y => new Point(X - Y, Y),
	_ => new Point(2 * X, 2 * Y),
};
```

MS docs:

- [Switch Statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements#the-switch-statement)
- [Switch Expression](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/switch-expression)
