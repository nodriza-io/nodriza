var u = {
  getByName: function (sheet, colName, row) {
    var data = sheet.getDataRange().getValues()
    var col = data[0].indexOf(colName)
    if (col != -1) {
      return data[row-1][col]
    }
  },
  isBol: function(val) {
    return !val || val === 'FALSE' || val === 'false' ? false : true
  }
}

var models = {
  category: {
    primaryKey: 'slug',
    schema: {
      disabled: u.isBol
    }
  },
  tax: {
    primaryKey: 'slug',
    schema: {
    }
  },
  product: {
    primaryKey: 'sku',
    schema: {
      disabled: u.isBol,
      hidePrice: u.isBol
    }
  }
}

var jobs = [
  {
    sheetName: 'Categories',
    model: 'category',
  },
  {
    sheetName: 'Taxes',
    model: 'tax',
  },
  {
    sheetName: 'Products',
    model: 'product',
  }
]

function export () {

  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  var configSheet = activeSpreadsheet.getSheetByName("Configuration")
 
  var nodrizaDomain = u.getByName(configSheet, "Nodriza Domain", 2)
  var endpoint = 'https://' + nodrizaDomain  + '.nodriza.io'
  var apiKey = u.getByName(configSheet, "Nodriza API Key", 2)
  var headers = {'Authorization' : 'Bearer ' + apiKey }
  
  for (var y = 0; y < jobs.length; y++) {
	var job = jobs[y]
    var sheetName = job.sheetName
    var modelName = job.model
    var primaryKey = models[modelName].primaryKey || 'id';
    var schema = models[modelName].schema || {}
    var sheet = activeSpreadsheet.getSheetByName(sheetName)
    var data = sheet.getDataRange().getValues()
    var url = endpoint + '/v1/' + modelName + '/'
    log('-----')
    log(url)
    var cols;
    for (var i = 0; i < data.length; i++) {
      var row = data[i]
      var json = {}
      // Get Headers
      if (i === 0) {
        cols = data[i]
      } else {
      // Populate JSON
        for (var j = 0; j < cols.length; j++) {
           var col = cols[j]
           var val = row[j]
           var fn = schema[col]
           if (fn) val = fn(val)
           json[col] = (val === '') ? null : val
        }
        var params = {"method": "GET", "headers": headers}
        var getUrl = url + '?' + primaryKey + '=' + json[primaryKey]
        var res = UrlFetchApp.fetch(getUrl, params)
        res = JSON.parse(res)
        var params = {
          "headers": headers,
          'contentType': 'application/json',
          'payload': JSON.stringify(json)
        }
        if (res && res.length > 0) {
          params.method = 'PUT'
          var response = UrlFetchApp.fetch(url + json[primaryKey], params)
        } else {
          params.method = 'POST'
          var response = UrlFetchApp.fetch(url, params)
        }
      }
    } // Data loop
  } // Jobs Loop
}

function log (srt) {
  Logger.log(srt);
}
  
