function getEle(id) {
  return document.getElementById(id);
}

var themSo = [];
getEle("btnthemSo").addEventListener("click", function () {
  var number = getEle("soNguyen").value * 1;
  themSo.push(number);
  getEle("footernhapSo").innerHTML = themSo;
});

var themSoA = [];
getEle("btnthemSoA").addEventListener("click", function () {
  var number = getEle("soNguyenA").value * 1;
  themSoA.push(number);
  getEle("footernhapSoA").innerHTML = themSoA;
});

//Tính tổng số dương

getEle("btnTong").addEventListener("click", function () {
  var tongSD = 0;
  for (var i = 0; i < themSo.length; i++) {
    if (themSo[i] > 0) {
      tongSD += themSo[i];
    }
  }
  getEle("footerTong").innerHTML = "Tổng số nguyên dương là: " + tongSD;
});

//Đếm có bao nhiêu số dương

getEle("btnDemSo").addEventListener("click", function () {
  var demSoDuong = 0;
  for (var i = 0; i < themSo.length; i++) {
    if (themSo[i] > 0) {
      demSoDuong++;
    }
  }
  getEle("footerDemSo").innerHTML = "Tổng số dương là: " + demSoDuong;
});

//Tìm số nhỏ nhất trong mảng

getEle("btnsoNhoNhat").addEventListener("click", function () {
  var min = themSo[0];
  for (var i = 1; i < themSo.length; i++) {
    if (min > themSo[i]) {
      min = themSo[i];
    }
  }
  getEle("footersoNhoNhat").innerHTML = "Số nhỏ nhất là: " + min;
});

//Tìm số dương nhỏ nhất trong mảng

getEle("btnsoDuongNhoNhat").addEventListener("click", function () {
  var minDuong = themSo[0];
  for (var i = 1; i < themSo.length; i++) {
    if (themSo[i] > 0 && minDuong > themSo[i]) {
      minDuong = themSo[i];
    }
  }
  getEle("footersoDuongNhoNhat").innerHTML =
    "Số dương nhỏ nhất là: " + minDuong;
});

//Tìm số chẵn

getEle("btnTimSoChan").addEventListener("click",function(){
    var kq = -1;
    for(var i = themSo.length - 1; i >= 0; i--){
        if(themSo[i] % 2 == 0){
            kq = themSo[i];
        }
        break;
    }
    getEle("footertimSoChan").innerHTML = "Số chẵn cuối mảng là: " + kq;
});

//Đổi chỗ 2 giá trị trong mảng

// getEle("btndoiViTri").addEventListener("click",function(){
//   var input_1 = getEle("txt1").value * 1;
//   var input_2 = getEle("txt2").value * 1;
//   var temp =  a[input_1];
//   var res = '';
//   if(input_1 < 0 || input_1 >=a.length) result = false;
//   else if(input_2 < 0 || input_2 >=a.length) result = false;
//   else{
//     a[input_1] = a[input_2];
//     a[input_2] = temp;
//     res = a.join("");
//   }
// });

//Sắp xếp mảng tăng dần

getEle("btnSapXep").addEventListener("click",function(){
  var tmp = 0;
  for (var i = 0; i < themSo.length - 1; i++) {
    for (var j = i + 1; j < themSo.length; j++) {
      if (themSo[i] > themSo[j]) {
        tmp = themSo[i];
        themSo[i] = themSo[j];
        themSo[j] = tmp;
      }
    }
  }
  document.getElementById("footerSapXep").innerHTML = "Mảng sắp xếp theo thứ tự tăng dần" + themSo;
});

//Tìm số nguyên tố

getEle("btntimSoNguyenTo").addEventListener("click",function(){
  var kq = 0;
  for(i = 0; i < themSo.length; i++){
    var count = 0;
    var check = themSo[i];
    for(j = 2; j <= Math.sqrt(check); j++){
      if(check % j === 0){
        count++;
      }
    }
    if(count === 0 && check > 1){
      kq +=  check;
      break;
    }else if(count === 1){
      kq = -1;
    }
  }
  getEle("footerSoNguyenTo").innerHTML = "Số nguyên tố đầu tiên là: " + kq;
});

//So sánh tổng dương và tổng âm

getEle("btnsoSanhDuongAm").addEventListener("click",function(){
  var tongSoDuong = 0;
  var tongSoAm = 0;
  var kq ="";
  for(i = 0; i < themSo.length; i++){
    if(themSo[i] > 0){
      tongSoDuong++;
    }else if(themSo[i] < 0){
      tongSoAm++;
    }
  }
  if(tongSoDuong > tongSoAm){
    kq = "Tổng phần tử số dương là:" + tongSoDuong + " > " + "Tổng phần tử số âm là:" + tongSoAm;
  }else if(tongSoDuong < tongSoAm){
    kq = "Tổng phần tử số dương là:" + tongSoDuong + " < " + "Tổng phần tử số âm là:" + tongSoAm;
  }else{
    kq = "Tổng phần tử số dương là:" + tongSoDuong + " = " + "Tổng phần tử số âm là:" + tongSoAm;
  }
  getEle("footersoSanhTongDuongAm").innerHTML = kq;
});

//Tìm số nguyên trong mảng số thực
getEle("btnsoThuc").addEventListener("click",function(){
  var count = 0;

  for (var i = 0; i < themSo.length; i++) {
    if (Number.isInteger(themSo[i]) == true) count ++;
  }

  getEle("footersoThuc").innerHTML = count;
});

//Hoán đổi vị trí

getEle("btnSwap").addEventListener("click",function(){
  // var input_1 = getEle("viTriA").value * 1;
  // var input_2 = getEle("viTriB").value * 1;
  // var temp =  themSoA[input_1];
  // var res = '';
  // if(input_1 < 0 || input_1 >=themSoA.length) result = false;
  // else if(input_2 < 0 || input_2 >=themSoA.length) result = false;
  // else{
  //   themSoA[input_1] = themSoA[input_2];
  //   themSoA[input_2] = temp;
  //   res = themSoA.join("");
  // }

  var input_1 = getEle("viTriA").value*1;
  var input_2 = getEle("viTriB").value*1;
  var temp = themSoA[input_1];
  if(input_2 <= themSoA.length){
    input_2 = input_1;
    input_1
  }
});