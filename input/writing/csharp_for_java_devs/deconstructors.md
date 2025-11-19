You can create a deconstructor for a class by creating the method `Deconstruct`. All parameters must be `out`. You can
have as many overloads of `Deconstruct` as you want, but they must all have different argument counts

```c#
public void Deconstruct(out int a, out double b, out string c) {
    a = this.A; 
    b = this.B; 
    c = this.C;
}

// Usage (creates variables foo, bar, and lorem equal to someVar's A, B, and C):
(int foo, double bar, string lorem) = someVar;
```

MS docs:

- [Deconstructors](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/deconstruct)
