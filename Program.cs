using Statiq.Highlight;
using Statiq.Minification;

namespace Website;

/* todo:
       - fix header formatting on mobile (black border, directory pushed too far up)
*/
public static class Program {
    public static async Task<int> Main(string[] args) => await Bootstrapper
        .Factory
        .CreateWeb(args)

        // Prevent removal of underscores from filenames
        .AddSetting(WebKeys.OptimizeContentFileNames, false)
        
        .ModifyPipeline("Content", builder => {
            // Highlight code
            // todo: improve (fix strings, possibly full roslyn + colored brackets)
            builder.PostProcessModules.Add(new HighlightCode());

            // Replace {{ UPDATE_DATE }} with current date
            builder.PostProcessModules.Add(new ReplaceInContent("{{ UPDATE_DATE }}", _ =>
                DateTime.Now.ToString("dd MMM yyyy")));
            
            // Minify HTML
            builder.PostProcessModules.Add(new MinifyHtml());
        })
        
        // Minify CSS (Will execute on every file it's given, so filter to actual CSS files first)
        // todo: minify more aggressively (single-character class names)
        .ModifyPipeline("Assets", builder => { 
            builder.PostProcessModules.Add(new ExecuteIf(Config.FromDocument(doc => 
                doc.Destination.FileName.ToString().EndsWith(".css")), new MinifyCss()));
        })
        
        .RunAsync();
}