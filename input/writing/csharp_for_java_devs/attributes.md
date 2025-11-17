Attributes are the equivalent of Java's Annotations; they give hints and instructions to the compiler and static
analysis tools. It's primarily used to mark elements as Obsolete, Deprecated, etc

You can autogenerate a method that matches Regex like so:

```c#
[GeneratedRegex("abc|def", RegexOptions.IgnoreCase, "en-US")]
private static partial Regex AbcOrDefGeneratedRegex();
```

todo more detail

MS docs:

- [Attributes](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/attributes/global)
