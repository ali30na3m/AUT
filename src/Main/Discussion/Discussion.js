import './Discussion.css'
import ListAsk from './ListAsk/ListAsk'

export default function Discussion() {
  return (
    <div className="container AQ">
        <h2 className="header-AQ">Frequently Asked Question</h2>

        <ul className="Ask">
            <ListAsk></ListAsk>
            <ListAsk></ListAsk>
            <ListAsk></ListAsk>
            <ListAsk></ListAsk>
            <ListAsk></ListAsk>
        </ul>

    </div>
  )
}
