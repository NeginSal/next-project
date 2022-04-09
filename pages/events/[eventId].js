import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistic from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import LogisticsItem from "../../components/event-detail/logistics-item";

const EventDetailPage = () => {

    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return (<p>No event found!</p>)
    }

    return (

        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistic date={event.date} address={event.location}
                image={event.image} imageAlt={event.title} />
            <EventContent><p>{event.description}</p></EventContent>
            <LogisticsItem />
        </Fragment>

    );
}

export default EventDetailPage;