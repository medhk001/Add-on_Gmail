function Cache(e) {
   var cardx = CardService.newCardBuilder()
  var sect = CardService.newCardSection()

  var Nothing = CardService.newAction()
    .setFunctionName('Nothing');

  sect.addWidget(CardService.newTextButton()
    .setText('Congratulation your API was added correctly')
    .setOnClickAction(Nothing))

    let v = e.formInput.SKey
  
  // Store a value
    PropertiesService.getUserProperties().setProperty("Sheet", v);

  var actionx = CardService.newAction()
    .setFunctionName('onGmailMessage')

  var textButtonx = CardService.newTextButton()
    .setText("Back")
    .setOnClickAction(actionx)
    .setBackgroundColor("#482ff7")
    .setTextButtonStyle(CardService.TextButtonStyle.FILLED)

  sect.addWidget(textButtonx)
  cardx.addSection(sect)
  return cardx.build();
}
