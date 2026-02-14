// data.ts
let blogImage = "blog/blog-d-1-1.jpg"; // Static image import for blog main image
let blogImg2 = "blog/blog-d-1-2.jpg"; // Static image import for inner images
let blogImg3 = "blog/blog-d-1-3.jpg"; // Static image import for inner images
let commentImg1 = "blog/blog-comment-1-1.png"; // Static image for comment avatars
let commentImg2 = "blog/blog-comment-1-2.png"; // Static image for comment avatars
let quoteImage = "shapes/quote-Icon.png";

export const blogDetail = {
  title: "Get Best Advertiser in Your Side Pocket",
  date: "20 Feb, 2024",
  day: "20",
  month: "Feb",
  image: blogImage, // Static image imported
  content: [
    "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.",
    "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.",
  ],
  blockQuote:
    "Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel ultricies urnacondimentum, sapien neque lobortis tortor, quis efficitur mi ipsum eu metus. Praesent eleifend orci sit amet est vehicula.",
  quoteImage: quoteImage,
  blogImages: [blogImg2, blogImg3],
  author: "Admin",
  category: "Travel",
  comment: "2",
  link: "blog-details",
  tags: ["Travel", "Services", "Agency"],
  comments: [
    {
      name: "Leslie Alexander",
      date: "February 10, 2024 at 2:37 pm",
      text: "Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto.",
      avatar: commentImg1, // Static image for comment avatar
    },
    {
      name: "Ralph Edwards",
      date: "February 10, 2024 at 2:37 pm",
      text: "Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto.",
      avatar: commentImg2, // Static image for comment avatar
    },
  ],
};

