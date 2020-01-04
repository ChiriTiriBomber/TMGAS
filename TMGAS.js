function getTime(){
  //日付等々の取得
  var hoged = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss');
  return(hoged);
}

function doPost(e){
  //Slackのtokenは必ず変数名をtokenにすること!
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var verify_token = "token of hook";
  var name = "bi_jo";
  //デフォルト:woman: :man:にしておく
  var icon = ":woman:";
  //チャンネル指定したい場合はここで変数定義してpostする際にその変数を使ってあげればよい
  //var channel = "#gas";
  if(verify_token != e.parameter.token){
    throw new Error("管理者に問い合わせてください");
  }  
  
  //ライブラリのやつにトークンを定義してあげる
  var app = SlackApp.create(token);
  //発言したユーザーのtextを取得
  var post = e.parameter.text;
  //後で書き込む際に状態が分かりやすいようフラグを立てておく
  var flag;
  //文字列を格納したいので""を忘れずに
  var text = "";
  //caseの数だけ定義 最小値はどうせ1固定
  var max = 3;
  //case1~nにしたいので0オリを防ぐよう+1 ここでは1～3をランダムで選出
  var rn = 1 + Math.floor(Math.random() * max);
  
  //もしもpostした内容に**が含まれていたら構文 indexOfで文字列のマッチングを行う
  if(post.indexOf("開始") != -1){
    //flag = 1;
    switch(rn){
      case 1:
        text = "今日も頑張ってね♪";
        break;
      case 2:
        text = "張り切っていこう♪";
        break;
      case 3:
        icon = ":man:";
        text = "負け犬から馬の骨に昇格させてやる";
        break;
    }
  }
  if(post.indexOf("休憩") != -1){
    //flag = 1;
    switch(rn){
      case 1:
        text = "休憩も大事♪";
        break;
      case 2:
        text = "頑張りすぎには注意だぞ♪";
        break;
      case 3:
        icon = ":man:";
        text = "最低でも10時間勉強してから声をかけてくれ";
        break;
    }
  }
  if(post.indexOf("再開") != -1){
    //flag = 1;
    switch(rn){
      case 1:
        text = "待ってたよ～♪";
        break;
      case 2:
        text = "さあ、頑張ってこ～♪";
        break;
      case 3:
        icon = ":man:";
        text = "たとえ100万時間あろうとも、貴様と交わす言葉はただ一言・・・。はよ帰ってこんかいこのバカタレ";
        break;
    }
  }
  if(post.indexOf("終了") != -1){
    //flag = 1;
    switch(rn){
      case 1:
        text = "お疲れ様なのね♪";
        break;
      case 2:
        text = "今日はたくさん頑張りましたねっ♪";
        break;
      case 3:
        icon = ":man:";
        //user_nameを指定してあげれば投稿したユーザー名を使用することも可能
        text = e.parameter.user_name + "よ…貴様の散り様…最後に勉強家として認めてやる!";
        break;
    }
  }
  //e.parameter.channel_idとするとこで、投稿があったチャンネルに返すようにできる
  return app.postMessage(e.parameter.channel_id, text,{
    username: name,
    //icon_urlでURL指定の画像をアイコンにする
    icon_emoji: icon 
  });
}

//スプレッドシートに書き込む準備
function setSheet(){
  
}