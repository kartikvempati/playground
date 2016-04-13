import AjaxUtils from 'ajax_utils';
import querystring from 'querystring';


export default {
  searchCraigslist: (function() {
    var timeout;
    return function(query) {
      let queryObj = {
        search: query
      };
      return new Promise(resolve){
        var wait = 250;
        var later = function() {
            AjaxUtils.get(`/craigslist/search?${querystring.stringify(queryObj)}`).then(response, error) {
              resolve(response);
          };
        }
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          return AjaxUtils.get(`/craigslist/search?${querystring.stringify(queryObj)}`);
        }, wait);
      };
    }
  })()
}
