/*

::::::::: ::::::::::: ::::::::  
:+:    :+:    :+:    :+:    :+: 
+:+    +:+    +:+    +:+        
+#++:++#:     +#+    +#++:++#++ 
+#+    +#+    +#+           +#+ 
#+#    #+#    #+#    #+#    #+# 
###    ###    ###     ########  

*/


var items = $("section");
var ul = $('.bs-docs-sidenav');
$(items).each(function () {
    var item = $(this);
    ul.append('<li><a href="#' + item.attr("id") + '"><i class="icon-chevron-right"></i>' + $("h1", item).text() + " " + $(".page-header .lead", item).text() + '</a></li>');
});
$("li:first", ul).addClass("active");


