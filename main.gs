//loading()でイベントのスプレッドシートのデータを格納します。
function loading() {
    var ss = SpreadsheetApp.openById("1yLVxxzQRWSteAnTBmPrCUCZtWOmTEHXonOIFe0CKKXQ");
    var listss = ss.getSheetByName("イベント");
    var lastrow = listss.getLastRow();
    var list = listss.getRange(2, 1, lastrow-1, 1).getValues();
    return list;
}

// showEventParticipant(event)で選択されたイベントの参加者のリストを返す
function showEventParticipant(event){
  var sheet = SpreadsheetApp.openById("1B1QR-Qku1pgY-Wm0409RKUMhkZAZ9pDsRhchdDDxezk");
  var ss = sheet.getSheets()[0];
  var nicknameSheet = sheet.getSheets()[1];
  var lastRow = ss.getLastRow();
  var nicknameLastRow = nicknameSheet.getLastRow();
  var participant = [];
  for(var i=1; i<=lastRow+1; i++){
    if(ss.getRange(i,3).getValue() == event){
      for(var j=1; j<=nicknameLastRow+1; j++){
        if(nicknameSheet.getRange(j,1).getValue() == ss.getRange(i,1).getValue()){
          participant.push(nicknameSheet.getRange(j,3).getValue());
        }
      }
    }
  }
  return participant;
}


// HTML画面を表示するために必要
function doGet() {
    const htmlOutput = HtmlService.createTemplateFromFile('index').evaluate();
    htmlOutput
      .setTitle('かんしゃら隊列作成')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    return htmlOutput;
}


