import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are available
import styles from './Testimonials.module.css'; // Import your CSS module if needed

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    image: 'src/landing/assets/im1.jpeg', // Replace with the actual image URL
    text: 'This service has greatly improved my productivity! Highly recommend to everyone.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'src/landing/assets/im2.jpeg', // Replace with the actual image URL
    text: 'I am extremely satisfied with the support I received. Thank you for your excellent service!',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    image: 'src/landing/assets/im3.jpeg', // Replace with the actual image URL
    text: 'A fantastic experience from start to finish. I would use this service again!',
  },
];

const Testimonials = () => {
  return (
    <>
    <hr />
    <div className="container my-5">
      <h2 className={styles.testTitle}>What Our Clients Say</h2>
      <div className="row">
        {testimonialsData.map((testimonial) => (
          <div className="col-md-4 mb-4" key={testimonial.id}>
            <div className={styles.testimonialCard}>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <img src={testimonial.image} alt={testimonial.name} className={`rounded-circle me-3 ${styles.testimonialImage}`} />
                  <h5 className={styles.cardTitle}>{testimonial.name}</h5>
                </div>
                <p className={styles.cardText}>{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        <hr />
    </>
  );
};

export default Testimonials;
