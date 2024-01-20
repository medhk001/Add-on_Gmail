function onGmailMessage(e) {
  var messageId = e.gmail.messageId;
  var accessToken = e.gmail.accessToken;
  GmailApp.setCurrentMessageAccessToken(accessToken);
  var message = GmailApp.getMessageById(messageId);
  var msgDate = message.getDate();
  var formattedDate = Utilities.formatDate(msgDate, "GMT+0", 'E MM/dd/yyyy');
  var rfcHeaderFrom = message.getHeader("From");
  var rfcHeaderFromMailRegex = /[^< ]+(?=>)/g;
  var obj = {};
  obj.message = message;
  obj.msgId = messageId;
  obj.id = message.getId();
  obj.Name = message.getFrom();
  obj.subj = message.getSubject();
  obj.Body = message.getPlainBody();
  obj.date = formattedDate;
  // var attachment = message.getAttachments()[0];
  if (message.getAttachments()[0] != undefined) {
    var att = message.getAttachments()[0];
    obj.att = att;
    obj.atts = att.getName();
  } else {
    obj.atts = "No attachements"
  }
  if (rfcHeaderFrom.match(rfcHeaderFromMailRegex) != null) {
      obj.email = rfcHeaderFrom.match(rfcHeaderFromMailRegex)[0];
  }else{
      obj.email = rfcHeaderFrom;
  }
  return DApp(obj);
}