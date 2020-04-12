//loading()でイベントのスプレッドシートのデータを格納します。
function loading() {
    var ss = SpreadsheetApp.openById("1yLVxxzQRWSteAnTBmPrCUCZtWOmTEHXonOIFe0CKKXQ");
    var listss = ss.getSheetByName("イベント");
    //最終行を調べる
    var lastrow = listss.getLastRow();
    //1列目最終行までを二次元配列に入れています。
    var list = listss.getRange(2, 1, lastrow-1, 1).getValues();

  　Logger.log(list);
    return list;
}

// showEventParticipant(event)で選択されたイベントの参加者のリストを返す
function showEventParticipant(event){
  var sheet = SpreadsheetApp.openById("1B1QR-Qku1pgY-Wm0409RKUMhkZAZ9pDsRhchdDDxezk");
  var ss = sheet.getSheets()[0];
  var nicknameSheet = sheet.getSheets()[1];
  var lastRow = ss.getLastRow();
  var nicknameLastRow = nicknameSheet.getLastRow();
  var date = new Date();
  var count = lastRow + 2;
  var participant = [];
  var participantNumber = 0;
  for(var i=1; i<=lastRow+1; i++){
    if(ss.getRange(i,3).getValue() == event){
      for(var j=1; j<=nicknameLastRow+1; j++){
        if(nicknameSheet.getRange(j,1).getValue() == ss.getRange(i,1).getValue()){
          participant.push(nicknameSheet.getRange(j,3).getValue());
        }
      }
    }
  }
  Logger.log(participant);
  return participant;
}


// HTML画面を表示するために必要
function doGet() {
    var html = HtmlService.createTemplateFromFile('index');
    return html.evaluate();
}


