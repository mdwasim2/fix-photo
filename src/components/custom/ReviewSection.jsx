import { Star } from "lucide-react";

const reviews = [
  {
    initials: "TA",
    name: "Tomas Alston",
    date: "09/30/2022",
    rating: 5,
    title: "Basic Photo Retouching Services",
    content:
      "I used Fixthephoto again this weekend and received excellent results. Ann worked over the weekend to complete my images on time. The price was fair, and the quality was great. I’ll be sending more photos next weekend. Highly recommended 10 out of 10.",
  },
  {
    initials: "KB",
    name: "Kevin Burroughs",
    date: "09/25/2022",
    rating: 5,
    title: "Advanced Photo Editing Services",
    content:
      "Just got my latest order back, amazing work! The photos look great. I’ve used this service several times, and it never disappoints. A happy customer from the UK.",
  },
  {
    initials: "MG",
    name: "Michael Gauthier",
    date: "09/21/2022",
    rating: 5,
    title: "Portrait Photo Photoshop Service",
    content:
      "Thanks, Tani! I started with a few edits, and now every photo I print goes through you first. Even the good ones come back looking much better. Your work makes a big difference.",
  },
  {
    initials: "JA",
    name: "Julie Austin Photography",
    date: "09/17/2022",
    rating: 5,
    title: "Photoshop Services for Headshot Images",
    content:
      "This was my first time using Fixthephoto, and I’m very happy with the results. The edits were clean, and the turnaround was fast. I’ll be using this service again. Thank you!",
  },
  {
    initials: "SM",
    name: "Sandra Millington",
    date: "09/11/2022",
    rating: 5,
    title: "Pro Photo Retouching Services",
    content:
      "As a full-time photographer and busy mom, time matters. I’ve tried many services, but something was always off. Now I use Fixthephoto. No issues with price or delivery time. I’m fully satisfied.",
  },
  {
    initials: "TS",
    name: "Tomos Stuart",
    date: "09/02/2022",
    rating: 5,
    title: "Photoshop Service for Digital Drawings",
    content:
      "Thanks, FixThePhoto. Your fast service and good results helped keep my clients happy. I’m especially impressed with the digital drawing edits. Great work at a good price.",
  },
];

const ReviewSection = () => {
  return (
    <section className="px-4 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-1">
          Here’s What People Really Think About FixThePhoto
        </h2>
        <p className=" text-sm mb-4">
          Join thousands of satisfied customers today! Don’t hesitate to leave your personal feedback below.
        </p>
        <div className="text-xl font-bold mb-1">151 Customer Reviews</div>
        <div className="text-yellow-500 flex justify-center items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
          <span className=" text-sm ml-2">4.8 out of 5 stars</span>
        </div>
        <a href="#" className="text-blue-600 underline text-sm hover:text-blue-800">
          Write a review
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-start gap-4 text-left">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-white text-lg"
              style={{ backgroundColor: getColor(review.initials) }}
            >
              {review.initials}
            </div>
            <div>
              <div className="flex items-center justify-between flex-wrap">
                <h4 className="font-semibold">{review.name}</h4>
                <div className="text-yellow-500 flex items-center gap-1 text-sm">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                  <span className=" ml-1 text-xs">
                    ({review.rating}/5) - {review.date}
                  </span>
                </div>
              </div>
              <h5 className="font-medium mt-1 ">{review.title}</h5>
              <p className=" text-sm mt-2">{review.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="#"
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          Load next 10 of 145 Reviews &gt;&gt;
        </a>
      </div>
    </section>
  );
};

// Simple color generator based on initials
const getColor = (initials) => {
  const colors = [
    "#F56565", // red
    "#ED8936", // orange
    "#ECC94B", // yellow
    "#48BB78", // green
    "#4299E1", // blue
    "#9F7AEA", // purple
    "#ED64A6", // pink
  ];
  const charCode = initials.charCodeAt(0);
  return colors[charCode % colors.length];
};

export default ReviewSection;
