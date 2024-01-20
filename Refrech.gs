function Refrech() {
  let card2 = CardService.newCardBuilder()
  var sec1 = CardService.newCardSection()

  var action1 = CardService.newAction()
    .setFunctionName('onGmailMessage')

  var textButton1 = CardService.newTextButton()
    .setText("Refrech")
    .setOnClickAction(action1)
    .setBackgroundColor("#482ff7")
    .setTextButtonStyle(CardService.TextButtonStyle.FILLED)

  sec1.addWidget(textButton1)
  card2.addSection(sec1)
  return card2.build();
}

