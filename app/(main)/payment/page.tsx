import React, { ReactNode } from 'react'

interface PaymentProps {
    title: string
    price: string
    children: ReactNode
}


const Card = ({ title, price, children }: PaymentProps) => {
    return (
        <div className="border border-purple-600 p-4 rounded flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <p className="">{title}</p>
                <p className="">{`$${price}.00`}</p>
            </div>
            <div className="">
                {/* <form
                    action='https://www.paynow.co.zw/OnlineShopping/AddItem'
                    target='PayNowShoppingCart'>
                    <input type='hidden' name='name' value='Premium' />
                    <input type='hidden' name='amount' value='300.00' />
                    <div className="flex mt-4 gap-2">
                        <p className="">Quantity:</p>
                        <input type='text' name='quantity' value='1' style={{ width: "20px" }} />
                    </div>
                    <br />
                    <input type='hidden' name='shipping' value='1' />
                    <input type='hidden' name='hash' value='639FA83061D8F18B7B958CB7CDE1AED901738743FCA25139D877A16ACB036CACFB88316C3DCE77AC070BA55371178EC4E35ED8DE58180AAD8B16EB16E9E013E1' />
                    <input type='hidden' name='api_id' value='17084' /><input type='image' src='https://www.paynow.co.zw/Content/buttons/medium_buttons/button_add-to-cart_medium.png' />
                </form> */}
                {children}
            </div>
        </div>
    )
}

function Payment() {
    return (
        <div className={`h-screen text-black w-full bg-purple-200 py-4 flex items-center justify-center`}>
            <div className="flex gap-4 flex-wrap">
                <Card title='Premium' price='300'>
                    <form action='https://www.paynow.co.zw/OnlineShopping/AddItem' target='PayNowShoppingCart'><input type='hidden' name='name' value='Premium' /><input type='hidden' name='amount' value='300.00' />
                        Quantity:
                        <input type='text' name='quantity' value='1' className='bg-transparent ' style={{ width: '20px' }} />
                        <br /><input type='hidden' name='shipping' value='1' /><input type='hidden' name='hash' value='639FA83061D8F18B7B958CB7CDE1AED901738743FCA25139D877A16ACB036CACFB88316C3DCE77AC070BA55371178EC4E35ED8DE58180AAD8B16EB16E9E013E1' /><input type='hidden' name='api_id' value='17084' /><input type='image' src='https://www.paynow.co.zw/Content/buttons/medium_buttons/button_add-to-cart_medium.png' /></form>
                </Card>
                <Card title='Standard' price='450'>
                    <form action='https://www.paynow.co.zw/OnlineShopping/AddItem' target='PayNowShoppingCart'><input type='hidden' name='name' value='Late+Reg' /><input type='hidden' name='amount' value='450.00' />Quantity: <input type='text' name='quantity' value='1' style={{ width: '20px' }} /><br /><input type='hidden' name='shipping' value='1' /><input type='hidden' name='hash' value='CC95E249E7F101738DF470B6B66A342946B9EC958130500F69755031C969BDEFDAE3FDC964E581710CC48E6EF35BA2032081DEE3D4DDEC9B880F923AD42721AD' /><input type='hidden' name='api_id' value='17084' /><input type='image' src='https://www.paynow.co.zw/Content/buttons/medium_buttons/button_add-to-cart_medium.png' /></form>
                </Card>

            </div>
        </div>
    )
}

export default Payment