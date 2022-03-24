import { useSelector, useDispatch } from "react-redux"
import { getTicket, reset } from "../features/tickets/ticketSlice"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"

const Ticket = () => {
  const {ticket, isLoading, isSuccess, isError, message} = useSelector((state) => state.tickets)  

  const params = useParams()
  const dispatch = useDispatch()
  const {ticketId} = useParams()

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    dispatch(getTicket(ticketId))
  }, [isError, message, ticketId])

  if(isLoading) {
    return <Spinner/>
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url='/tickets' />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of the Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
    </div>
  )
}

export default Ticket