var casper = require('casper').create({
  viewportSize: { width: 1024, height: 768 }
});

var rootUrl = 'http://drywall.herokuapp.com/';

casper.start(rootUrl, function() {
  this.evaluate(function(){
    $('code').remove();
  });

  this.then(function(){
    this.capture('./screens/01.png');
  });
});

casper.thenOpen(rootUrl +'about/', function() {
  this.capture('./screens/02.png');
});

casper.thenOpen(rootUrl +'signup/', function() {
  this.capture('./screens/03.png');
});

casper.thenOpen(rootUrl +'contact/', function() {
  this.capture('./screens/04.png');
});

casper.thenOpen(rootUrl +'login/', function() {
  this.capture('./screens/05.png');
});

casper.thenOpen(rootUrl +'login/forgot/', function() {
  this.capture('./screens/06.png');
});

casper.thenOpen(rootUrl +'login/reset/xyz/', function() {
  this.capture('./screens/07.png');
});

casper.thenOpen(rootUrl +'login/', function() {
  this.fill('form', { username: 'root', password: 'h3r00t' });
  this.click('form button');
  this.waitFor(
    function check() {
      return (/\/admin\//.test(this.getCurrentUrl()));
    },
    function then() {
      this.click('.dropdown-toggle');
      this.capture('./screens/08.png');
    }
  );
});

casper.thenOpen(rootUrl +'admin/statuses/', function() {
  this.capture('./screens/09.png');
  
  this.click('.btn-details');
  this.waitFor(
    function check() {
      return (/\/statuses\/.*?\//.test(this.getCurrentUrl()));
    },
    function then() {
      this.capture('./screens/10.png');
    }
  );
});

casper.thenOpen(rootUrl +'admin/categories/', function() {
  this.capture('./screens/11.png');
  
  this.click('.btn-details');
  this.waitFor(
    function check() {
      return (/\/categories\/.*?\//.test(this.getCurrentUrl()));
    },
    function then() {
      this.capture('./screens/12.png');
    }
  );
});

casper.thenOpen(rootUrl +'admin/users/', function() {
  this.capture('./screens/13.png');
  
  this.click('.btn-details');
  this.waitFor(
    function check() {
      return (/\/users\/.*?\//.test(this.getCurrentUrl()));
    },
    function then() {
      this.capture('./screens/14.png');
    }
  );
});

casper.thenOpen(rootUrl +'admin/accounts/', function() {
  this.capture('./screens/15.png');
  
  this.click('.btn-details');
  this.waitFor(
    function check() {
      return (/\/accounts\/.*?\//.test(this.getCurrentUrl()));
    },
    function then() {
      this.capture('./screens/16.png');
    }
  );
});

casper.thenOpen(rootUrl +'admin/administrators/', function() {
  this.capture('./screens/17.png');
  
  this.click('.btn-details');
  this.waitFor(
    function check() {
      return (/\/administrators\/.*?\//.test(this.getCurrentUrl()));
    },
    function then() {
      this.capture('./screens/18.png');
    }
  );
});

casper.thenOpen(rootUrl +'admin/admin-groups/', function() {
  this.capture('./screens/19.png');
  
  this.click('.btn-details');
  this.waitFor(
    function check() {
      return (/\/admin-groups\/.*?\//.test(this.getCurrentUrl()));
    },
    function then() {
      this.capture('./screens/20.png');
    }
  );
});

casper.thenOpen(rootUrl +'logout/', function() {
});

casper.thenOpen(rootUrl +'login/', function() {
  this.fill('form', { username: 'jimmyf', password: 'test' });
  this.click('form button');
  this.waitFor(
    function check() {
      return (/\/account\//.test(this.getCurrentUrl()));
    },
    function then() {
      this.capture('./screens/21.png');
    }
  );
});

casper.thenOpen(rootUrl +'account/settings/', function() {
  this.capture('./screens/22.png');
});

casper.run();
