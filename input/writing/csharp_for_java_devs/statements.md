`if`, `else`, `for`, `do`, `while`, `break`, `continue`, `return`, `try`, `catch`, and `finally` are the same as Java.
However, loops cannot be labeled

`catch` can use `when` to specify a condition that must be true for the `catch` to execute

`foreach` is the same as Java's `for each`. `await foreach` can be used to consume an asynchronous stream of data

`goto` can be used to move to a statement that is marked by a label. In switch statements, `goto case` can be used to
jump to a different `case`. `goto` should generally be avoided. There are some cases where it is justified, but only use
it if you know what you're doing

`checked {}` blocks can be used to create an area in which an integer overflow will throw an `OverflowException`. You
can also change the `CheckForOverflowUnderflow` compiler option to make everything checked by default, and use
`unchecked {}` blocks to suspend the checks

```c#
uint a = uint.MaxValue;

try {
	checked {
		Console.WriteLine(a + 1);
	}
} catch (OverflowException e) {
	Console.WriteLine(e.Message); // Outputs Arithmetic operation resulted in an overflow.
}
```

You can define a separate `checked` version of an [operator overload](./operator_overloading) with
`operator checked`, which will be called in `checked` context instead of the regular operator. This is only needed if
you want to have different behavior in `checked` context -- usually, the regular operator works fine

`lock {}` can be used to acquire a mutual-exclusion field for a given object and execute a statement, for multithreading
safety

`using {}` can be used to acquire and dispose of an acquired `IDisposable` instance

`yield return` provides the next value in iteration, and `yield break` signals the end of iteration

Also
see: [Switch Statements and Expressions](./switch_statements_and_expressions), [Operator Overloading](./operator_overloading)

MS docs:

- [Statements](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements)
- [when](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/when)
