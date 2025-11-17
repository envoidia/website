The discard `_` can be used to [pattern match](./pattern_matching) any pattern, or declare an unused variable in [
`out` arguments](./references), lambda expression parameters, and deconstruction arguments

`$` defines an interpolated string literal, a string with embedded expressions using `{a}`. If you start an interpolated
string literal with multiple `$`, any sequence of braces shorter than the number of `$` is embedded in the resulting
string. To embed an expression, use the same number of braces as `$`

```c#
int a = 5;
int b = 10;
Console.WriteLine($"a is {a} and b * 3 + a is {b * 3 + a}"); // Outputs a is 5 and b * 3 + a is 35
```

The verbatim identifier `@` defines a verbatim string literal, a string where most escape sequences are interpreted
literally. The only sequences that are not interpreted literally are quote escape sequences and interpolated string
brace escape sequences

```c#
// These both produce the same string
string filename1 = @"c:\documents\files\u0066.txt";
string filename2 = "c:\\documents\\files\\u0066.txt";
```

It can also be used as a prefix for a name

```c#
extension(int @this) {}
```

A sequence of at least 3 quotes can be used to define a raw string literal, which can contain any text without escaping.
They can contain a sequence of up to 1 less than the amount of quotes they are declared with

```c#
"""""
This is a multi-line
string with spaces and indentation that can contain """"
	This line is indented
The syntax highlighting doesn't understand this
"""""
```

MS docs:

- [Tokens](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens)
