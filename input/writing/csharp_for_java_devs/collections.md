Collections are always a reference type stored on the heap, even if the contained type is a value type

Collection expressions `[]` can be used for all collections, not just arrays

You can use a spread element `..` to place collection values in a collection expression

```c#
int[] arr = [1, 2, 3];  
List<int> list = [5, 6, 7];  
List<int> list2 = [0, ..arr, 4, ..list, 8];
Console.WriteLine(list2[3]); // Outputs 3
```

Collections can be indexed from the end via `^`, where `^1` is the last element

```c#
List<int> list = [1, 2, 3, 4, 5];  
Console.WriteLine(list[^2]); // Outputs 4
```

They can also be indexed via a range `a..b` where `a` is inclusive and `b` is exclusive. If either operand is not
present (eg `..b`), it will be replaced with the inclusive start or the exclusive end

```c#
List<int> list = [1, 2, 3, 4, 5, 6, 7, 8];
List<int> subset = list[2..^3]; // [3, 4, 5]  
List<int> subset2 = list[^4..]; // [5, 6, 7, 8]
```

You can create a multidimensional array adding commas to the declaration. Multidimensional array declarations use `{}`

```c#
int[,] arr2d = { {1, 4, 2}, {3, 6, 8} };  
Console.WriteLine(arr2d[1, 2]); // Outputs 8

int[,,] arr3d = {  
    { { 1, 2, 3}, {4, 5, 6} },  
    { { 7, 8, 9}, {10, 11, 12} },
    { { 13, 14, 15}, {16, 17, 18} }  
};  
Console.WriteLine(arr3d[2, 1, 1]); // Outputs 17
```

`Dictionary<TKey, TValue>` is equivalent to Java's `HashMap<K, V>`

`Span<T>` is a `ref struct` that provides a type-safe and memory-safe view into a contiguous region of arbitrary memory,
allowing for a snapshot of elements without copying them. It can be used to implement similar behavior to Java's
`subList`

`Memory<T>` is similar to `Span<T>`, but it is not a `ref struct`, and therefore can be placed on the managed heap

Other collections: `ArrayList`, `ImmutableArray<T>`, `SortedList`, `LinkedList<T>`, `ImmutableList<T>`, `HashSet<T>`,
`FrozenSet<T>`, `SortedSet<T>`, `ImmutableHashSet<T>`, `Queue<T>`, `ConcurrentQueue<T>`, `ImmutableQueue<T>`,
`SortedDictionary<TKey, TValue>`,  `KeyedCollection<TKey, TItem>`, `Stack<T>`, `ConcurrentStack<T>`,
`ImmutableStack<T>`, `StringCollection`, `StringDictionary`, `ListDictionary`, `Hashtable`

Most of these are extremely niche. The only ones that you will likely use commonly are `Array`, `List<T>`, and
`Dictionary<TKey, TValue>`

Also see: [Tuples](./tuples), [Pattern Matching](./pattern_matching)

MS docs:

- [Arrays](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/arrays)
- [Collections](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/collections)
- [Selecting a Collection Class](https://learn.microsoft.com/en-us/dotnet/standard/collections/selecting-a-collection-class)
