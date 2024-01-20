function Sheet(e) {
  var attachments = e.parameters.attachements
  var Id = e.parameters.id
  var msg = GmailApp.getMessageById(Id);
  var name = e.parameters.name
  var Date = e.parameters.date
  var Status = e.formInput.Types
  var mail = e.parameters.email
  var Address = e.formInput.Address
  var Company = e.formInput.Company
  var Phone = e.formInput.Phone
  var Tax = e.formInput.Tax
  var Note= e.formInput.Note
  var Herr= e.formInput.Herr
  var Data = [Id,name,mail,Status,Note,Herr,Company,Address,Phone,Tax,];
  var vals = PropertiesService.getUserProperties().getProperty('Sheet')
  var val = String(vals);

  var ss = SpreadsheetApp.openById(val); 
  SpreadsheetApp.setActiveSpreadsheet(ss);
  sheet = SpreadsheetApp.setActiveSheet(ss.getSheets()[0]);
  sheet.appendRow(Data);
  return Refrech();
}
