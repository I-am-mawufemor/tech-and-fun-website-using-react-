import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'; // For filled and half stars
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons'; // For outline stars


import './testimonial.css';

const testimonials = [
  {
    id: 1,
    quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nihil esse aliquam deleniti est natus commodi numquam culpa aspernatur expedita quo, tempore perferendis ipsam laborum nulla. Ea iusto aperiam ipsam.",
    rating: 4,
    image: '/images/image-8.jfif',
    name: 'Atamiah Gabriel Annointing'
  },
  {
    id: 2,
    quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nihil esse aliquam deleniti est natus commodi numquam culpa aspernatur expedita quo, tempore perferendis ipsam laborum nulla. Ea iusto aperiam ipsam.",
    rating: 4,
    image: '/images/image-7.jfif',
    name: 'Kelvin Cool'
  },
  {
    id: 3,
    quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nihil esse aliquam deleniti est natus commodi numquam culpa aspernatur expedita quo, tempore perferendis ipsam laborum nulla. Ea iusto aperiam ipsam.",
    rating: 4,
    image: '/images/image-6.jpg',
    name: 'Alex Theodore'
  },
  {
    id: 4,
    quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nihil esse aliquam deleniti est natus commodi numquam culpa aspernatur expedita quo, tempore perferendis ipsam laborum nulla. Ea iusto aperiam ipsam.",
    rating: 4,
    image: '/images/image-8.jpg',
    name: 'Kelvin Brown'
  }
];

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-container">
        <div className="row">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item col-3">
               <FontAwesomeIcon icon={faQuoteLeft} />
              <p>{testimonial.quote}</p>
              <div className="ratings">
  {[...Array(5)].map((star, i) => (
    <FontAwesomeIcon
      key={i}
      icon={i < testimonial.rating ? faStar : faStarOutline} // Use solid star or outlined star based on rating
    />
  ))}
</div>
 
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
