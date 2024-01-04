let items = [
    ["Išmanusis telefonas Xiaomi Redmi Note 12 Pro 5G 6GB+128GB, Juodas (Midnight Black)","https://www.varle.lt/static/uploads/products/572/xia/xiaomi-redmi-note-12-pro-5g-6128gb-juodas.png",
    "Xiaomi", "277.78 €", "128GB", "6GB"],
    ["Apple iPhone 14 128GB Midnight","https://www.varle.lt/static/uploads/products/28/app/apple-iphone-14-128gb-midnight.png", "Apple", "799 €", "128GB","6GB"],
    ["POCO X5 PRO 5G 6+128GB, juodas","https://www.varle.lt/static/uploads/products/572/poc/poco-x5-pro-5g-6128-juodas.png" ,"POCCO", "276.98 €", "128GB", "6GB"],
    ["Išmanusis telefonas Xiaomi 13T Pro (Juodas) DS 6.67“ AMOLED QHD 1220x2712/3.35GHz&3.0GHz&2.0GHz/512GB/12GB RAM/MIUI 14/WiFi,BT/4G,5G,MZB0EL3EU", "https://www.varle.lt/static/uploads/products/1467/ism/ismanusis-telefonas-xiaomi-13t-pro-juodas-204bc66eae.jpg", "Xiaomi", "791.59 €", "512GB", "12GB"]
]

for (i = 0; i < items.length; i++) {
    let row = "";
    for (a = 0; a < items[i].length; a++){
        row += items[i][a] + " ";
    }
    console.log(row);
}
let HTML = "";

// for (let i = 0; i < items.length; i++) {
    
//     HTML += `<div class="col-3"> 
//     <p>` + items[i][0] + `</p>
//     <img src="` + items[i][1] + `" alt="">
//     <p>Xiaomi</p>
//     <p>222</p>
//     <p>128GB</p>
//     <p>6GB</p>
// </div>`;
    
// }

for (let i = 0; i < items.length; i++) {
    
    HTML += `<div class="col-md-3">

    <a href=""><img class="itemPhoto" src="` + items[i][1] + `" alt=""></a>
    
    <a href="" class="titleA"><p class="title">` + items[i][0] + `</p></a>

    <div class="row">
    <div class="col-12 bottom">
    <p class="info">Gamintojas <a href="">`+ items[i][2] +`</a></p>
    <p class="info">Atmintis <a href="">`+ items[i][4] +`</a></p>
    <p class="info">RAM <a href="">`+ items[i][5] +`</a></p>
    </div>
    </div>

    <div class="row">
    <div class="col-6">
    <p class="price">`+ items[i][3] +`</p>
    </div>
    <div class="col-6"></div>
    </div>

</div>`;

}
document.getElementById("items").innerHTML = HTML;