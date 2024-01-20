function Add() {
  var cardSection1Divider1 = CardService.newDivider();
  let card1 = CardService.newCardBuilder()
  var sec = CardService.newCardSection()

  var decoratedTextContact = CardService.newDecoratedText()
    .setText("Add your ID of google sheet")
    .setStartIcon(CardService.newIconImage().setIcon(CardService.Icon.DESCRIPTION))

  sec.addWidget(decoratedTextContact)
  sec.addWidget(cardSection1Divider1)

  var API_Input = CardService.newTextInput()
    .setFieldName("SKey")
    .setTitle("Please enter your Token Key")

  sec.addWidget(API_Input)
  
  var action = CardService.newAction()
    .setFunctionName('Cache')
    .setLoadIndicator(CardService.LoadIndicator.SPINNER)

  var textButton = CardService.newTextButton()
    .setText("Submit")
    .setOnClickAction(action)
    .setBackgroundColor("#482ff7")
    .setTextButtonStyle(CardService.TextButtonStyle.FILLED)

  sec.addWidget(textButton)
  card1.addSection(sec)
  return card1.build();
}
