

var keyLocalStorageGiohang = 'danhSachItemGioHang';

/* mô tả: tạo nhanh đối tượng item giỏ hàng
    input: id sản phẩm và số lượng sản phẩm
    output: đối tương item giỏ hàng
*/


function taoDoiTuongItemGioHang(idSanPham, soLuong, anh) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    itemGioHang.anh = anh;
    

    return itemGioHang;
}

/* mô tả: lấy thông tin giỏ hàng từ loacal storage
    input: 
    output: giỏ hàng item giỏ hàng
*/
function layGioHangTuLocalStorage() {
    danhSachItemGioHang = new Array();
    /* lấy chuổi  json của danh sách item lên */
    var jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorageGiohang);

    /* chuyển json thành danh sách item giỏ hàng */
    if(jsonDanhSachItemGioHang != null)
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);


       
    return danhSachItemGioHang;

    
}


function luuGioHangXuongLocalStorage(danhSachItemGioHang) {
    /* b1 chuyển đối tượng thành json */
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);

    /* b2 lưu json xuống local storage */
    localStorage.setItem(keyLocalStorageGiohang, jsonDanhSachItemGioHang);
}


 function onclickRemove(idSanPham) {
     
     
 }
 