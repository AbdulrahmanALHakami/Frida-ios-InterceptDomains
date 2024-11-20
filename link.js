if (ObjC.available) {
    console.log("[*] Hooking and intercept URLs...");


    var NSURLSession = ObjC.classes.NSURLSession;
    if (NSURLSession) {
        Interceptor.attach(NSURLSession["- dataTaskWithRequest:completionHandler:"].implementation, {
            onEnter: function (args) {
                var request = ObjC.Object(args[2]);
                var url = request.URL().absoluteString().toString();
                console.log("[NSURLSession] Request to URL: " + url);
            }
        });

        Interceptor.attach(NSURLSession["- dataTaskWithURL:completionHandler:"].implementation, {
            onEnter: function (args) {
                var url = ObjC.Object(args[2]).absoluteString().toString();
                console.log("[NSURLSession] Direct URL Request to: " + url);
            }
        });
    } else {
        console.log("[!] NSURLSession not found.");
    }

  
    var CFNetwork = Module.findExportByName(null, "CFNetworkCopyProxiesForURL");
    if (CFNetwork) {
        Interceptor.attach(CFNetwork, {
            onEnter: function (args) {
                var url = ObjC.Object(args[0]).absoluteString();
                console.log("[CFNetwork] Request to URL: " + url);
            }
        });
    } else {
        console.log("[!] CFNetwork not found.");
    }
} else {
    console.error("Objective-C runtime not available.");
}

