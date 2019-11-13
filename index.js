function response(room, msg, sender, isGroupChat, replier, imageDB) {
    var day=new Date;
    var fullmonth=day.getMonth()+1;
    var fullday=day.getFullYear()+"-"+fullmonth+"-"+day.getDate()+"/"+day.getHours()+"시 "+day.getMinutes()+"분 "+day.getSeconds()+"초";

    if(msg.startsWith("우분투 코드제출 ")){
        FileStream.write("storage/emulated/0/katalkbot/GitHub/"+sender+"///"+fullday,msg.replace("우분투 코드제출 ",""));
        replier.reply("코드 제출 완료. 승인될 시 별도 전달");
    }

    if(msg=="우분투 리스폰스기본"){
        replier.reply("function response(room, msg, sender, isGroupChat, replier, imageDB) {} 저 중괄호 사이에 코드 작성");
    }

}