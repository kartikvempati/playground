import AjaxUtils from 'ajax_utils';
import querystring from 'querystring';

export default {
  searchCraigslist: function(query) {
    let queryObj = {
      search: query
    };

    return AjaxUtils.get(`/craigslist/search?${querystring.stringify(queryObj)}`);
  }
}
