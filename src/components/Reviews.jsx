"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "ever since I discovered zamzam almost 2 years ago, they've become my main restaurant for grilled chicken, no other restaurant comes close. The Mandi rice is also a must try, I always bring my family here every now and then. Extremely polite and nice staffs, and really comfortable majlis rooms for families.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "AbdulGafar Ajao",
    role: "Local Guide",
  },
  {
    text: "Delicious mandi restaurant in Muscat. Loved their mutton shuwa with tender mutton. Sitting on the ground in a separate cabin was a great experience.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    name: "Azzam",
    role: "Local Guide",
  },
  {
    text: "Authentic Indian restaurant with friendly service and great food. The staff was very welcoming and made us feel right at home. The menu offers a wide range of flavorful dishes, with a particularly impressive variety of fresh fish options. Everything we tried was well-prepared and tasty. Definately worth a visit if you like Indian food.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    name: "Patrik Ortner",
    role: "Local Guide",
  },
  {
    text: "Best Mandi and Shuwa. Very helpful and good waiters.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop",
    name: "Md Pervez Nawaz",
    role: "Local Guide",
  },
  {
    text: "Yakub was serving my friends and I last night. He was very friendly and welcoming, while providing excellent service. Food was good and reasonably priced as well. We had their Mixed Grill and Shuwa.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    name: "Adriane",
    role: "Guest",
  },
  {
    text: "When I'm near Ruwi and in the mood for mandi, Zam Zam is my top choice. Their ambiance and staff service are truly excellent. I've enjoyed their regular chicken mandi, alfahm mandi, shuwa mandi, and more; my personal favorite is the regular chicken mandi. The chicken is perfectly cooked, and the mandi rice is delicious.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    name: "Moh i",
    role: "Local Guide",
  },
  {
    text: "Nice mandi. Nice chicken. They have place to sit on the grouas well which is cool and gives you old tradition feeling. Service is good. Prices are very fair.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    name: "Amin",
    role: "Local Guide",
  },
  {
    text: "Had an amazing experience with Mr. Abdul Hameed's service! He's attentive and efficient. His service was top notch 💯and The food was incredible, especially the mutton shuwa - highly recommended!",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop",
    name: "Munsif Naleem",
    role: "Local Guide",
  },
  {
    text: "Grilled Kofer and chicken was tasty & so was the rice. We had a late lunch, at around 4:00 P.M, most of the items were not available by then. The service was ordinary and nothing to write about.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    name: "Sayanth Manohar",
    role: "Local Guide",
  },
  {
    text: "A good, excellent restaurant. Their food is clean, their service is wonderful, and their staff are kind and smiling.😊😊🥰",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "Siddiq Al Balushi",
    role: "Guest",
  },
  {
    text: "Its one of the good mandi restaurants in Muscat. I loved their shuwa mandi better than other mandi. They have two rice one is barik rice and the other is typical mandi rice. Please take mandi rice because the barik rice doesn't give you the feel of mandi. They have an awesome pickle which comes along the rice. It is so yum and don't forget to ask for an extra pickle.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    name: "Ayisha Nazar",
    role: "Local Guide",
  },
  {
    text: "The welcome was neutral and we preferred to get a seat in the mezzanine floor. They have majlis seating as well as table seating. The staff was very cordial. He suggested chicken madfoon for us. Chicken madfoon was tasty with very tender chicken pieces. The dishes are not very expensive and the quantity is sufficient.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    name: "Jithesh S",
    role: "Local Guide",
  },
  {
    text: "Food was too good environment also good and clean fast service with their complementary soup after food they provide free sweet with kawa and soup is also free",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop",
    name: "alma shaikh",
    role: "Local Guide",
  },
  {
    text: "Delicious food, good service and friendly staff. My family and I liked it. I want people in Oman to taste it at least once.",
    image: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?w=100&h=100&fit=crop",
    name: "Abdul Kadher",
    role: "Local Guide",
  },
  {
    text: "I recently had the pleasure of dining at Zam Zam, a fantastic mandi restaurant that left a lasting impression. I ordered their mandi rice with mutton shuwa, and I have to say, it was absolutely delicious! The rice was perfectly cooked.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop",
    name: "UPANI WITHARANA",
    role: "Local Guide",
  },
  {
    text: "Very good and fast service, comfortable and clean interiors with cubicles for families. polite and courteous staff. The food was well prepared and portion size was generous. Great value for money and convenient location just next to MBD pizza hut.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop",
    name: "Naved Ali",
    role: "Local Guide",
  },
  {
    text: "Tasty food I like it. Staff also good.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "NAFI KP",
    role: "Local Guide",
  },
  {
    text: "Craving for Chicken Mandi got me to Zam Zam. Quite convenient being located in Ruwi. Fast service and didn't have to wait. Got all I needed and then some. Yummy Mandi. Next time You crave, go for it!",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100&h=100&fit=crop",
    name: "Leon Rafael Salinel",
    role: "Local Guide",
  },
  {
    text: "Everything is very nice here at zamzam friendly staff specially ajaharul islam",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    name: "Shihab A B",
    role: "Guest",
  },
  {
    text: "Food was very delicious..service was good..Nice ambience and reasonable cost..",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    name: "Masvootha Mariyam",
    role: "Local Guide",
  },
  {
    text: "Location easy, parking adequate, ambience good, service excellent, portions served adequate, pricing average, taste excellent, happy that finally this part of Muscat has a place where one can enjoy excellent Mandi and Shuwa.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    name: "Muddassir Khan",
    role: "Local Guide",
  },
  {
    text: "The best restaurant in this area . Staff are the best ,food is very delecious",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop",
    name: "Mahmoud Shabrawy",
    role: "Local Guide",
  },
  {
    text: "The food was very tasty , i really liked your chicken madhbi . My greetings to the cashier what a good guy . Thanks",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    name: "Mohammed Demmane",
    role: "Guest",
  },
  {
    text: "Outstanding.....Ddifferent types of Mandies, tried chicken mandi ,shuwa,Mughalkal and chicken madhbee ,Good quality food with reasonable price.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    name: "munas pk padoor",
    role: "Local Guide",
  },
  {
    text: "Really friendly, generous, great prices and great food ❤️ 🇴🇲",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    name: "Shiko",
    role: "Local Guide",
  },
  {
    text: "Affordable price for wonderful food 😋. More Side dishes were provided for Mandi. Didn't expected.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    name: "Jaya Chandran",
    role: "Local Guide",
  },
  {
    text: "Best food, atmosphere and very good service",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    name: "Asim Saeed",
    role: "Local Guide",
  },
  {
    text: "dish had a perfect blend of spices and flavors",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    name: "Muhammed Jadheer km",
    role: "Local Guide",
  }
];

// Distribute reviews into 3 columns
const firstColumn = testimonials.filter((_, idx) => idx % 3 === 0);
const secondColumn = testimonials.filter((_, idx) => idx % 3 === 1);
const thirdColumn = testimonials.filter((_, idx) => idx % 3 === 2);

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative Gold Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <Quote className="text-gold w-16 h-16 mx-auto mb-8 opacity-30" />
          <span className="text-gold font-sans font-bold text-[10px] tracking-[0.5em] uppercase block mb-6">Guest Experiences</span>
          <h2 className="text-4xl md:text-7xl font-luxury text-white">Words of <span className="text-gold italic">Distinction</span></h2>
        </div>

        {/* Scroll Column Testimonials */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={20} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
