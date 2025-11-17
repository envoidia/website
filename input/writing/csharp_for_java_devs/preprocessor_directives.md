Preprocessor directives are instructions that are processed on compilation and then erased. They are similar to macros,
but they cannot be used to create traditional macros. They are also similar to Java annotations

`#define SYMBOLNAME` is used to define a symbol. It cannot have a value, it can only exist or not exist

`#if`, `#elif`, `#else`, and `#endif` can be used to only compile specific sections of code if a specified symbol is
defined

There are numerous automatically generated symbols, including symbols for specific net versions and platforms, `DEBUG` (
set in debug mode), and `TRACE` (enables tracing)

```c#
#define KEEP_DEBUG_MODE_IN_RELEASE

bool debugMode = false;

#if (DEBUG || KEEP_DEBUG_MODE_IN_RELEASE)
	Console.WriteLine("Enabling debug mode");
	debugMode = true;
#endif
```

`#error`, `#warning`, and `#line` allows you to generate errors and warnings

`#region RegionName` and `#endregion` creates collapsible regions. If you're using this, you should consider whether
it's better to split the code into multiple files instead

`#pragma warning disable/restore` allows you to suppress/restore certain warnings at certain sections of code

`#pragma checksum` generates checksums for the given source file

Preprocessor directives can also be used to generate `.csproj` files, which is used for creating file-based apps (
programs that can be run from a single source file)

MS docs:

- [Preprocessor Directives](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/preprocessor-directives)
