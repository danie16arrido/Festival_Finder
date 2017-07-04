use festival_finder;

db.dropDatabase();

db.festivals.insert([
{
  "title": "WAKAKUSA YAMAYAKI",
  "description": "The name of the festival literally translates as ‘The Mountain Roast’ and is where on the 4th Saturday in January each year, the dead grass on the hillside of Mount Wakakusayama is set ablaze - but until after one epic fireworks display. There are two theories of the evolution of the festival. The first claims that the burning of the mountainside began during boundary conflicts between Nara’s great temples (Tōdai-ji and Kōfuku-ji), while another claims the fires were used to drive away wild boars. Once set ablaze the mountain can burn for up to an hour and because of the mountains elevation it can be seen from anywhere in the city.",
  "type": "Religious_Traditional",
  "start": "2018-01-27",
  "end": "2018-01-27",
  "country": "Japan",
  "position": {"lat": 34.685087, "lng": 135.805},
  "rating": 7,
  "image": "images/WAKAKUSA_YAMAYAKI.jpg"
},

{
  "title": "SUNDANCE FILM FESTIVAL",
  "description": "Sundance is North America’s most famous independent film festival, appealing to the non-conformist and rebellious film directors who do not want to play by Hollywood’s rules. Located in a relatively small town, first time attendees may be surprised by the lack of glamour of where the films are shown, but there is a certain buzz about sitting in an old theater watching a mold-bursting indie film sat besides an actor about to hit super-stardom. If you love edgy, powerful films, Sundance may be just what you are looking for.",
  "type": "Film",
  "start": "2018-01-18",
  "end": "2018-01-28",
  "country": "USA",
  "position": {"lat": 40.646062, "lng": -111.497973},
  "rating": 8,
  "image": "images/SUNDANCE_FILM_FESTIVAL.jpg"

},

{
  "title": "CARNIVALE DI VENEZIA",
  "description": "During the day, it’s fun to wander around the ancient streets of the city surrounded by people in 18th century costumes - you’ll feel as if you’ve jumped straight into Eyes Wide Shut. Just make sure you try and get away from the busy streets around San Marco Square - the Cannaregio and Dorsoduro areas offer great choices to party with locals, especially at night when most day trippers leave.",
  "type": "Carnival",
  "start": "2018-01-27",
  "end": "2018-02-13",
  "country": "Italy",
  "position": {"lat": 45.440847, "lng": 12.315515},
  "rating": 3,
  "image": "images/CARNIVALE_DI_VENEZIA.jpg"
},

{
  "title": "MARDI GRAS",
  "description": "Mardi Gras is synonymous with hedonism and debauchery, and with a motto of Laissez les bons temps rouler (Let the good times roll), it’s no surprise that this is probably the wildest party in the United States. It may be a surprise to some, however, that Mardi Gras is the official final celebration before the period of Lent, the Catholic period of introspection and sacrifice. But whatever your religion - everyone is welcome! So grab your purple, green and gold (the festivals official colors representing justice, faith and power) and take to the streets for one of the biggest parties of your life.",
  "type": "Religious_Traditional",
  "start": "2018-02-13",
  "end": "2018-02-17",
  "country": "USA",
  "position": {"lat": 29.951066, "lng": -90.071532},
  "rating": 14,
  "image": "images/MARDI_GRAS.jpg"
},

{
  "title": "SKY LANTERN FESTIVAL",
  "description": "According to the elders of Pingxi, the Sky Lantern Festival originated in the Xing Dynasty, more than two thousand years ago. At that time, bands of outlaws frequently raided the lowland villages, forcing residents to seek refuge in the mountains. Village watchmen used “fire balloons” as signals to inform the residents that their houses were safe once again and when those hiding in the hills saw the celestial flares, they knew it was time to go home. Today these lanterns have two main purposes. One: they display scribbled messages of the hopes and dreams of the purchaser who then release them into the night sky by the power of fire; and Two: they represent the end of the Chinese New Year period and their release symbolizes the shedding of outdated ways and embracing the future.",
  "type": "New_Year",
  "start": "2018-03-02",
  "end": "2018-03-02",
  "country": "China",
  "position": {"lat": 25.024831, "lng": 121.740865},
  "rating": 18,
  "image": "images/SKY_LANTERN_FESTIVAL.jpg"
},

{
  "title": "RIO CARNIVAL",
  "description": "The Carnival in Rio de Janeiro is a festival held before Lent every year and considered the biggest carnival in the world with two million people per day on the streets. The typical Rio carnival parade is filled with revelers, floats, and adornments from numerous samba schools which are located in Rio. Dressed in beautiful costumes these amazing dancers parade through the Sambadrome; official balls & parties are held at Copacabana Palace. And the streets come alive with the mini festivals instigated by locals where formality and structure are left far behind as music and dancing become the order of the day.",
  "type": "Carnival",
  "start": "2018-02-09",
  "end": "2018-02-14",
  "country": "Brazil",
  "position": {"lat": -22.906847, "lng": -43.172896},
  "rating": 21,
  "image": "images/RIO_CARNIVAL.jpg"
},

{
  "title": "HOLI",
  "description": "The annual Holi Festival celebration in India is known for its vibrant display of color and beautiful meaning of unity. Each year the Indian people come together to throw colors and celebrate how the color unifies them and washes away their differences for the duration of the day. Every person in India celebrates the holiday and it is truly a spectacle to behold for a foreign visitor. The festival starts out quite mild in the morning and grows into a crazy and colorful, almost out of control, party by the afternoon. It is mostly celebrated on the streets with loud music before people retreat to private house parties to eat and continue the celebration.",
  "type": "Religious_Traditional",
  "start": "2018-03-01",
  "end": "2018-03-02",
  "country": "India",
  "position": {"lat": 28.626371, "lng": 77.373661},
  "rating": 1,
  "image": "images/HOLI.jpg"
},

{
  "title": "ST PATRICK’S DAY",
  "description": "St Patrick’s day has taken place in New York City on March 17th since 1762. On this day, the whole city turns green, lots of people paint a green shamrock on their faces and even the Empire State Building is lit up in green. The Irish pubs are packed with Irish immigrants and many other nationalities who celebrate this fun holiday. Many Irish bake the traditional soda bread on this day. It is a bread made of raisins, baking soda, baking powder, flour, sugar, salt and margarine. It is one of the most fun days of the year in NYC every year, when the whole city turns into a big green party and many people get drunk.",
  "type": "Religious_Traditional",
  "start": "2018-03-17",
  "end": "2018-03-17",
  "country": "USA",
  "position": {"lat": 40.712784, "lng": -74.005941},
  "rating": 2,
  "image": "images/ST_PATRICKS_DAY.jpg"
},

{
  "title": "SXSW",
  "description": "Like free stuff? Yeah me too! Free food, drink (the hard stuff) and music sound good? Welcome to South By Southwest in Austin, Texas. SXSW is technically a festival for media types who work in the music, film and digital industries. March is chance for them to watch presentations, network and then party but there are also ‘free’ shows. You do have to pay but not by handing over cash, you have to give up some time by queueing but it is worth it to see popular acts like Chvrches and discover new music such as Daniel Wilson.",
  "type": "Music",
  "start": "2018-03-09",
  "end": "2018-03-18",
  "country": "USA",
  "position": {"lat": 30.267153, "lng": -97.743061},
  "rating": 9,
  "image": "images/SXSW.jpg"
},

{
  "title": "KINGS DAY",
  "description": "Every year on April 27 Amsterdam turns a very bright shade of orange for King’s Day, which is the King’s birthday (Willem-Alexander of the House of Orange). It’s a crazy fun celebration when the center of the city is basically car, tram, and bike-free simply because there are too many people on foot. It has a contagious festival-like atmosphere with street vendors, a market day when anyone can sell pretty much anything (except alcohol), and an insane boat parade party on the canals that will have you dancing unconsciously. It’s a festival that can put a smile on everyone’s face! Tips: Bring a jacket, wear orange, bring cash. Want to know more? Read How to Have the Best King’s Day Ever in Amsterdam.",
  "type": "Religious_Traditional",
  "start": "2018-04-27",
  "end": "2018-04-27",
  "country": "Netherlands",
  "position": {"lat": 52.370216, "lng": 4.895168},
  "rating": 10,
  "image": "images/KINGS_DAY.jpg"
},

{
  "title": "SNOWBOMBING",
  "description": "Snowbombing is the biggest party on the snow held in Mayrhofen, Austria in April every year. Primarily a festival about snow sports, it has grown to become the biggest music festival in the mountains over the past few years. Billed as a Ride N Seek event (a snowboard competition like no other) you’ll see the pros of the industry throwing some serious tricks in the park by day and watch an eclectic mix of music acts each night. Add in a fancy dress day where the mountain is filled with colourful skiwear and fake mustaches - it’s one of the best festivals on snow!",
  "type": "Music",
  "start": "2018-04-03",
  "end": "2018-04-08",
  "country": "Austria",
  "position": {"lat": 47.16919, "lng": 11.865146},
  "rating": 11,
  "image": "images/SNOWBOMBING.jpg"
},

{
  "title": "SONGKRAN",
  "description": "In Thailand the celebration of New Year is referred to as Songkran. The exact date varies every year depending on the lunar cycle but usually happens sometime in April. The traditional celebration of Songkran is to return to your families and pay respect to your elders by spraying a little scented water on their hands. However, Songkran has changed over the years and has become a public 3 day water fight. It is near impossible to walk down the street without being sprayed by water. Shop owners will sit outside their shops with giant containers of ice water ready to throw at anyone walking by, while others will roam the streets, sometimes in tuk tuks! Tourists from all over the world will travel to Thailand to take part in these celebrations.",
  "type": "New_Year",
  "start": "2018-04-13",
  "end": "2018-04-15",
  "country": "Thailand",
  "position": {"lat": 13.756331, "lng": 100.501765},
  "rating": 12,
  "image": "images/SONGKRAN.jpg"
},

{
  "title": "STARS OF THE WHITE NIGHTS",
  "description": "White Nights isn’t really one festival but a collection of events around the longest days of the year, from mid-­May to mid-­July. This festival is an extravaganza of the arts — music, opera, ballet, film and outdoor celebrations including the Scarlet Sails, a fleet of red­-sailed, tall ships with a gunpowder-packed fireworks show, Russian style. Long walks along the River Neva in almost constant daylight reveal roving gypsy bands, jugglers, sword swallowers, fire eaters, even stoic Russian mimes who might surprise you with their humor.",
  "type": "Scenic_Arts",
  "start": "2018-05-26",
  "end": "2018-06-23",
  "country": "Russia",
  "position": {"lat": 59.93428, "lng": 30.335099},
  "rating": 13,
  "image": "images/STARS_OF_THE_WHITE_NIGHTS.jpg"
},

{
  "title": "CANNES FILM FESTIVAL",
  "description": "One of the leading film festivals around the world, it was originally a touristic social event rather than a competition. However over the years the number and quality of films has grown to make it one of the most prestigious events in the film industry calendar. It’s a ritzy, glamorous affair, filled with fashion, and is somewhere you could arrive a nobody and leave a somebody. And even if you’re not on the rise to critical acclaim, you can have a wonderful time celeb-spotting the ones who are!",
  "type": "Film",
  "start": "2018-05-09",
  "end": "2018-06-20",
  "country": "France",
  "position": {"lat": 43.552847, "lng": 7.017369},
  "rating": 4,
  "image": "images/CANNES_FILM_FESTIVAL.jpg"
},

{
  "title": "GLASTONBURY",
  "description": "Even though it only exists for a week every year, Glastonbury is one of my favourite places on earth. 150,000 people come together to listen to great music, dress up in silly outfits and have a wonderful time on a farm in Somerset. Yes, it can be muddy and rainy and wet but it’s a festival like no other.Whichever way your musical tastes lean, there will be something to suit, plus there’s theatre, comedy, parties and film showings when you (heavens forbid) decide you’ve had enough of the music. I’ve been going for seven years and love it and would very much recommend that you give it a try - just don’t forget to bring your wellies.",
  "type": "Music",
  "start": "2019-06-21",
  "end": "2019-06-25",
  "country": "UK",
  "position": {"lat": 51.165725, "lng": -2.589688},
  "rating": 15,
  "image": "images/GLASTONBURY.jpg"
},

{
  "title": "SAN VINO WINE FIGHT",
  "description": "Spain’s annual Batalla de Vino, or Wine Battle, must be one of Europe’s most unique and underrated annual festivals. Each year in the small village of Haro, thousands of revelers emerge to a hill just after sunrise to wage war on each other using red wine as their weapon! Water guns, insect sprayers, and buckets are all filled with the deep red liquid that leaves attendees stained from head to toe. This wild event takes place on the morning of June 29th each year. But the night before is when the party really gets started. The festivities draw a mostly local crowd, making it a fun cultural experience as you stay up all night drinking and dancing in the streets until the wine fight begins in the early morning hours.",
  "type": "Food_and_Drink",
  "start": "2018-06-28",
  "end": "2018-06-30",
  "country": "Spain",
  "position": {"lat": 42.576872, "lng": -2.85023},
  "rating": 16,
  "image": "images/SAN_VINO_WINE_FIGHT.jpg"
},

{
  "title": "DOWNLOAD",
  "description": "Download is a 3 day music festival in England that happens in Donington Park. It started in 2003 and as taken place every year since then. It is so popular that a Paris version launched in 2016. Music goers can either buy individual day tickets or a 3 day pass to the whole event. The 3 day pass also comes with the option of camping. I’m an English girl who loves her music so I’ve been to a few festivals over the years but Download is the only music festival I keep returning to. I love the atmosphere here and the band selection is always spot on. They have a wide variety of acts from unknown bands waiting to get discovered, to popular bands and even rock legends. Last year I was very happy to see KISS play live!",
  "type": "Music",
  "start": "2018-06-08",
  "end": "2018-06-10",
  "country": "UK",
  "position": {"lat": 52.830547, "lng": -1.37884},
  "rating": 17,
  "image": "images/DOWNLOAD.jpg"
},

{
  "title": "TOMORROWLAND",
  "description": "Started in 2004 by a few renowned DJ’s, the festival these days attracts thousands if not millions of EDM lovers from across the globe. Held on a lovely summery weekend this place turns into pure megalomania. The extravagance of this festival with its psychedelic motifs and stages gets everyone going right from the start and it never stops. DJs like - Tiesto, David Guetta, Hard well, Afrojack are just some of the big names who perform every year to the sheer delight of the crowds in attendance. An open field with tents and camps all around for people to rest and sleep while enjoying the music. Meeting new people around the world who enjoy the same kind of music just pulsates the nerves and induces that feeling of belonging and that’s enough to get anyone hooked to this festival.",
  "type": "Music",
  "start": "2017-07-21",
  "end": "2017-07-30",
  "country": "Belgium",
  "position": {"lat": 51.08608, "lng": 4.36633},
  "rating": 5,
  "image": "images/TOMORROWLAND.jpg"
},

{
  "title": "COMIC CON INTERNATIONAL",
  "description": "With the rise in popularity of animated films, western cartoons and Anime as well as video games and other fantasy novels, the franchise of Comicon has been growing over the years since the 70’s. Basically, this festival features a four-day event that is held at San Diego Convention Center in California. A wide variety of different genre in the fantasy world are all over the place during the whole event. Some famous movie and TV personalities can also be seen in this big event. In 2015, there were a lot of personalities that showed up in the event such as the all beautiful Gal Gadot (Wonderwoman), Hugh Jackman (Wolverine), Jennifer Lawrence (“The Mockingjay”/ Mystique), and even the all popular and talkative Deadpool, Ryan Reynolds. The cool part here is not just meeting your idols but also by partaking in the hype of the fantasy world by cosplaying your favorite characters, talking with strangers and making friends with the same enthusiasm with you. It’s a four-day event where you can act like a child and have fun like you don’t care about the whole world.",
  "type": "Film",
  "start": "2017-07-20",
  "end": "2017-07-23",
  "country": "USA",
  "position": {"lat": 32.715738, "lng": -117.161084},
  "rating": 19,
  "image": "images/COMIC_CON_INTERNATIONAL.jpg"
},

{
  "title": "JUST FOR LAUGHS",
  "description": "For comedy lovers there is no other festival in the world better than Montreal’s Just for Laughs. The event takes place at the end of July and if you visit you get to split your sides laughing, see some celebrity comics and tour one of the most beautiful cities in the world. Comics who have played Just for Laughs include: Jerry Seinfeld, John Cleese, Rowan Atkinson and Canadian homeboy favourite Russell Peters. The Festival concentrates most of its show in the Latin Quarter. During the day street performers delight the crowds and at night the city comes alive with comedy happenings scattered throughout the City.",
  "type": "Film",
  "start": "2017-07-14",
  "end": "2017-07-30",
  "country": "Canada",
  "position": {"lat": 45.501689, "lng": -73.567256},
  "rating": 20,
  "image": "images/JUST_FOR_LAUGHS.jpg"
},

{
  "title": "EDINBURGH FRINGE FESTIVAL",
  "description": "Theater, music, film, comedy, dance, musicals, spoken word, street performances, and exhibitions - Edinburgh Festival Fringe has it all. Known as the world’s largest arts festival, each August the Fringe takes over Scotland’s capital, drawing artists, performers, and attendees from around the world. Fringe developed 70 years ago (as an alternative to the selective Edinburgh International Festival) and is an open-access festival, meaning that anyone can participate or perform. You can either buy tickets in advance or just walk down the bustling Royal Mile and let the many promoters guide you to a cheap or free show. The festive atmosphere of the entire city is truly contagious and something to experience at least once!",
  "type": "Scenic_Arts",
  "start": "2017-08-04",
  "end": "2017-08-28",
  "country": "Scotland",
  "position": {"lat": 55.953252, "lng": -3.188267},
  "rating": 6,
  "image": "images/EDINBURGH_FRINGE_FESTIVAL.jpg"
},

{
  "title": "LA TOMATINA",
  "description": "La Tomatina Festival takes place in a Spanish town in Valencia (Buñol). I went there in 2008 and it was a crazy fun festival. At around 10 am, the tomato war is starting. A few small trucks go inside the town, bringing with them kilos and kilos of tomatoes. They let the tomatoes drop to the ground, and that signals the beginning of the party. If you´ve ever wondered if this is painful, then you shouldn´t worry. Most of time, the tomatoes you will get are the mashed or crushed tomatoes that you can use to throw to your friends and even to strangers also partaking in the party. You´ll definitely get dirty. There will always be nice locals who will take out their hose and will splash the people with water so they can get cleaned. Bringing goggles are highly recommended. The event is definitely so much fun!",
  "type": "Religious_Traditional",
  "start": "2017-08-30",
  "end": "2017-08-30",
  "country": "Spain",
  "position": {"lat": 39.420344, "lng": -0.790133},
  "rating": 22,
  "image": "images/LA_TOMATINA.jpg"
},

{
  "title": "NOTTING HILL CARNIVAL",
  "description": "Notting Hill Carnival is one of the highlight’s of London’s summer calendar. Every August bank holiday weekend, the normally sedate Notting Hill explodes into a riot of steel drums, exuberantly decorated floats and those dancers.Those taking part in the carnival have put in months and months of preparation - but the joy for spectators is turning up, and embracing whatever comes your way. Everyone dances, even people who never dance - the music is just too infectious not to. You might not quite reach the standard of the carnivalistas on the float (I certainly don’t anyway) but dance your feet off anyway. You’ll have to wait another 364 days for the opportunity to come round again.",
  "type": "Carnival",
  "start": "2017-08-30",
  "end": "2017-08-30",
  "country": "UK",
  "position": {"lat": 51.511029, "lng": -0.205389},
  "rating": 23,
  "image": "images/NOTTING_HILL_CARNIVAL.jpg"
},

{
  "title": "OKTOBERFEST",
  "description": "Every beer lover simply must attend the Oktoberfest once in their life! I recently checked it off my bucket list with great glee. I was sure there was no way I was going to drink TWO of those huge steins you see in pictures, but two were included with admission so two it was. No problem! Tent hopping is part of the fun and that means drinking even MORE beer. No problem! But thankfully there is a cafe tent where you can sober up with coffee and Black Forest cake, and then either dive in again or go back to your room in Munich to recover.",
  "type": "Food_and_Drink",
  "start": "2017-09-16",
  "end": "2017-10-03",
  "country": "Germany",
  "position": {"lat": 48.135125, "lng": 11.581981},
  "rating": 24,
  "image": "images/OKTOBERFEST.jpg"
},

{
  "title": "HAJJ",
  "description": "Hajj refers to a Muslim’s pilgrimage to Mecca and is one of the five pillars of Islam. At least once in his or her lifetime, each Muslim is expected to undertake this pilgrimage the sacred city of Islam. This holy journey is called the hajj in Arabic. While a visit to Mecca is beneficial any time of the year, it must take place during the month of Dhu al-Hijja (the last month of the Islamic year) to fulfill the requirements of the hajj.As with the sawm (fasting), exceptions are made for those who are physically or financially unable to fulfill this obligation, and one is actually commanded not to make the hajj if to do so would cause hardship for his or her family. However, those unable to go themselves may fulfill their obligation by sending someone in their stead.",
  "type": "Religious_Traditional",
  "start": "2017-08-30",
  "end": "2017-09-04",
  "country": "Saudi Arabia",
  "position": {"lat": 21.389082, "lng": 39.857912},
  "rating": 25,
  "image": "images/HAJJ.jpg"
},

{
  "title": "AUSTIN CITY LIMITS",
  "description": "Austin City Limits can be described in one word, DYNAMIC. This amazing city boasts culture from all walks of life, contrary to most people’s beliefs that Austin, Texas is home to guys dressed in cowboy boots and hats riding horses. ACL Festival is no different, the social scene is mixed with all genres of music and art installations in a live music setting. One minute you can be head bobbing to 21 Pilots, lip syncing to Drake, being serenaded by the Weeknd, to watching a theatrical performance by Florence and the Machine. Did I mention some big name Electronic Music Dj’s make appearances here too? If diversity and overall different experience in an awesome town is what you look for in a festival, Austin City Limits is the place to be!",
  "type": "Music",
  "start": "2017-10-06",
  "end": "2017-10-08",
  "country": "USA",
  "position": {"lat": 30.267153, "lng": -97.743061},
  "rating": 26,
  "image": "images/AUSTIN_CITY_LIMITS.jpg"
},

{
  "title": "EPCOT FOOD & WINE FESTIVAL",
  "description": "As a Pastry Chef, self proclaimed ‘foodie,’ and lover of all things Disney there is nothing I look forward to more than The EPCOT International Food & Wine Festival. Although the dates vary slightly each year the festival typically runs from September to mid-November, which prompts my singing of ‘It’s The Most Wonderful Time Of The Year’ a little earlier than most because, well, it is the most wonderful time of the year at Disney! On top of the 11 countries permanently represented in EPCOT’s World Showcase, the festival highlights food and beverage offerings from 19 other nations at themed stalls. In addition, they offer seminars and demonstrations from famous chefs, wine tastings, and even film ABC’s The CHEW on site.",
  "type": "Food_and_Drink",
  "start": "2017-08-31",
  "end": "2017-11-13",
  "country": "USA",
  "position": {"lat": 28.538336, "lng": -81.379236},
  "rating": 27,
  "image": "images/EPCOT_FOOD_WINE_FESTIVAL.jpg"
},

{
  "title": "DIWALI",
  "description": "Diwali is supposed to last for about five days and consists in exchanging gifts, burning butter and oil lanterns, and in fireworks. In fact, it actually lasts more than the official five days, and it is incredibly noisy, with fireworks exploding literally anywhere - so much so that the already dramatic pollution levels of India increase further. Most Indians take their holidays during Diwali, or right after. Cities can get incredibly crowded with internal tourists - but the atmosphere is incredible!",
  "type": "Religious_Traditional",
  "start": "2017-10-19",
  "end": "2017-10-23",
  "country": "India",
  "position": {"lat": 19.075984, "lng": 72.877656},
  "rating": 28,
  "image": "images/DIWALI.jpg"
},

{
  "title": "DIA DE LOS MUERTOS",
  "description": "Always a festival in Mexico, the opening scene’s of the James Bond movie, Spectre depicted a lavish parade that has ‘encouraged’ the Mexican Government to turn it into a reality. And the first Day of the Dead Festival was held in Mexico City in 2016. The interest in the parade is so vast that Mexico anticipate it becoming as big as Rio’s Carnival in the years to come.",
  "type": "Religious_Traditional",
  "start": "2017-10-31",
  "end": "2017-11-02",
  "country": "Mexico",
  "position": {"lat": 19.432608, "lng": -99.133208},
  "rating": 29,
  "image": "images/DIA_DE_LOS_MUERTOS.jpg"
},

{
  "title": "LOY KRATHONG & YI PENG",
  "description": "Loi Krathong is one of the most picturesque and most romantic festivals of Thailand, falling on the night of full moon of the 12th lunar month. The moon appears exceptionally bright, beautiful and full. Young couples draped in traditional finery, gather around lakes, rivers and canals to pay respects to the goddess of water by launching of the Krathong into the water. Krathong is a lotus shaped container made of banana leaves, containing a candle, incense sticks, flower and coins.People also make their way to these water bodies where they can float Krathongs and make their wishes. It is said that people congregate for floating away their sins and miseries and hope for a better future for their families. Click to Read More. At the same people light lanterns which rise into the night sky (Yi Peng) which makes for one of the most amazing sights you will ever see.",
  "type": "Religious_Traditional",
  "start": "2017-11-04",
  "end": "2017-11-05",
  "country": "Thailand",
  "position": {"lat": 18.706064, "lng": 98.981716},
  "rating": 30,
  "image": "images/LOY_KRATHONG_YI_PENG.jpg"
},

{
  "title": "MEVLANA WHIRLING DERVISHES",
  "description": "Men dressed in whites robes and tall hats spinning in circles doesn’t sound as exciting as running with the bulls or dancing at Rio’s Carnival, but the chance to watch the Whirling Dervishes will change you in a way you’d never expect. Based on the teachings and practices of the 13th-century poet Rumi, this 10-day festival will expose you to the power of devotion and show you that spinning can do more than just make you dizzy.",
  "type": "Religious_Traditional",
  "start": "2017-12-07",
  "end": "2017-12-17",
  "country": "Turkey",
  "position": {"lat": 37.874643, "lng": 32.493155},
  "rating": 31,
  "image": "images/MEVLANA_WHIRLING_DERVISHES.jpg"
},

{
  "title": "KRAMPUSNACHT",
  "description": "The mythical Krampus is horned half-goat, half-deamon who is meant to whip children into being nice at Christmas - and he’s more than a little terrifying to the uninitiated.Bearing horns, long dark hair (fur), and fangs, the anti-St. Nicholas comes with a chain and bells that he lashes about, along with a bundle of birch sticks meant to swat naughty children. He then hauls the bad kids down to the underworld. Or so the story goes. In the Austrian Alps, a parade of Krampus take over the streets, their chains rattling as they walk through the snow covered streets, carrying torches of fire and whipping unsuspecting passersby.",
  "type": "Religious_Traditional",
  "start": "2017-12-05",
  "end": "2017-12-05",
  "country": "Austria",
  "position": {"lat": 46.63646, "lng": 14.312225},
  "rating": 32,
  "image": "images/KRAMPUSNACHT.jpg"
},

{
  "title": "HOGMANAY",
  "description": "Picture the core of the city bustling with people partying, jumping from one stage to the other as 5 bands are usually playing at the same time all over the place, staring at fireworks as midnight approaches, having a blast even when the weather doesn’t help and you will start understanding how much fun it is. And then add popular dances, an ice rink, Christmas markets, a ferris wheel, a torchlight procession on the 30th, a proper music festival on the 31st, the nuts Loony Dook race that ends up swimming in the not so warm waters by the Forth bridge on the outskirts of the city as weel as an art explosion taking over 9 bizarre venues called Scot:Lands.",
  "type": "New_Year",
  "start": "2017-12-30",
  "end": "2018-01-01",
  "country": "Scotland",
  "position": {"lat": 55.953252, "lng": -3.188267},
  "rating": 33,
  "image": "images/HOGMANAY.jpg"
}
]);

db.users.insert([
  { name: "Daniel", last_name: "Garrido", myFestivals: [{id:3},{id:4}]},
  { name: "Juan", last_name: "Cortez", myFestivals: [{id:1}] }
]);

db.festivals.createIndex( { type: 1 } );
db.festivals.createIndex( { country: 1 } );
db.festivals.createIndex( { rating: 1 } );
