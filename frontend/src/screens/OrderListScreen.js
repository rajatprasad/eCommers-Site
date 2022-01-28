import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders } from '../actions/orderActions'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])


  let DeliveredCount = 0
  let PaidOrders = 0
  let TotalAmountCollected = 0


  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
         {/* Box starts */}
          <div className="row">
             <div className="col-sm-6">
                <div className="card">
                        <div className="card-body">
                          <h3 className="card-title">{orders.length}
                        </h3>
                          <p className="card-text">Total Orders Placed</p>
                          <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button p-2"
                    table="table-to-xls"
                    filename="Orderxls"
                    sheet="tablexls"
                    buttonText="Export to Excel"/>
                        </div>
                      </div>
                    </div>
                    {/* Delivered Box */}
                    <div className="col-sm-6">
                <div className="card">
                        <div className="card-body">
                          <h3 className="card-title">
                            { orders.map((order) =>                                 
                                  { 
                                    
                                    for (let i = 1; i <= orders.length; i++) 
                                  {
                                    if ((order.isDelivered) == true) DeliveredCount = DeliveredCount + 1
                                        console.log(DeliveredCount,order.isDelivered)
                                      }
                                   }       
                            )
                            }
                            <p>{DeliveredCount/orders.length}</p>


                        </h3>
                          <p className="card-text">Total Orders Delivered</p>
                        </div>
                      </div>
                    </div>
                    {/* Paid Orders */}
                    <div className="col-sm-6">
                <div className="card">
                        <div className="card-body">
                          <h3 className="card-title">
                            { orders.map((order) =>                                 
                                  { 
                                    
                                    for (let i = 1; i <= orders.length; i++) 
                                    if (order.isPaid == true) PaidOrders = PaidOrders + 1
                                    if(order.isPaid == true) TotalAmountCollected = TotalAmountCollected +order.totalPrice                                
                                   }       
                            )
                            }
                            
                            <p>₹{TotalAmountCollected}</p>


                        </h3>
                          <p className="card-text">Total Earnings </p>
                          <p>Total Paid Orders {PaidOrders/orders.length}</p>
                        </div>
                      </div>
                    </div>
                </div>
                <br></br>
        {/* Box Ends  */}
        <Table striped bordered hover responsive className='table-sm' id="table-to-xls">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>PAYMENT METHOD</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>₹{order.totalPrice}</td>   
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>{order.paymentMethod === 'Cash On Delivery' ? <p>COD</p> : <p>{order.paymentMethod}</p> }</td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
                <td>
                  <a href="https://www.wix.com/tools/invoice-generator"> Generate Invoice</a>
                </td>
              </tr>
            )).reverse()}
          </tbody>
        </Table>
        </>
      )}
    </>
  )
}

export default OrderListScreen
