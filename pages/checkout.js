import { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import mongoose from 'mongoose'
import Order from '../models/Order'
import GooglePayButton from '@google-pay/button-react'

const checkout = ({ order, subTotal, cart, saveCart }) => {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      </Head>

      <main className="pt-20 -mt-2">
        <div className="mx-auto p-2">
          <div className="flex flex-wrap flex-row">
            <div className="flex-shrink max-w-full px-4 w-full">
              <p className="text-xl font-bold mt-3 mb-5">Checkout</p>
            </div>

            <div className="flex-shrink max-w-full px-4 w-full lg:w-2/3 mb-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6">
                <div className="w-full overflow-x-auto">
                  <div id="Accordione" x-data="{selected:0}">

                    <div className="relative flex flex-wrap flex-col shadow mb-4 bg-white dark:bg-gray-800">
                      <div className="py-2 px-4 border-b border-gray-200 mb-0 bg-gray-100 dark:bg-gray-900 dark:bg-opacity-20 dark:border-gray-800" id="HeadingOnee">
                        <div className="d-grid mb-0">
                          <button className="py-4 px-0 w-full rounded-md leading-5 font-medium flex justify-between focus:outline-none focus:ring-0">
                            <span className="font-bold">Step 1: Billing Address</span>
                            <span>
                              {/* <svg className="transform transition duration-500 -rotate-180" :className="{'-rotate-180': selected == 0 }" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                            </svg> */}
                            </span>
                          </button>
                        </div>
                      </div>
                      <div id="CollapseOnee" x-show="selected == 0">
                        <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-20">
                          <form className="flex flex-wrap flex-row -mx-4">
                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                              <label for="inputname" className="inline-block mb-2">First name</label>
                              <input type="text" className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputname" />
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                              <label for="inputlast" className="inline-block mb-2">Last name</label>
                              <input type="text" className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputlast" />
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                              <label for="inputphone" className="inline-block mb-2">Phone number</label>
                              <input type="text" className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputphone" />
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                              <label for="inputemail" className="inline-block mb-2">Email</label>
                              <input type="email" className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputemail" />
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                              <label for="inputCity" className="inline-block mb-2">City</label>
                              <input type="text" className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputCity" />
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                              <label for="inputZip" className="inline-block mb-2">Zip</label>
                              <input type="text" className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputZip" />
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                              <label for="inputState" className="inline-block mb-2">State</label>
                              <input id="inputState" className="inline-block w-full leading-5 relative py-2 pl-3 pr-8 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 select-caret appearance-none" />
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                              <label for="inputCountry" className="inline-block mb-2">Country</label>
                              <select id="inputCountry" className="inline-block w-full leading-5 relative py-2 pl-3 pr-8 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 select-caret appearance-none">
                                <option selected="">India</option>
                              </select>
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-full mb-6">
                              <label for="inputAddress" className="inline-block mb-2">Address</label>
                              <input type="text" className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputAddress" placeholder="H-No. 1234, xyz colony, sector 4 " />
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-full mb-6">
                              <label className="flex items-center">
                                <input type="checkbox" name="checked-demo" value="1" className="form-checkbox h-5 w-5 ltr:mr-3 rtl:ml-3 text-pink-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded focus:outline-none" />
                                <span className="ml-2">Ship to different address ?</span>
                              </label>
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-full">
                              {/* <button type="submit" className="py-2 px-5 inline-block text-center rounded mb-3 leading-5 text-gray-100 bg-pink-500 border border-pink-500 hover:text-gray-100 hover:bg-pink-600 hover:ring-0 hover:border-pink-600 focus:bg-pink-600 focus:border-pink-600 focus:outline-none focus:ring-0">
                                Continue <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block ltr:ml-2 rtl:mr-2 bi bi-arrow-right" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                </svg></button> */}
                              <GooglePayButton
                                environment="TEST"
                                buttonColor='white'
                                paymentRequest={{
                                  apiVersion: 2,
                                  apiVersionMinor: 0,
                                  allowedPaymentMethods: [
                                    {
                                      type: 'CARD',
                                      parameters: {
                                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                      },
                                      tokenizationSpecification: {
                                        type: 'PAYMENT_GATEWAY',
                                        parameters: {
                                          gateway: 'example',
                                          gatewayMerchantId: 'exampleGatewayMerchantId',
                                        },
                                      },
                                    },
                                  ],
                                  merchantInfo: {
                                    merchantId: "BCR2DN4TQTPZZWKJ",
                                    merchantName: "Anant Variety Store",
                                  },
                                  transactionInfo: {
                                    totalPriceStatus: 'FINAL',
                                    totalPriceLabel: 'Total',
                                    totalPrice: '1', //subTotal.toString(),
                                    currencyCode: 'INR',
                                    countryCode: 'US',
                                  },
                                  callbackIntents: ['PAYMENT_AUTHORIZATION'],
                                }}
                                onLoadPaymentData={paymentRequest => {
                                  console.log('Success', paymentRequest);
                                }}
                                onPaymentAuthorized={paymentData => {
                                  console.log('Payment Authorised Success', paymentData)
                                  return { transactionState: 'SUCCESS' }
                                }
                                }
                                existingPaymentMethodRequired='false'
                                buttonType='pay'
                                buttonSizeMode='fill'
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex flex-wrap flex-col shadow mb-4 bg-white dark:bg-gray-800">
                      <div className="py-2 px-4 border-b border-gray-200 mb-0 bg-gray-100 dark:bg-gray-900 dark:bg-opacity-20 dark:border-gray-800" id="HeadingTwoe">
                        <div className="d-grid mb-0">
                          <button className="py-4 px-0 w-full rounded-md leading-5 font-medium flex justify-between focus:outline-none focus:ring-0">
                            <span className="font-bold">Step 2: Shipping info</span>
                            <span>
                              {/* <svg className="transform transition duration-500" :className="{'-rotate-180': selected == 1 }" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                          </svg> */}
                            </span>
                          </button>
                        </div>
                      </div>
                      <div id="CollapseTwoe" x-show="selected == 1" hidden>
                        <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-20">
                          <p className="mb-3 font-semibold">Shipping Address</p>
                          <div className="flex flex-wrap flex-row mb-6">
                            <label className="py-3 flex-shrink max-w-full px-4 w-full md:w-1/2 cursor-pointer">
                              <input type="radio" className="form-checkbox h-5 w-5 text-pink-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 focus:outline-none rounded-full" name="shippingAddress" value="home" checked="" />
                              <span className="ltr:ml-2 rtl:mr-2">Home</span>
                              <h5 className="mt-3 mb-1 font-semibold">John Doe</h5>
                              <p className="text-gray-500">
                                Mountain view, Joice 12<br />
                                San Francisco, CA 82987, USA<br />
                                <abbr title="Phone">Phone:</abbr> 123 456 789
                              </p>
                            </label>
                            <label className="py-3 flex-shrink max-w-full px-4 w-full md:w-1/2 cursor-pointer">
                              <input type="radio" className="form-checkbox h-5 w-5 text-pink-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 focus:outline-none rounded-full" name="shippingAddress" value="office" />
                              <span className="ltr:ml-2 rtl:mr-2">Office</span>
                              <h5 className="mt-3 mb-1 font-semibold">John Doe</h5>
                              <p className="text-gray-500">
                                Sunset 12, Joice<br />
                                San Francisco, CA 82987, USA<br />
                                <abbr title="Phone">Phone:</abbr> 987 654 321
                              </p>
                            </label>
                          </div>
                          <p className="mb-3 font-semibold">Shipping Method</p>
                          <div className="flex flex-wrap flex-row mb-6 text-gray-700">
                            <label className="p-3 bg-green-100 flex-shrink max-w-full px-4 w-full md:w-1/3 cursor-pointer">
                              <input type="radio" className="form-checkbox h-5 w-5 text-pink-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 focus:outline-none rounded-full" name="shippingMethod" value="free" checked="" />
                              <span className="ltr:ml-2 rtl:mr-2">Free</span>
                              <h5 className="mt-3 mb-1 font-semibold">Standart</h5>
                              <p className="text-gray-500">0$</p>
                            </label>
                            <label className="p-3 bg-green-200 flex-shrink max-w-full px-4 w-full md:w-1/3 cursor-pointer">
                              <input type="radio" className="form-checkbox h-5 w-5 text-pink-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 focus:outline-none rounded-full" name="shippingMethod" value="standart" />
                              <span className="ltr:ml-2 rtl:mr-2">Express</span>
                              <h5 className="mt-3 mb-1 font-semibold">Ninja Express</h5>
                              <p className="text-gray-500">+12$</p>
                            </label>
                            <label className="p-3 bg-green-300 flex-shrink max-w-full px-4 w-full md:w-1/3 cursor-pointer">
                              <input type="radio" className="form-checkbox h-5 w-5 text-pink-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 focus:outline-none rounded-full" name="shippingMethod" value="express" />
                              <span className="ltr:ml-2 rtl:mr-2">Express One Day</span>
                              <h5 className="mt-3 mb-1 font-semibold">Super Express</h5>
                              <p className="text-gray-500">+25$</p>
                            </label>
                          </div>
                          <div className="flex-shrink max-w-full w-full">
                            <button type="button" className="py-2 px-5 mb-3 inline-block text-center rounded leading-5 text-gray-100 bg-pink-500 border border-pink-500 hover:text-gray-100 hover:bg-pink-600 hover:ring-0 hover:border-pink-600 focus:bg-pink-600 focus:border-pink-600 focus:outline-none focus:ring-0">
                              {/* <GooglePayButton
                                environment="TEST"
                                buttonSizeMode='fill'
                                paymentRequest={googlePayConfiguration} />  */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block ltr:ml-2 rtl:mr-2 bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                              </svg></button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex flex-wrap flex-col shadow mb-4 bg-white dark:bg-gray-800">
                      <div className="py-2 px-4 border-b border-gray-200 mb-0 bg-gray-100 dark:bg-gray-900 dark:bg-opacity-20 dark:border-gray-800" id="HeadingThreee">
                        <div className="d-grid mb-0">
                          <button className="py-4 px-0 w-full rounded-md leading-5 font-medium flex justify-between focus:outline-none focus:ring-0">
                            <span className="font-bold">Step 3: Payment method</span>
                            <span>
                              {/* <svg className="transform transition duration-500" :className="{'-rotate-180': selected == 2 }" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                              </svg> */}
                            </span>
                          </button>
                        </div>
                      </div>
                      <div id="CollapseThreee" x-show="selected == 2" hidden>
                        <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-20">
                          <div className="flex flex-wrap flex-row mb-6">
                            <label className="py-3 flex-shrink max-w-full px-4 w-full cursor-pointer mb-3">
                              <input type="radio" className="form-checkbox h-5 w-5 text-pink-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 focus:outline-none rounded-full" name="paymentMethod" value="paypal" checked="" />
                              <span className="ltr:ml-2 rtl:mr-2">Paypal</span>

                              <img src="../src/img/payments/paypal.png" className="max-w-full w-40 h-auto" />

                              <p className="mt-2 text-sm text-gray-500">You will be redirected to PayPal website to complete your purchase</p>
                            </label>
                            <label className="py-3 flex-shrink max-w-full px-4 w-full cursor-pointer mb-3">
                              <input type="radio" className="form-checkbox h-5 w-5 text-pink-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 focus:outline-none rounded-full" name="paymentMethod" value="credit" />
                              <span className="ltr:ml-2 rtl:mr-2">Credit/Debit Card</span>
                              <img src="../src/img/payments/creditcard.png" className="max-w-full w-40 h-auto" />
                              <p className="mt-2 text-sm text-gray-500">Pay with most popular payment option</p>
                            </label>
                            <label className="py-3 flex-shrink max-w-full px-4 w-full cursor-pointer mb-3">
                              <input type="radio" className="form-checkbox h-5 w-5 text-pink-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 focus:outline-none rounded-full" name="paymentMethod" value="bank" />
                              <span className="ltr:ml-2 rtl:mr-2">Payoneer</span>
                              <img src="../src/img/payments/payoneer.png" className="max-w-full w-40 h-auto" />
                              <p className="mt-2 text-sm text-gray-500">You will be redirected to Payoneer website to complete your purchase</p>
                            </label>
                          </div>
                          <div className="flex-shrink max-w-full w-full">
                            <button type="submit" className="py-2 px-5 mb-3 inline-block text-center rounded leading-5 text-gray-100 bg-pink-500 border border-pink-500 hover:text-gray-100 hover:bg-pink-600 hover:ring-0 hover:border-pink-600 focus:bg-pink-600 focus:border-pink-600 focus:outline-none focus:ring-0">Continue <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block ltr:ml-2 rtl:mr-2 bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                            </svg></button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink max-w-full px-4 w-full lg:w-1/3 mb-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded shadow-lg mb-6">
                <div className="relative">
                  <table className="table-auto w-full ltr:text-left rtl:text-right text-gray-600">
                    <thead className="border-b dark:border-gray-700">
                      <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-20">
                        <th className="p-4 font-normal">Products</th>
                        <th className="p-4 font-normal">Pricing</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-100 dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-20 text-sm">
                      <tr className="border-b dark:border-gray-700">
                        <td className="p-4 font-normal">
                          <a href="#">
                            <div className="flex flex-wrap flex-row items-center">
                              <div className="self-center">
                                <img className="h-8 w-8" src="../src/img/products/product1.jpg" />
                              </div>
                              <div className="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                Nike Unisex-Child Free Rn (Big Kid)
                              </div>
                            </div>
                          </a>
                        </td>
                        <td className="p-4 font-normal text-center">80$</td>
                      </tr>
                      <tr className="border-b dark:border-gray-700">
                        <td className="p-4 font-normal">
                          <a href="#">
                            <div className="flex flex-wrap flex-row items-center">
                              <div className="self-center"><img className="h-8 w-8" src="../src/img/products/product2.jpg" /></div>
                              <div className="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                Nike in-Season TR 9 Womens Running Shoe
                              </div>
                            </div>
                          </a>
                        </td>
                        <td className="p-4 font-normal text-center">70$</td>
                      </tr>
                    </tbody>
                    <tfoot className="bg-gray-100 dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-20 text-sm">
                      <tr className="border-b dark:border-gray-700">
                        <td className="p-4 font-normal text-center ltr:text-right rtl:text-left"><b>Sub-Total</b></td>
                        <td className="p-4 font-normal text-center ltr:text-right rtl:text-left totals">$290</td>
                      </tr>
                      <tr className="border-b dark:border-gray-700">
                        <td className="p-4 font-normal text-center ltr:text-right rtl:text-left"><b>Discount</b></td>
                        <td className="p-4 font-normal text-center ltr:text-right rtl:text-left totals">15%</td>
                      </tr>
                      <tr className="border-b dark:border-gray-700">
                        <td className="p-4 font-normal text-center ltr:text-right rtl:text-left"><b>Total</b></td>
                        <td className="p-4 font-normal text-center ltr:text-right rtl:text-left totals">$258,8</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default checkout;