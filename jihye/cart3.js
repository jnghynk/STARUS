//로컬에서 배열을 가지고 옴
var buylist = JSON.parse(localStorage.getItem('buyList'));
console.log(buylist);
//동적테이블
var listrow = document.querySelector('#listrow');

//함수로 바꿔서
function buy(){
var tbody = '';
for (var i = 0; i < buylist.length; i++) {
    //tbody += members[i].makeHtml(i);

    tbody += '<tr>';
    tbody += ' <td>' + buylist[i].name + '</td>';
    tbody += ' <td>' + buylist[i].price + '</td>';
    tbody += ' </tr>';
    tbody += ' <tr>';
    tbody += ' <td>' + buylist[i].hotice + '</td>';
    tbody += '<td>';
    tbody += '<div class="minus" id="'+1000+i+'"></div>';
    tbody += '<div class="num1" >'+buylist[i].count+'</div>';
    tbody += '<div class="plus" id="'+i+'"></div>';
    tbody += '</td>';
    tbody += '</tr>';

}

listrow.innerHTML = tbody;
}
buy();




$('#text5').click(function(){
        alert("준비중입니다^^");
    
})

//버튼

$(".plus").click(function() {
  /*  alert(this.id);*/
    //숫자로 바꾸기
    var now = Number(this.id);
    /*alert(now);*/
    //now를 숫자로 바꾼후
    //코드를불러 
    buylist[now].count+=1;
    buy();
});
$(".minus").click(function() {
   var now = Number(this.id)-10000;
  /*  alert(now);*/
    buylist[now].count-=1;
    console.log(buylist);
    
    buy();

});

//금액부분
var money =0; 
var sum = 0;

for(var i = 0; i < buylist.length; i++) {

    money = Number(buylist[i].count)*Number(buylist[i].price);
    sum+=money;
}

text3.innerHTML=sum+'원';



//결제하기localStorage.setItem('buyList', JSON.stringify(buylist));