export const blogDetails = [
  {
    id: "997258",
    slug: "The Ultimate Packing Guide",
    title:
      "The Ultimate Packing Guide: How to travel for 10 days with just a carry-on.",
    date: "06 Oct",
    banner_img:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1771078951/things_dgsoka.webp",
    day: "06",
    month: "Oct",
    image:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1771076910/packing_1_nx7hit.webp", // Static image imported
    main_para:
      "Traveling for 10 days with nothing but a carry-on is the ultimate travel flex—it means no baggage fees, no waiting at the carousel, and no lugging a heavy suitcase over cobblestone streets. While the idea of fitting a week and a half of life into a small overhead bin might feel like a high-stakes game of Tetris, it’s entirely possible with a bit of strategy. By mastering the art of the capsule wardrobe and prioritizing versatile essentials, you can skip the bulk without sacrificing style or comfort. Ready to lighten your load? Here is your guide to minimalist packing for a maximalist adventure.",
    content: [
      {
        heading: "The Strategy: The 5-4-3-2-1 Rule",
        text: "To keep your bag light, you need a framework that prevents overpacking while ensuring you have enough outfits. The most effective minimalist strategy is the 5-4-3-2-1 rule, which limits you to five tops, four bottoms, three pairs of shoes, two layers, and one set of accessories. You can adjust the specific items based on your destination's climate—such as swapping shorts for trousers—but sticking to these totals is key. To make this work, prioritize a capsule wardrobe by picking one base color like navy or black so that every single top matches every single bottom, maximizing your outfit combinations.",
      },
      {
        heading: "The Tech: Roll, Cube, and Compress",
        text: "How you arrange your items inside the bag is just as important as what you choose to bring. Packing cubes are a non-negotiable tool for the carry-on traveler; they compress your clothes into manageable bricks and keep your clean and dirty items organized. For the items inside the cubes, use the 'Ranger Roll' method instead of folding to prevent wrinkles and save space. Don't forget to utilize 'dead space' by stuffing socks, chargers, or small accessories inside your spare shoes, which simultaneously protects the shoe's shape and clears out extra room in your main compartment.",
      },
      {
        heading: "The Toiletry Triage",
        text: "Liquid restrictions are often the biggest hurdle for carry-on travelers, so a strategic 'triage' of your products is essential. Whenever possible, go solid by swapping liquids for solid shampoo bars, stick deodorants, or toothpaste tabs that don't count toward your quart-sized bag limit. For the liquids you can't live without, decant them into reusable silicone travel tubes rather than bringing full-sized bottles. Finally, embrace the 'buy it there' rule for bulky, basic items like sunscreen or heavy lotions that are easily found at any local pharmacy for a few dollars.",
      },
      {
        heading: "The Wear It Hack",
        text: "The heaviest and bulkiest items in your wardrobe should never actually see the inside of your suitcase. Establish a dedicated 'airport uniform' consisting of your heaviest shoes, such as boots or thick sneakers, your bulkiest jacket, and your thickest pair of pants. If you find yourself creeping toward a weight limit, use the layering trick by wearing an extra sweater or scarf through security and the gate. You can always peel off the extra layers and stow them under the seat once you're on the plane, keeping your luggage light and compliant.",
      },
      {
        heading: "The Laundry Mid-Point",
        text: "The secret to a 10-day trip is realizing that you aren't packing for 10 days; you’re actually packing for five days, twice. Planning a quick load of laundry around day five or six allows you to reset your wardrobe without doubling the weight of your bag. Whether you use an Airbnb washing machine, a hotel's 'wash and fold' service, or simply do a quick sink wash for smaller items like socks and underwear using travel detergent packets, staying fresh is easy when you plan for a mid-trip refresh.",
      },
    ],
    blockQuote:
      "Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel ultricies urnacondimentum, sapien neque lobortis tortor, quis efficitur mi ipsum eu metus. Praesent eleifend orci sit amet est vehicula.",

    author: "Enroute Team",
    category: "Travel",
  },
  {
    id: "442189",
    slug: "seasonal-guide-to-trekking",
    title: "The Seasonal Guide to Trekking: Choosing Your Perfect Window",
    banner_img:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1771078952/trekking_2_kw3a8g.webp",
    date: "20 Dec",
    day: "20",
    month: "Dec",
    image:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1771076910/trekking_1_lhhpht.webp",
    main_para:
      "Whether you are chasing the crunch of fresh snow or the vibrant bloom of spring rhododendrons, timing is everything when it comes to a Himalayan adventure. The Seasonal Guide to Trekking: Choosing Your Perfect Window breaks down the distinct personalities of the trail across the four major seasons, offering critical insights into temperature shifts, trail conditions, and unique highlights like the frozen Juda Ka Talab or the lush summer Bugyals. Updated with 2026 climate trends, this guide serves as a strategic roadmap for hikers of all levels—from beginners seeking stable summer skies to photographers hunting for the razor-sharp clarity of autumn. It is the ultimate resource for matching your personal trekking style with the mountain’s ever-changing calendar.",
    content: [
      {
        heading: "Winter (December to February): The Snow Lover’s Paradise",
        text: "This is the most iconic time to visit when the entire trail from Sankri to the summit is blanketed in thick snow by late December. The primary highlights include walking through breathtaking snow-laden pine forests and witnessing the frozen beauty of Juda Ka Talab lake. Temperatures are brisk, ranging from 3°C to 8°C during the day and dropping significantly to between -5°C and -15°C at night. For the 2026 season, recent trends suggest that peak snowfall is shifting slightly later, so those seeking reliable 'whiteout' conditions should aim for late January or February. Because this is peak season, it is a professional necessity to book your trek at least two months in advance to secure the best campsites.",
      },
      {
        heading: "Spring (March to April): The Great Melt and Bloom",
        text: "If you want the best of both worlds—lingering snow at the summit but fresh greenery at the base—spring is your ideal window. This season is defined by the vibrant blooming of Rhododendrons (Buransh) in stunning shades of pink and red across the mountainside. You can expect comfortable daytime temperatures between 10°C and 15°C, while nights remain chilly, hovering between -2°C and 5°C. The trail conditions are particularly favorable during this time, as the lower paths are dry and easy to navigate while the summit ridge usually retains enough snow for that classic Himalayan peak experience.",
      },
      {
        heading: "Summer (May to June): The Beginner’s Choice",
        text: "Summer offers the most stable weather and clear blue skies, making it the perfect selection for families and first-time trekkers. During these months, the landscape transforms into lush green meadows known as Bugyals, offering unobstructed 360-degree views of the Swargarohini and Black Peak ranges. The weather is at its mildest, with daytime temperatures reaching 15°C to 20°C and nights staying a manageable 5°C to 10°C. A major reason to visit in summer is that it is significantly less crowded than the winter months, offering a peaceful and soul-searching experience for those who prefer solitude.",
      },
      {
        heading: "Autumn (October to November): The Photographer’s Dream",
        text: "After the monsoon rains wash the dust away, the air becomes incredibly crisp, offering the highest visibility of the entire year. This season is famous for its razor-sharp views of the Himalayan peaks set against golden-brown landscapes that are perfect for photography. Temperatures begin to cool again, with days averaging 8°C to 15°C and nights dipping between -5°C and 2°C. The primary draw of an autumn trek is the stable weather, which results in almost zero chance of trek cancellations or rain-blocked views, ensuring you see the mountains in all their glory.",
      },
    ],
    blockQuote:
      "The mountains are calling, and I must go—but only after checking the forecast for the perfect seasonal window.",
    author: "Enroute Team",
    category: "Trekking",
    tags: ["Trekking", "Himalayas", "Adventure", "2026 Trends"],
  },
  {
    id: "772145",
    slug: "best-time-to-visit-jaisalmer",
    title: "Best Time to Visit Jaisalmer: Complete Seasonal Guide 2026",
    banner_img:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1771078951/jaisalmer_au3y9e.webp",
    date: "02 Oct",
    day: "02",
    month: "Oct",
    image:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1771076909/jaisakamer_1_qjejqw.webp",
    main_para:
      "Choosing the right time to visit the 'Golden City' is the difference between a magical desert retreat and a grueling battle with the elements. Because Jaisalmer is perched in the heart of the Thar Desert, its climate is defined by extreme shifts that can see temperatures soar to scorching highs or dip to chilly, star-lit lows. For 2026, travelers should pay close attention to the festival calendar and shifting weather patterns to ensure they catch the city when its sandstone architecture truly glows under a hospitable sun. Whether you are looking for the vibrant energy of the Desert Festival or the quiet, budget-friendly atmosphere of the shoulder months, here is how to time your 2026 Rajasthani adventure.",
    content: [
      {
        heading: "Winter (October to March): The Peak Experience",
        text: "Winter is undoubtedly the best time to visit Jaisalmer, offering the most comfortable weather for exploring the living fort and the surrounding dunes. During these months, daytime temperatures hover between 20°C and 25°C, making it perfect for long camel safaris and sightseeing without the risk of heat exhaustion. However, the desert nights are a different story, with temperatures frequently dropping to 5°C or lower, so packing heavy woolens is essential for those planning to camp under the stars. For 2026, the absolute highlight of this season is the Jaisalmer Desert Festival (Maru Mahotsav), which is scheduled from January 30 to February 1, 2026. This three-day extravaganza features camel races, turban-tying competitions, and folk music, but because it draws global crowds, you should aim to book your accommodations and desert camps at least three to four months in advance.",
      },
      {
        heading: "Summer (April to June): The Scorching Low Season",
        text: "The summer months in Jaisalmer are characterized by intense, dry heat that can be physically taxing for most travelers. Temperatures during the day regularly exceed 40°C and can even peak near 50°C in May and June, effectively halting outdoor activities between 10:00 AM and 5:00 PM. While this is the least popular time for tourism, it offers a unique opportunity for budget travelers and solitude seekers to experience the city at a fraction of the cost. Luxury heritage hotels often provide significant discounts, and the fort feels more like a local residence than a tourist hub. If you choose to visit in 2026 during this window, prioritize early morning excursions, stay hydrated, and ensure your accommodation has reliable air conditioning to manage the midday 'loo' winds.",
      },
      {
        heading: "Monsoon (July to September): The Humid Awakening",
        text: "Unlike the lush green monsoons of Southern India, Jaisalmer receives very sparse rainfall, yet the season brings a welcome drop in temperature and a rare touch of greenery to the arid landscape. Daytime temperatures settle around 30°C to 35°C, but the humidity can make it feel slightly warmer than the thermometer suggests. This 'shoulder season' is perfect for photographers who want to capture the golden sandstone against dramatic, moody cloud cover without the winter crowds. The rains, though brief and unpredictable, wash the dust from the air, providing high-clarity views of the horizon. It is an excellent time for those who want a balance of lower prices and manageable weather, though you should be prepared for occasional muggy afternoons.",
      },
    ],
    blockQuote:
      "In the heart of the Thar, the sands tell a different story in every season; you just have to choose which chapter you want to be a part of.",
    author: "Enroute Team",
    category: "Travel",
    tags: [
      "Jaisalmer",
      "Desert Safari",
      "Rajasthan Tourism",
      "Travel Guide 2026",
    ],
  },
];
