Harlem Shaker
========
- Harlem Shaker is a JavaScript bookmarklet and site source includer for your site to play music and make various site components dance.
- Harlem Shaker runs on recent versions of Firefox, Chrome, and Safari only.
- The bookmarklet is a link you drag and drop into your browser's bookmark toolbar or bookmarks and is activated when you visit any website and click the bookmark.
- The site source includer is a copy and paste script you place in your site's head.  It is dormant until activated by using the standard "Konami Code" ( ↑ ↑ ↓ ↓ ← → ← → b a ).

Bookmarklet
-----------
Drag and drop the link found at [Include.RD.To](http://include.rd.to/harlem_shaker/) to your bookmark toolbar or add it to your bookmarks.

Site Including
-------------
    // Harlem Shaker Embedded Konami Code (https://github.com/AppliedEllipsis/harlem_shaker/)
    <script>
    var fileref=document.createElement('script');
    fileref.setAttribute('type','text/javascript');
    fileref.setAttribute('src', 
        document.location.protocol.replace(/file|chrome|about|config/,'http') + 
        '//include.rd.to/harlem_shaker/embed.js');
    document.getElementsByTagName('head')[0].appendChild(fileref);
    </script>
     
Notes
------------
- If you are going to host your own version, your site will need https to support https sites.  
- Most browsers will block injection as a secure source is requesting an insecure URL.
- Also the embeder by default will use the protocol of the source page.
- We could use //include.rd.to in the JavaScript source, but it will not support remotely hosted scripts and locally hosted file:// URL's.
- The other protocols in the urls are not compatible due to security policies, but left in.
- The bookmarklet is setup for remote site injection to allow future updates.

Credits
------------
- The code originally came from [Moovweb](http://blog.moovweb.com/2013/02/happy-valentines-day-internet-behold-the-harlem-shake-bookmarklet/)
- Moovweb's [GitHub](https://github.com/moovweb/harlem_shaker/)
- This version is at [Include.RD.To](http://include.rd.to/harlem_shaker/)
- Include.RD.To's [GitHub](https://github.com/AppliedEllipsis/harlem_shaker/)

License
------------
- I do not know what the original code was released under.
- I am assuming it is an undefined open license since it was on GitHub and with no guarantees or warranties and the creators and editors cannot be held responsible for anything.