function DApp(obj) { 
  //PropertiesService.getUserProperties().deleteProperty("Sheet") 
  //var value = PropertiesService.getUserProperties().setProperty("Sheet","1AtCrMOcTT1b7JgIin1vobceY_hWmlqGW43BSIzAT_ZQ");
  var value = PropertiesService.getUserProperties().getProperty("Sheet");
  Logger.log(value !== null)
  var names = obj.Name                                               // Ce variable contient le Nom et le prenom et l'email exite dans le champ From
  var reg = /(.+)( )/g;                                              // Ce variable est un regex qui regroupe une chaine de caractaire a deux groupes
  if(names.match(reg) != null){
      var name = names.match(reg)[0]                                    // Ce variable permet de separe le nom et le prenom dans un groupe 
  }else{
      var name = " "                                // Ce variable permet de separe le nom et le prenom dans un groupe 
  }

  if(value === null || value === undefined){  
    return Add();
  }else{   
    //"1AtTPRZvdC_GF0yIk7jOLZf25YA3-oOkN-KNhJ1ngT5I"  
  var ss = SpreadsheetApp.openById(value)
  SpreadsheetApp.setActiveSpreadsheet(ss);
  sheet = SpreadsheetApp.setActiveSheet(ss.getSheets()[0]);
  var textFinder = ss.createTextFinder(obj.id);
  var firstOccurrence = textFinder.findNext();
  var cardSection1Divider1 = CardService.newDivider();                     // Declaration d'un divider 

  var card = CardService.newCardBuilder()                                          // declaration d'une Card
  var section = CardService.newCardSection()                               // Declaration d'une CardSection 
  var Nothing = CardService.newAction().setFunctionName('Nothing');      // Cet function ne fait rien 
  section.addWidget(CardService.newTextButton()
    .setText("Contact Details")
    .setOnClickAction(Nothing)) 
  var decoratedTextName = CardService.newDecoratedText()
      .setText(name)
      .setStartIcon(CardService.newIconImage()
        .setIconUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUepaBdMZtoy5GmiKF_v1vkRbwo3MgxAiIwcaztDaqiYwLdV58jhq19hUX00btfdkBUF8&usqp=CAU"))

  section.addWidget(decoratedTextName)

  var decoratedTextEmail = CardService.newDecoratedText()
      .setText(obj.email)
      .setStartIcon(CardService.newIconImage()
        .setIconUrl("https://cdn-icons-png.flaticon.com/512/2374/2374459.png"))

  section.addWidget(decoratedTextEmail)

  if(firstOccurrence != null){
      Logger.log(firstOccurrence.getValue())

    var row = firstOccurrence.getRow();
    var rowData = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues();
    var data = rowData[0];
    Logger.log(data[1])

  section.addWidget(cardSection1Divider1)                             // Ce divider pour l'organisation et le design 
  var Nothing = CardService.newAction().setFunctionName('Nothing');      // Cet function ne fait rien 
  section.addWidget(CardService.newTextButton()
    .setText("Input Details")
    .setOnClickAction(Nothing))                                         // Design de text 

  var Herr_Input =  CardService.newDecoratedText()
      .setText(data[5])
      .setStartIcon(CardService.newIconImage()
        .setIconUrl("https://w7.pngwing.com/pngs/371/108/png-transparent-computer-icons-user-interface-business-management-business-people-love-service-people.png"))

  var Phone_Input =  CardService.newDecoratedText()
      .setText(data[8])
      .setStartIcon(CardService.newIconImage()
        .setIconUrl("https://openclipart.org/image/2000px/262221"))

  var Company_Input = CardService.newDecoratedText()
      .setText(data[6])
      .setStartIcon(CardService.newIconImage()
        .setIconUrl("https://cdn-icons-png.flaticon.com/512/2083/2083337.png"))


  var Address_Input = CardService.newDecoratedText()
      .setText(data[7])
      .setStartIcon(CardService.newIconImage()
        .setIconUrl("https://www.pngfind.com/pngs/m/128-1288122_marker-circle-comments-address-icon-clipart-hd-png.png"))

  var Tax_Input = CardService.newDecoratedText()
      .setText(data[9])
      .setStartIcon(CardService.newIconImage()
        .setIconUrl("https://cdn-icons-png.flaticon.com/512/3408/3408755.png"))

  section.addWidget(Herr_Input)
  section.addWidget(Phone_Input)
  section.addWidget(Company_Input)
  section.addWidget(Address_Input)
  section.addWidget(Tax_Input)
//  section.addWidget(radioGroup)

  var action = CardService.newAction()
    .setFunctionName('Contact')
    .setParameters({ Name: obj.Name, email: obj.email})
    .setLoadIndicator(CardService.LoadIndicator.SPINNER)

  var textButton = CardService.newTextButton()
    .setText("Submit")
    .setOnClickAction(Nothing)
    .setBackgroundColor("#EBEBE4")
    .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
    .setDisabled(true)

  section.addWidget(textButton)

  section.addWidget(cardSection1Divider1)                             // Ce divider pour l'organisation et le design 
  var Nothing = CardService.newAction().setFunctionName('Nothing');      // Cet function ne fait rien 
  section.addWidget(CardService.newTextButton()
    .setText("Job Preference")
    .setOnClickAction(Nothing))                                         // Design de text 

 var decoratedTextid = CardService.newDecoratedText()
      .setText(obj.id)
      .setStartIcon(CardService.newIconImage()
        .setIconUrl("https://e7.pngegg.com/pngimages/417/875/png-clipart-computer-icons-encapsulated-postscript-id-card-miscellaneous-text-thumbnail.png"))

  section.addWidget(decoratedTextid)

   var decoratedTextStatus = CardService.newDecoratedText()
      .setText(data[3])
      .setStartIcon(CardService.newIconImage()
        .setIconUrl("https://www.pngfind.com/pngs/m/75-756588_png-file-single-user-icon-png-transparent-png.png"))

  section.addWidget(decoratedTextStatus)
          
 var decoratedTextFolder = CardService.newDecoratedText()
      .setText(data[4])
      .setStartIcon(CardService.newIconImage()
        .setIconUrl("https://cdn-icons-png.flaticon.com/512/78/78686.png"))

  section.addWidget(decoratedTextFolder)
  }
  else{
    
  section.addWidget(cardSection1Divider1)                             // Ce divider pour l'organisation et le design 
  var Nothing = CardService.newAction().setFunctionName('Nothing');      // Cet function ne fait rien 
  section.addWidget(CardService.newTextButton()
    .setText("Input Details")
    .setOnClickAction(Nothing))                                         // Design de text 

  var payment = CardService.newSelectionInput()
  .setType(CardService.SelectionInputType.DROPDOWN)
  .setTitle("Herr")
  .setFieldName("Herr")
  .addItem("Herr", "Herr", true)
  .addItem("Frau", "Frau", false)
 // .setOnChangeAction(CardService.newAction().setFunctionName("onModeChange"));

  var Phone_Input = CardService.newTextInput()
    .setFieldName("Phone")
    .setTitle("Please enter your Phone Number")

  var Note_Input = CardService.newTextInput()
    .setFieldName("Note")
    .setMultiline(true)
    .setTitle("Please enter your Note")

  var Company_Input = CardService.newTextInput()
    .setFieldName("Company")
    .setTitle("Please enter company")

  var Address_Input = CardService.newTextInput()
    .setFieldName("Address")
    .setTitle("Please enter Address")
    
  var Tax_Input = CardService.newTextInput()
    .setFieldName("Tax")
    .setTitle("Please enter Tax id")

  var radioGroup = CardService.newSelectionInput()
  .setType(CardService.SelectionInputType.DROPDOWN)
  .setTitle("Types")
  .setFieldName("Types")
  .addItem("Status", "Status", true)
  .addItem("Anfrage", "Anfrage", false)
  .addItem("verhandlung", "verhandlung", false)
  .addItem("bestellt", "bestellt", false)
  .addItem("versendet", "versendet", false)

  section.addWidget(payment);
  section.addWidget(Phone_Input)
  section.addWidget(Company_Input)
  section.addWidget(Address_Input)
  section.addWidget(Tax_Input)
  section.addWidget(Note_Input)
  section.addWidget(radioGroup)

  var Sheet = CardService.newAction()
    .setFunctionName('Sheet')
    .setParameters({name: name, email: obj.email, id: obj.id, date: obj.date, attachements: obj.atts})
    .setLoadIndicator(CardService.LoadIndicator.SPINNER);

  var textButton = CardService.newTextButton()
    .setText("Submit")
    .setOnClickAction(Sheet)
    .setBackgroundColor("#482ff7")
    .setTextButtonStyle(CardService.TextButtonStyle.FILLED)

  section.addWidget(textButton)   
  }
  card.addSection(section)
  return card.build(); 
  } 
}