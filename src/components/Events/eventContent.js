import SectionTitle from '../../ui/section-title/section-title';
import Event from './event';
import './event.css';
import eventData from './eventData';

function EventContent(){
    const events = eventData.map(item => {
        return (
            <Event 
                key={item.id}
                {...item}
            />
        );
    });

    return (
    <div className='event'>
        <div className="event-container">
            <div className="title-wrapper">
                <SectionTitle>Recent Events</SectionTitle>
            </div>
            <div className="row">
                {events}
            </div>
        </div>
        </div>
    );
}

export default EventContent;
