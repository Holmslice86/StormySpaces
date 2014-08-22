using System.Web.Optimization;

namespace StormySpaces.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/Scripts/base").Include(
                       "~/Scripts/App/Dependencies/angular-route.js",
                       "~/Scripts/App/app.js",
                       "~/Scripts/App/app-config.js").
                       IncludeDirectory("~/Scripts/App/Repositories/", "*.js").
                       IncludeDirectory("~/Scripts/App/Services/", "*.js").
                       IncludeDirectory("~/Scripts/App/Controllers/", "*.js"));

            bundles.Add(new StyleBundle("~/Content/base").Include(
                "~/Content/site.css"
                ));
        }

    }
}