export const menuData = {
  chicken: {
    id: "chicken",
    title: "CHICKEN",
    subtitle: "دجاج",
    coverImage: "/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg",
    description: "Experience the authentic taste of Yemeni tradition. Slow-cooked perfection.",
    items: [
      {
        name: "Chicken Mandhi",
        arabic: "دجاج مندي",
        image: "/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg",
        sizes: [
          { name: "Quarter", arabic: "ربع" },
          { name: "Half", arabic: "نصف" },
          { name: "Full", arabic: "كامل" }
        ]
      },
      {
        name: "Chicken Al-Faham Mandhi",
        arabic: "دجاج الفحم مندي",
        image: "/images/menu/0.jpg",
        sizes: [
          { name: "Quarter", arabic: "ربع" },
          { name: "Half", arabic: "نصف" },
          { name: "Full", arabic: "كامل" }
        ]
      },
      { name: "Chicken Madfoon", arabic: "دجاج مدفون", image: "/images/food/HALF CHICKEN MADFOON WITH RICE.jpg" },
      { name: "Chicken Mughalkal", arabic: "دجاج مقلغل", image: "/images/food/mughalkal.png" }, 
      { name: "Chicken Shuwa", arabic: "دجاج شواء", image: "/images/MANDI/HALF CHICKEN SHUWA WITH RICE.jpg" }
    ]
  },
  mutton: {
    id: "mutton",
    title: "MUTTON",
    subtitle: "لحم غنم",
    coverImage: "/images/menu/mutton_mandi.jpg",
    description: "Savor the premium taste of slow-roasted tender mutton, prepared with authentic spice blends.",
    items: [
      { name: "Mutton Mandhi", arabic: "لحم مندي", image: "/images/menu/mutton_mandi.jpg" },
      { name: "Mutton Haneeth", arabic: "حنيذ لحم غنم", image: "/images/menu/mutton_haneeth.png" },
      { name: "Mutton Madfoon", arabic: "لحم مدفون", image: "/images/menu/mutton_madfoon.jpg" },
      { name: "Mutton Shuwa", arabic: "لحم شواء", image: "/images/menu/mutton_haneeth.png" },
      { name: "Mutton Mughalkal", arabic: "لحم مقلغل", image: "/images/food/mughalkal.png" }
    ]
  },
  beef: {
    id: "beef",
    title: "BEEF",
    subtitle: "لحم بقر",
    coverImage: "/images/menu/beef_haneeth.jpg",
    description: "Tender, succulent beef prepared with authentic traditional Middle Eastern spices.",
    items: [
      { name: "Beef Biriyani", arabic: "برياني لحم بقر", image: "/images/menu/beef_biryani.png" },
      { name: "Beef Haneeth", arabic: "حنيذ لحم بقر", image: "/images/menu/beef_haneeth.jpg" }
    ]
  },
  fish: {
    id: "fish",
    title: "FISH",
    subtitle: "سمك",
    coverImage: "/images/menu/FISH FILLET GRILLED WITH RICE.jpg",
    description: "Fresh catch from the Arabian sea, seasoned with our signature spices.",
    items: [
      { name: "Fish Fillet With Rice", arabic: "فيليه سمك مع أرز", image: "/images/menu/FISH FILLET FRY WITH RICE.jpg" },
      { name: "Gheldar Fish With Rice", arabic: "سمك جيذر مع أرز", image: "/images/menu/GHEIDAR FISH WITH RICE.webp" },
      { name: "King Fish With Rice", arabic: "سمك كنعد مع أرز", image: "/images/menu/KING FISH WITH RICE.webp" },
      { name: "Prawns With Rice", arabic: "روبيان مع أرز", image: "/images/menu/FISH FILLET GRILLED WITH RICE.jpg" } 
    ]
  },
  specials: {
    id: "specials",
    title: "ZAMZAM SPECIALS",
    subtitle: "أطباق زمزم الخاصة",
    coverImage: "/images/menu/mix_chicken_platter.jpg",
    description: "Curated combinations designed for sharing and celebrating.",
    items: [
      { name: "Mix Chicken Platter", arabic: "طبق دجاج مشكل", image: "/images/menu/mix_chicken_platter.jpg" },
      { name: "Mix Meat Platter", arabic: "طبق لحم مشكل", image: "/images/menu/mix_meat_platter.jpg" },
      { name: "All Mix Platter", arabic: "طبق مشكل كامل", image: "/images/menu/mix_meat_platter.jpg" },
      { name: "Chicken Biriyani", arabic: "برياني دجاج", image: "/images/menu/CHICKEN DUM BIRYANI 1.jpg" },
      { name: "Beef Biriyani", arabic: "برياني لحم بقر", image: "/images/menu/beef_biryani.png" },
      { name: "Beef Haneeth", arabic: "حنيذ لحم بقر", image: "/images/menu/beef_haneeth.jpg" }, 
      { name: "Mutton Haneeth", arabic: "حنيذ لحم غنم", image: "/images/menu/mutton_haneeth.png" }
    ]
  },
  desserts: {
    id: "desserts",
    title: "DESSERTS",
    subtitle: "حلويات",
    coverImage: "/images/menu/kunafa.png",
    description: "The perfect sweet ending to your authentic Arabian dining experience.",
    items: [
      { name: "Kunafa", arabic: "كنافة", image: "/images/menu/kunafa.png" },
      {
        name: "Loqaimat",
        arabic: "لقيمات",
        image: "/images/menu/LUQIMAT 2.jpeg",
        sizes: [
          { name: "Small", arabic: "صغير" },
          { name: "Standard", arabic: "عادي" }
        ]
      },
      { name: "Honey Cake Slice", arabic: "شريحة كيكة العسل", image: "/images/menu/HONEY CAKE 2.JPG" },
      { name: "Saffron Milk Cake", arabic: "كيكة الحليب بالزعفران", image: "/images/menu/saffron_milk_cake.png" }
    ]
  },
  grills: {
    id: "grills",
    title: "GRILLS & RICE COMBO",
    subtitle: "كومبو مشاوي مع ارز",
    coverImage: "/images/menu/mixed_grill_large.jpg",
    description: "Premium cuts marinated to perfection and char-grilled over open flames.",
    items: [
      { name: "Chicken Tikka with Rice", arabic: "تكة دجاج مع أرز", image: "/images/menu/mixed_grill_small.jpg" }, 
      { name: "Mutton Tikka with Rice", arabic: "تكة لحم غنم مع أرز", image: "/images/menu/mixed_grill_medium.jpg" }, 
      { name: "Chicken Kebab with Rice", arabic: "كباب دجاج مع أرز", image: "/images/menu/mixed_grill_small.jpg" }, 
      { name: "Mutton Kebab with Rice", arabic: "كباب لحم غنم مع أرز", image: "/images/menu/mixed_grill_large.jpg" }, 
      { name: "Lamb Chops with Rice", arabic: "ريش غنم مع أرز", image: "/images/menu/mixed_grill_large.jpg" } 
    ]
  },
  salads: {
    id: "salads",
    title: "SALADS",
    subtitle: "سلطة",
    coverImage: "/images/salads/arabic_salad.png", 
    description: "Fresh, crisp, and vibrant salads to complement your main courses perfectly.",
    items: [
      {
        name: "Hummus",
        arabic: "حمص",
        image: "/images/salads/hummus.png",
        sizes: [
          { name: "Small", arabic: "صغير" },
          { name: "Large", arabic: "كبير" }
        ]
      },
      {
        name: "Mutabbal",
        arabic: "متبل",
        image: "/images/salads/mutabbal.png",
        sizes: [
          { name: "Small", arabic: "صغير" },
          { name: "Large", arabic: "كبير" }
        ]
      },
      { name: "Girgir Salad", arabic: "سلطة جرجير", image: "/images/salads/girgir_salad.png" },
      { name: "Fattoush", arabic: "فتوش", image: "/images/salads/fattoush.png" },
      { name: "Arabic Salad", arabic: "سلطة عربية", image: "/images/salads/arabic_salad.png" },
      { name: "Yoghurt Salad", arabic: "سلطة زبادي", image: "/images/salads/yoghurt_salad.png" },
      { name: "Plain Yoghurt", arabic: "زبادي سادة", image: "/images/salads/yoghurt_salad.png" },
      { name: "Green Salad", arabic: "سلطة خضراء", image: "/images/salads/arabic_salad.png" }
    ]
  },
  juices: {
    id: "juices",
    title: "JUICES",
    subtitle: "عصائر",
    coverImage: "/images/JUICES/POMEGRANATE JUICE.jpeg",
    description: "Freshly squeezed juices prepared daily to perfectly complement your meal.",
    items: [
      { name: "Lemon Mint Juice", arabic: "عصير ليمون نعناع", image: "/images/JUICES/LEMON MINT JUICE.jpeg" },
      { name: "Mango Juice", arabic: "عصير مانجو", image: "/images/JUICES/MANGO JUICE.jpeg" },
      { name: "Pomegranate Juice", arabic: "عصير رمان", image: "/images/JUICES/POMEGRANATE JUICE.jpeg" }
    ]
  }
};

