When a [class](./classes) or [struct](./structs) can be indexed like a collection, you define an indexer so that it
can be indexed with `a[b]` notation

```c#
public class SampleCollection<T> {
   // Declare an array to store the data elements.
   private T[] arr = new T[100];

   // Define the indexer
   public T this[int i] {
      get => arr[i];
      set => arr[i] = value;
   }
}
```

You can define a read-only indexer as an expression-bodied member without needing the `get` keyword

```c#
public T this[int i] => arr[i];
```

MS docs:

- [Indexers](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/indexers/)
