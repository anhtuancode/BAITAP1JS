// BÀI TẬP 1 
// MÔ HÌNH 3 LỚP
// KHỐI 1: INPUT

/*
LƯƠNG 1 NGÀY = 100000
SỐ NGÀY LÀM 
LƯƠNG = LƯƠNG 1 NGÀY * SỐ NGÀY LÀM
*/

// KHỐI 2 : CÁC BƯỚC XỬ LÍ

/* 
BƯỚC 1: TẠO BIẾN DAY, SALARY1DAY, SALARY
BƯỚC 2: GÁN GIÁ TRỊ CHO BIẾN DAY, SALARY1DAY
BƯỚC 3: TÍNH SALARY
BƯỚC 4: IN KẾT QUẢ RA MÀN HÌNH
*/

// KHỐI 3: OUTPUT

/*
LƯƠNG 1 NGÀY
SỐ NGÀY LÀM
LƯƠNG
*/

var day = 28;
var salary1day = 100000;
var salary = 0;

salary = day * salary1day;

console.log("BÀI TẬP 1")
console.log("LƯƠNG 1 NGÀY: " + salary1day);
console.log("SỐ NGÀY LÀM: " + day);
console.log("LƯƠNG: " + salary);

// BÀI TẬP 2
// MÔ HÌNH 3 LỚP
// KHỐI 1: INPUT

/*
NHẬP VÀO 5 SỐ THỰC
GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ THỰC
*/

// KHỐI 2 : CÁC BƯỚC XỬ LÍ

/* 
BƯỚC 1: TẠO BIẾN A,B,C,D,E,sumTB
BƯỚC 2: GÁN GIÁ TRỊ CHO BIẾN A,B,C,D,E
BƯỚC 3: TÍNH sumTB
BƯỚC 4: IN KẾT QUẢ sumTB RA MÀN HÌNH
*/

// KHỐI 3: OUTPUT

/*
GIÁ TRỊ TB CỦA 5 SỐ THỰC
*/

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var sumTB = 0;

sumTB = (a+b+c+d+e) / 5;

console.log("BÀI TẬP 2")
console.log("GIÁ TRỊ TRUNG BÌNH: " + sumTB);

// BÀI TẬP 3
// MÔ HÌNH 3 LỚP
// KHỐI 1: INPUT

/*
USD = 23500 VND
SỐ USD CHUYỂN SANG NVD
*/

// KHỐI 2 : CÁC BƯỚC XỬ LÍ

/* 
BƯỚC 1: TẠO BIẾN USD, VND, sotien
BƯỚC 2: GÁN GIÁ TRỊ CHO BIẾN USD, VND
BƯỚC 3: TÍNH sotien
BƯỚC 4: IN KẾT QUẢ sotien RA MÀN HÌNH
*/

// KHỐI 3: OUTPUT

/*
GIÁ TRỊ sotien SAU QUY ĐỔI
*/

const USD = 23500;
var sotien = 30;
var VND = 0;

VND = sotien * USD

console.log("BÀI TẬP 3")
console.log("GIÁ TRỊ USD SAU KHI ĐỔI SANG VND: " + VND);

// BÀI TẬP 4
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    CHIỀU DÀI
    CHIỀU RỘNG 
*/

// Khối 2: CÁC BƯỚC XỬ LÍ
/*
    B1: TẠO BIẾN chieudai, chieurong, CV, S
    B2: GÁN GIÁ TRỊ CHO BIẾN chieudai, chieurong
    B3: TÍNH CV
    B4: TÍNH S
    B5: IN KẾT QUẢ CV, S RA MÀN HÌNH
*/

// Khối 3: OUTPUT
/*
    CHU VI
    DIỆN TÍCH
*/

var chieudai = 5; 
var chieurong = 4;
var CV = 0;
var S = 0;

CV = (chieudai + chieurong) * 2;
S = chieudai * chieurong;

console.log("BÀI TẬP 4")
console.log("CHU VI CỦA HÌNH CHỮ NHẬT LÀ: " + CV)
console.log("DIỆN TÍCH CỦA HÌNH CHỮ NHẬT LÀ: " + S)

// BÀI TẬP 4
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    1 SỐ CÓ 2 CHỮ SỐ
*/

// Khối 2: CÁC BƯỚC XỬ LÍ
/*
    B1: TẠO BIẾN SUM, SO
    B2: GÁN GIÁ TRỊ CHO BIẾN SO
    B3: TÍNH SUM
    B5: IN KẾT QUẢ SUM RA MÀN HÌNH
*/

// Khối 3: OUTPUT
/*
    SUM
*/

var so = 27;
var sum = 0;

sum = so % 10; Math.floor(so/10);

console.log("BÀI TẬP 5");
console.log("Tổng : " + sum);