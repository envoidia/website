`unsafe` declares an unsafe context, in which pointers and various other unsafe operations can be utilized. This should
only be used when absolutely necessary, which is not very often. If you're unsure if you need to use `unsafe`, you don't

`unsafe` context should be as small as possible

MS docs:

- [unsafe](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unsafe)
- [Pointer-Related Operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/pointer-related-operators)
- [stackalloc](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/stackalloc)
- [fixed](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/fixed)