export const menuCategories = [
  {
    id: "chicken",
    title: "CHICKEN",
    subtitle: "دجاج",
    label: "Signature Collection",
    image: "/images/MANDI/FULL CHICKEN MANDI WITH RICE.jpeg",
    featured: true,
  },
  {
    id: "mutton",
    title: "MUTTON",
    subtitle: "لحم غنم",
    label: "Premium Lamb",
    image: "/images/menu/mutton_mandi.jpg",
  },
  {
    id: "beef",
    title: "BEEF",
    subtitle: "لحم بقر",
    label: "Tender Beef",
    image: "/images/menu/beef_haneeth.jpg",
  },
  {
    id: "fish",
    title: "FISH",
    subtitle: "سمك",
    label: "Fresh Catch",
    image: "/images/menu/FISH FILLET GRILLED WITH RICE.jpg",
  },
  {
    id: "specials",
    title: "ZAMZAM SPECIALS",
    subtitle: "أطباق زمزم الخاصة",
    label: "Chef Special",
    image: "/images/menu/mix_chicken_platter.jpg",
  },
  {
    id: "desserts",
    title: "DESSERTS",
    subtitle: "حلويات",
    label: "Sweet Endings",
    image: "/images/menu/kunafa.png",
  },
  {
    id: "grills",
    title: "GRILLS & RICE COMBO",
    subtitle: "كومبو مشاوي مع ارز",
    label: "Premium Grills",
    image: "/images/menu/mixed_grill_large.jpg",
  },
  {
    id: "salads",
    title: "SALADS",
    subtitle: "سلطة",
    label: "Fresh Sides",
    image: "/images/salads/arabic_salad.png", 
  },
  {
    id: "juices",
    title: "JUICES",
    subtitle: "عصائر",
    label: "Fresh Refreshments",
    image: "/images/JUICES/POMEGRANATE JUICE.jpeg",
  },
];
