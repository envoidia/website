The equivalent to Java's streams. Can be written as methods or as keywords.

Allows the following keywords:
`from`, `where`, `select`, `group`, `into`, `orderby`, `join`, `let`, `in`, `on`, `equals`, `by`, `ascending`, and
`descending`

```c#
// Keywords:
IEnumerable<int> orderingQuery =
    from num in numbers
    where num is < 3 or > 7
    orderby num
    select num;
    
// Methods:
IEnumerable<int> orderingQuery = numbers  
    .Where(num => num is < 3 or > 7)  
    .OrderBy(num => num);
```

MS docs:

- [LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/linq/)
- [Query Keywords](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/query-keywords)


