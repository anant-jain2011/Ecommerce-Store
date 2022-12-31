import React from 'react'

const orders = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
      <div className="flex flex-wrap flex-row -mx-4">
        <div className="flex-shrink max-w-full px-4 w-full">
          <div className="md:flex md:justify-between">
            <div>
              <a href="#" className="py-2 px-4 mb-3 block lg:inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0">Add new <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="inline-block ml-1 bi bi-plus-lg" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"></path>
              </svg></a>
            </div>

            <div>
              <div id="bulk-actions">
                <label className="flex flex-wrap flex-row">
                  <select id="bulk_actions" name="bulk_actions" className="inline-block leading-5 relative py-2 ltr:pl-3 rtl:pr-3 pr-8 mb-3 rounded bg-gray-100 border border-gray-200 overflow-x-auto focus:outline-none focus:border-gray-300 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 select-caret appearance-none">
                    <option value="" data-dialog-content="">Status</option>
                    <option value="complete">complete</option>
                    <option value="processing">processing</option>
                    <option value="shipped">shipped</option>
                    <option value="cancelled">cancelled</option>
                    <option value="pending">pending</option>
                    <option value="refund">refund</option>
                  </select>
                  <input type="submit" id="bulk_apply" className="ltr:ml-2 rtl:mr-2 py-2 px-4 inline-block text-center mb-3 rounded leading-5 border hover:bg-gray-300 dark:bg-gray-900 dark:bg-opacity-40 dark:border-gray-800 dark:hover:bg-gray-900 focus:outline-none focus:ring-0 cursor-pointer" value="Apply" />
                </label>
              </div>
            </div>
          </div>
          <div className="w-full mb-6 overflow-x-auto">
            <form action="">
              <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                <div className="dataTable-top">
                  <div className="dataTable-dropdown">
                    <label><select className="dataTable-selector">
                      <option value="5">5</option>
                      <option value="10" selected="">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="25">25</option>
                    </select>
                      entries per page</label></div><div className="dataTable-search"><input className="dataTable-input" placeholder="Search..." type="text" /></div></div><div className="dataTable-container"><table className="table-sorter table-bordered w-full ltr:text-left rtl:text-right text-gray-600 dark:text-gray-400 dataTable-table">
                        <thead>
                          <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40"><th data-sortable="false" style={{"width": "6.5261%"}}><input id="check_all" type="checkbox" className="form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700" /></th><th className="hidden lg:table-cell" data-sortable="" style={{"width": "14.3574%"}}><a href="#" className="dataTable-sorter">Order ID</a></th><th data-sortable="" style={{"width": "20.4819%"}}><a href="#" className="dataTable-sorter">Customers</a></th><th className="hidden lg:table-cell" data-sortable="" style={{"width": "17.7711%"}}><a href="#" className="dataTable-sorter">Order date</a></th><th className="hidden lg:table-cell" data-sortable="" style={{"width": "17.6707%"}}><a href="#" className="dataTable-sorter">Status</a></th><th className="text-center" data-sortable="" style={{"width": "10.1406%"}}><a href="#" className="dataTable-sorter">Total</a></th><th data-sortable="false" style={{"width": "13.0522%"}}>Actions</th></tr>
                        </thead>
                        <tbody><tr className="border-b dark:border-gray-700"><td><input type="checkbox" className="checkedall form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700" /></td><td className="hidden lg:table-cell">INV025</td><td>
                          <a href="#">
                            <div className="flex flex-wrap flex-row items-center">
                              <div className="self-center"><img className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600" src="../src/img/avatar/avatar2.png"></img></div>
                              <div className="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                John doe
                              </div>
                            </div>
                          </a>
                        </td><td className="hidden lg:table-cell">27/05/2022</td><td className="hidden lg:table-cell">
                            <span className="text-sm px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">Processing</span>
                          </td><td className="text-center">165$</td><td className="text-center">
                            <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-red-500" title="Delete">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                              </svg>
                            </a>
                            <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500" title="Edit">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                              </svg>
                            </a>
                          </td></tr><tr className="border-b dark:border-gray-700"><td><input type="checkbox" className="checkedall form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700" /></td><td className="hidden lg:table-cell">INV024</td><td>
                            <a href="#">
                              <div className="flex flex-wrap flex-row items-center">
                                <div className="self-center"><img className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600" src="../src/img/avatar/avatar3.png" /></div>
                                <div className="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                  John doe
                                </div>
                              </div>
                            </a>
                          </td><td className="hidden lg:table-cell">27/05/2022</td><td className="hidden lg:table-cell">
                              <span className="text-sm px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">Processing</span>
                            </td><td className="text-center">165$</td><td className="text-center">
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-red-500" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                              </a>
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                </svg>
                              </a>
                            </td></tr><tr className="border-b dark:border-gray-700"><td><input type="checkbox" className="checkedall form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700" /></td><td className="hidden lg:table-cell">INV023</td><td>
                              <a href="#">
                                <div className="flex flex-wrap flex-row items-center">
                                  <div className="self-center"><img className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600" src="../src/img/avatar/avatar4.png" /></div>
                                  <div className="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                    John doe
                                  </div>
                                </div>
                              </a>
                            </td><td className="hidden lg:table-cell">27/05/2022</td><td className="hidden lg:table-cell">
                              <span className="text-sm px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">Complete</span>
                            </td><td className="text-center">165$</td><td className="text-center">
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-red-500" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                              </a>
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                </svg>
                              </a>
                            </td></tr><tr className="border-b dark:border-gray-700"><td><input type="checkbox" className="checkedall form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700" /></td><td className="hidden lg:table-cell">INV022</td><td>
                              <a href="#">
                                <div className="flex flex-wrap flex-row items-center">
                                  <div className="self-center"><img className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600" src="../src/img/avatar/avatar5.png" /></div>
                                  <div className="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                    John doe
                                  </div>
                                </div>
                              </a>
                            </td><td className="hidden lg:table-cell">26/05/2022</td><td className="hidden lg:table-cell">
                              <span className="text-sm px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">Complete</span>
                            </td><td className="text-center">165$</td><td className="text-center">
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-red-500" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                              </a>
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                </svg>
                              </a>
                            </td></tr><tr className="border-b dark:border-gray-700"><td><input type="checkbox" className="checkedall form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700" /></td><td className="hidden lg:table-cell">INV021</td><td>
                              <a href="#">
                                <div className="flex flex-wrap flex-row items-center">
                                  <div className="self-center"><img className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600" src="../src/img/avatar/avatar6.png" /></div>
                                  <div className="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                    John doe
                                  </div>
                                </div>
                              </a>
                            </td><td className="hidden lg:table-cell">26/05/2022</td><td className="hidden lg:table-cell">
                              <span className="text-sm px-2 py-1 font-semibold leading-tight text-indigo-700 bg-indigo-100 rounded-full">Shipped</span>
                            </td><td className="text-center">35$</td><td className="text-center">
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-red-500" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                              </a>
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                </svg>
                              </a>
                            </td></tr><tr className="border-b dark:border-gray-700"><td><input type="checkbox" className="checkedall form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700" /></td><td className="hidden lg:table-cell">INV020</td><td>
                              <a href="#">
                                <div className="flex flex-wrap flex-row items-center">
                                  <div className="self-center"><img className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600" src="../src/img/avatar/avatar8.png" /></div>
                                  <div className="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                    John doe
                                  </div>
                                </div>
                              </a>
                            </td><td className="hidden lg:table-cell">25/05/2022</td><td className="hidden lg:table-cell">
                              <span className="text-sm px-2 py-1 font-semibold leading-tight text-indigo-700 bg-indigo-100 rounded-full">Shipped</span>
                            </td><td className="text-center">35$</td><td className="text-center">
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-red-500" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                              </a>
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                </svg>
                              </a>
                            </td></tr><tr className="border-b dark:border-gray-700"><td><input type="checkbox" className="checkedall form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700" /></td><td className="hidden lg:table-cell">INV019</td><td>
                              <a href="#">
                                <div className="flex flex-wrap flex-row items-center">
                                  <div className="self-center"><img className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600" src="../src/img/avatar/avatar8.png" /></div>
                                  <div className="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                    John doe
                                  </div>
                                </div>
                              </a>
                            </td><td className="hidden lg:table-cell">25/05/2022</td><td className="hidden lg:table-cell">
                              <span className="text-sm px-2 py-1 font-semibold leading-tight text-pink-700 bg-pink-100 rounded-full">Canceled</span>
                            </td><td className="text-center">35$</td><td className="text-center">
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-red-500" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                              </a>
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                </svg>
                              </a>
                            </td></tr><tr className="border-b dark:border-gray-700"><td><input type="checkbox" className="checkedall form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700" /></td><td className="hidden lg:table-cell">INV006</td><td>
                              <a href="#">
                                <div className="flex flex-wrap flex-row items-center">
                                  <div className="self-center"><img className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600" src="../src/img/avatar/avatar8.png" /></div>
                                  <div className="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                    John doe
                                  </div>
                                </div>
                              </a>
                            </td><td className="hidden lg:table-cell">24/05/2022</td><td className="hidden lg:table-cell">
                              <span className="text-sm px-2 py-1 font-semibold leading-tight text-pink-700 bg-pink-100 rounded-full">Canceled</span>
                            </td><td className="text-center">35$</td><td className="text-center">
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-red-500" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                              </a>
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                </svg>
                              </a>
                            </td></tr><tr className="border-b dark:border-gray-700"><td><input type="checkbox" className="checkedall form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700" /></td><td className="hidden lg:table-cell">INV006</td><td>
                              <a href="#">
                                <div className="flex flex-wrap flex-row items-center">
                                  <div className="self-center"><img className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600" src="../src/img/avatar/avatar8.png" /></div>
                                  <div className="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                    John doe
                                  </div>
                                </div>
                              </a>
                            </td><td className="hidden lg:table-cell">24/05/2022</td><td className="hidden lg:table-cell">
                              <span className="text-sm px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">Processing</span>
                            </td><td className="text-center">35$</td><td className="text-center">
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-red-500" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                              </a>
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                </svg>
                              </a>
                            </td></tr><tr className="border-b dark:border-gray-700"><td><input type="checkbox" className="checkedall form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700" /></td><td className="hidden lg:table-cell">INV006</td><td>
                              <a href="#">
                                <div className="flex flex-wrap flex-row items-center">
                                  <div className="self-center"><img className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600" src="../src/img/avatar/avatar8.png" /></div>
                                  <div className="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                    John doe
                                  </div>
                                </div>
                              </a>
                            </td><td className="hidden lg:table-cell">24/05/2022</td><td className="hidden lg:table-cell">
                              <span className="text-sm px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">Processing</span>
                            </td><td className="text-center">35$</td><td className="text-center">
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-red-500" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                              </a>
                              <a href="javascript:;" className="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                </svg>
                              </a>
                            </td></tr></tbody>
                      </table></div><div className="dataTable-bottom"><div className="dataTable-info">Showing 1 to 10 of 15 entries</div><nav className="dataTable-pagination"><ul className="dataTable-pagination-list"><li className="active"><a href="#" data-page="1">1</a></li><li className=""><a href="#" data-page="2">2</a></li><li className="pager"><a href="#" data-page="2">›</a></li></ul></nav></div></div>

              {/* <script type="text/javascript">
                  const selectall = document.querySelector("#check_all");
                  if ( selectall != null) {
                    selectall.addEventListener("click", function () {
                      if (document.querySelector("#check_all").checked == true) {
                        var ele = document.querySelectorAll('.checkedall');
                        for (var i = 0; i < ele.length; i++) {
                          if (ele[i].type == 'checkbox')
                            ele[i].checked = true;
                        }
                      } else {
                        var ele = document.querySelectorAll('.checkedall');
                        for (var i = 0; i < ele.length; i++) {
                          if (ele[i].type == 'checkbox')
                            ele[i].checked = false;

                        }
                      }
                    })
                          
                </script> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default orders
