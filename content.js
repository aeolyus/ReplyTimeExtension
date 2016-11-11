chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");
      var lastMessage=$('div').end().find('._1t_q').html();
      console.log(lastMessage);
    }
  }
);