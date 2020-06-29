const song = {'author' : 'Rain', 'date' : '2020-05-31', 'title':'깡'};
const {author,date,title} = song;
console.log(author,date,title);

const {author:name, date:time, title:jemok} = song;
console.log(name,time,jemok);

//json 에서 destructing 하기 위해 많이 씀

const kakao = {
 "tid": "T1234567890123456789",
 "cid": "TC0ONETIME",
 "status": "SUCCESS_PAYMENT",
 "partner_order_id": "partner_order_id",
 "partner_user_id": "partner_user_id",
 "payment_method_type": "MONEY",
 "item_name": "초코파이",
 "quantity": 1,
 "amount": {
  "total": 2200,
  "tax_free": 0,
  "vat": 200,
  "point": 0,
  "discount": 0
 },
 "canceled_amount": {
  "total": 0,
  "tax_free": 0,
  "vat": 0,
  "point": 0,
  "discount": 0
 },
 "cancel_available_amount": {
  "total": 2200,
  "tax_free": 0,
  "vat": 200,
  "point": 0,
  "discount": 0
 },
 "created_at": "2016-11-15T21:18:22",
 "approved_at": "2016-11-15T21:20:48",
 "payment_action_details": [
   {
    "aid": "A5678901234567890123",
    "payment_action_type": "PAYMENT",
    "payment_method_type": "MONEY",
    "amount": 2200,
    "point_amount": 0,
    "discount_amount": 0,
    "approved_at": "2016-11-15T21:20:48"
   }
  ]
}

//구매 품목(item_name), 가격(amount.total), 구매 날짜(apprroved_at)
console.log(typeof kakao)
const {item_name:item, amount: {total:tota} , approved_at:appdate} = kakao;
console.log(item,tota,appdate);