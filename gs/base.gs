function onOpen(){
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('NODRIZA')
    .addSubMenu(ui.createMenu('Import')
      .addItem('Leads', 'importLeads')
      .addItem('Companies', 'importCompanies')
      .addItem('Proposals', 'importProposals'))
    .addSubMenu(ui.createMenu('Export')
      .addItem('Products', 'exportProducts')
      .addItem('Categories', 'exportCategories')
      .addItem('Taxes', 'exportTaxes')
      .addItem('Users', 'exportUsers')
      .addSeparator()
      .addItem('Custom Products Tab', 'exportCustomProductsTab'))
     .addSeparator()
     .addItem('About', 'about')
    .addToUi()
}

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
  },
  user: {
    primaryKey: 'email',
    schema: {
    }
  }
}

function exportCustomProductsTab () {
  var sheetName = Browser.inputBox('Type the tab name to import in products:', '', Browser.Buttons.OK_CANCEL);
  export([{sheetName: sheetName, model: 'product'}])
}

function exportProducts () {
 export([{sheetName: 'Products', model: 'product'}])
}

function exportCategories () {
 export([{sheetName: 'Categories', model: 'category'}])
}

function exportTaxes () {
 export([{sheetName: 'Taxes', model: 'tax'}])
}

function exportUsers () {
 export([{sheetName: 'Users', model: 'user'}])
}

function export (jobs) {

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
    var created = 0
    var updated = 0
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
        log(res)
        var params = {
          "headers": headers,
          'contentType': 'application/json',
          'payload': JSON.stringify(json)
        }
        if (res && res.length > 0) {
          params.method = 'PUT'
          var id = (primaryKey === 'email') ? res[0].id : json[primaryKey]
          log(id)
          var response = UrlFetchApp.fetch(url + id, params)
          updated++
        } else {
          params.method = 'POST'
          var response = UrlFetchApp.fetch(url, params)
          created++
        }
      }
    } // Data loop
    toast(created + ' created, ' + updated + ' updated of ' +  (data.length - 1) + ' records in ' + modelName + ' loaded from ' + sheetName + ' tab')
  } // Jobs Loop
}

function log (srt) {
  Logger.log(srt)
}

function toast (msg){
  SpreadsheetApp.getActiveSpreadsheet().toast(msg, 'NODRIZA', -1);
}

function about () {
  toast('Version 1.0 - 2019/05/06')
}
