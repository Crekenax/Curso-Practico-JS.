const coupons =[
    {
        name: "Alpha",
        discount: 10,
    },
    {
        name: "Beta",
        discount: 15,
    },
    {
        name: "Gamma",
        discount: 20,

    },
];

function CalcularPrecioConDescuento(precio, descuento){

    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;
    
    
    return precioConDescuento;
};



function OnClickButtonPriceDiscount(){

    const couponValue = document.getElementById("InputCoupon").value;
    const precio = document.getElementById("InputPrice").value;
    let descuento;

    const isCouponValueValid = function(coupon){
        return coupon.name === couponValue;
    }

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupon " + couponValue + " no es valido")
    }else{
        const descuento = userCoupon.discount;
        const precioConDescuento = CalcularPrecioConDescuento(precio,descuento); 
        ResultP.innerText = "El precio final es: $" + precioConDescuento;
    }

}