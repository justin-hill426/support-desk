import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTickets, reset } from "../features/tickets/ticketSlice"
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"
import TicketItem from "../components/TicketItem"

const Tickets = () => {
  const {tickets, isLoading, isSuccess} = useSelector((state) => state.tickets)  

  const dispatch = useDispatch()

  //clear on unmount
  useEffect(() => {
    return () => {
      if(isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  if (isLoading) {
    return <Spinner/>
  }
  return (
    <>
      <BackButton url='/'/>
      <div>Tickets</div>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
      </div>
      {tickets.map((ticket) => {
        return <TicketItem key={ticket._id} ticket={ticket}/>
      })}
    </>
  )
}

export default Tickets