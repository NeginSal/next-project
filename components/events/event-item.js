import Link from "next/link";

const EventItem = (props) => {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(',', '\n');
    const explorLink =`/events/${id}`;
    return (
        <li>
            <img src={'/' + image} alt="" />
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{humanReadableDate}</time>
                </div>
                <div>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div>
                <Link href="/">{explorLink}</Link>
            </div>

        </li>
    );
}

export default EventItem;