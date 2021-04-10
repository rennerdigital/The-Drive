//UI Variables - These are consts for the containers of the background, choices, and text
const txtEl = document.getElementById("text")
const chEl = document.getElementById("choices")
let userChoice = ""

//Game Arrays - Array hierarchy - Game->px->text and choices

game = {

    pg0 :{
        text: [
            "The Drive",
            "a renner.digital game"
        ],
        choices: [{text:"begin", pg:"pg01"}],
    },

    pg01 :{
      text: [
          "Part I - The Incident"
      ],
      choices: [{text:"begin", pg:"pg1"}],
  },

    pg1 : {
      text: [
        "To say I was going through a bit of a rough patch was a bit of an understatement, so I jumped at the chance when my brother invited me to spend a week with him in northern British Columbia. His contract was over and we would both make the trip back home after some rest and relaxation.",
        "My parents weren't keen on their youngest kid (a mere 27 years young, barely 5 years removed from school…) driving 18 hours from Vancouver to Prince Rupert, but they knew that some time to clear my head was exactly what I needed. After promising to keep in constant cellphone communication, I was off on the open road.",
        "The first two driving days were uneventful - a night in 100 Mile House, another in Prince George, and some quality introspection in between. I set off on the third day, with the last leg of the trip ahead of me."
      ],
      choices: [{text:"Just one more full day of driving to go...", pg:"pg2"}]
    },
  
    pg2 :  {
      text: [
        "At this point, though the scenery was breathtaking, I was starting to get a little bit bored of the drive.",
      ],
      choices: [{text: "At least Clay will be able to split driving duties heading home...", pg:"pg3"}]
    },

    pg3 : {
        text: [
            "\"...There isn't much new to report at this time as far as Meteor Watch 2018 is concerned. The meteor appears to still be on course to be closest to earth in the middle of the night over the pacific Northwest. But, don't worry if you're nowhere close to there - thankfully a meteor the size of Ireland will have more than a few vantage points of which to observe... Now for traffic and weath-\"",
            "\"That's good\", I daydream to myself - that gives me a few hours to relax before we stay up and watch this thing blow by.",
            "I wonder to myself what it would be like to be a meteor or some other celestial body, floating through space on an endless mission...",
            "I emerge from my reverie and look up to see a dark mass right in front of the car. It's big, and not moving.",
            "With a split second to react, I make a decision."
        ],
        choices: [{text: "Attempt to swerve around", pg:"pg41"}, {text: "Hit the brakes", pg: "pg42"}]
    },

    pg41 : {
      text: [
          "-I chose to swerve around the object-",
          "I attempt to swerve around the object into the oncoming lane, but at 120 kilometers per hour, the car flips onto the passenger side and begins to slide. After what seems like forever, the car comes to a stop in the road-side ditch."
      ],
      choices: [{text: "I get out to inspect the car, and my heart sinks...", pg:"pg5"}]
  },

  pg42 : {
    text: [
        "-I chose to slam on the brakes-",
        "At this point, you know it's too late to stop short of whatever this thing is, but are hoping for a minimal collision. The height of the SUV propels you clean over the thing, coming down with a sickening crunch as 2 tons of car meets the pavement. Thankfully, I'm able to glide the car to the side of the road."
    ],
    choices: [{text: "I get out to inspect the car, and my heart sinks...", pg:"pg5"}]
},


pg5 : {
  text: [
    "The front of the car is smashed up extensively, and both front tires appear to have been punctured. needless to say, I wasn't going anywhere.",
    "Thank god I'm okay. A little shaken, but miraculously unharmed.",
    "After a few minutes of just staring at the wreck, my mind snaps back into thinking about what to do next."
  ],
  choices: [{text: "Call for help", pg:"pg6a1"}, {text: "Look at what caused the wreck", pg: "pg6b1"}]
},


pg6a1 : {
  text: [
    "-I chose to call for help-",
    "I have to get out of here, I think to myself. Though it is late April, nighttime exposure out here could kill me.",
    "I unlock my phone to find no signal. I remember the last conversation with my parents was over an hour ago, and even that started to get spotty towards the end.",
    "Come to think of it, I haven't seen a town, or even an exit in a long time."
  ],
  choices: [{text: "Did I get lost?", pg:"pg6a2"}]
},


pg6a2 : {
  text: [
    "No... I've been following the highway the entire time...right?",
    "I walk over to the thing that caused the wreck, about 20 metres behind me now. There was no mistaking it this time.",
    "Just about the biggest bull moose I had ever seen was sprawled out across the highway.",
    "But why was it there to begin with?",
    "It isn't something I dwell on for very long - if it had been on its feet at impact, I would have almost certainly have been killed."
  ],
  choices: [{text: "I begin to turn away from the moose when something catches my eye...", pg:"pg7"}]
},


pg6b1 : {
  text: [
    "-I chose to investigate the cause of the crash-",
    "I walk over to the thing that caused the wreck, about 20 metres behind me now. There was no mistaking it this time.",
    "Just about the biggest bull moose I had ever seen was sprawled out across the highway.",
    "But why was it there to begin with?",
    "It isn't something I dwell on for very long - if it had been on its feet at impact, I would have almost certainly have been killed.",
    "...I should really try and find cell reception. Sooner or later, I'm going to run out of daylight."
  ],
  choices: [{text: "I begin to turn away from the moose when something catches my eye...", pg:"pg7"}]
},


pg7 : {
  text: [
    "What I see next gives me a pit in my stomach the size of a watermelon..."
  ],
  choices: [{text: "That’s a bullet hole in the moose. It has to be.", pg:"pg8"}]
},


pg8 : {
  text: [
    "Feeling sufficiently freaked out, I run back to the car and check my phone again. Thank god, the “Emergency Calls” text is displayed beside my signal indicator. I frantically dial 911."
  ],
  choices: [{text: "\"911. What is the nature of your emergency?\"", pg:"pg9"}]
},


pg9 : {
  text: [
    "As quickly and calmly as I can, I spell it all out for the operator – where I am, the moose, the car, everything. The operator asks me to sit tight while she puts out a call for help. She returns to the call, but I’m not liking what she says next.",
    "\"Unfortunately, you’re in just about no-mans-land as far as responders are concerned. The nearest unit is about an hour away to pick you up. There was an accident about 15 minutes ago with multiple fatalities, 100 kilometers west of you near Prince Rupert. A RCMP patrol car has confirmed they will come and get you as soon as they can. We’ll find a place for you in Prince Rupert for the evening and get your vehicle all sorted out too.\""
  ],
  choices: [{text: "\"I have family in Prince Rupert. I can stay with my brother.\"", pg:"pg10"}]
},


pg10 : {
  text: [
    "\"Great. You do appear to be in an area with limited service – who can we contact for you?\"",
    "I give the operator contact information for my brother and my parents. She taps it into her keyboard.",
    "\"Okay, it’s going to be dark in about 30 minutes. What you should do is remain with your vehicle, put on some layers, and conserve your phone's power.\""
  ],
  choices: [{text: "I glance at my phone battery", pg:"pg11"}]
},


pg11 : {
  text: [
    "22%. Wonderful. This patrol car better be only an hour. The operator continues.",
    "“If your situation changes in any way, you should be able to reach us like you did. I’m going to disconnect the call now. Someone will be there as soon as possible.”",
    "I thank the operator and hear the tone of the call being disconnected.",
    "My lifeline temporarily retracting their grasp."
  ],
  choices: [{text: "Now, I wait...", pg:"pg12"}]
},


pg12 : {
  text: [
    "45 minutes go by, and 30 minutes since the 911 operator called back to confirm that a patrol car was en route to pick me up.",
    "It’s not terribly entertaining, and the fact that not a single car has driven by has made this wait all the more unnerving.",
    "Just then, a car comes to a stop around 50 feet behind me and the car. I glance over and am immediately blinded by the highbeams of a pickup truck."
  ],
  choices: [{text: "It can’t be the RCMP… That’s not possible.", pg:"pg13"}]
},


pg13 : {
  text: [
    "What I believe to be a man keeps walking in my direction. With the highbeams burning a hole in my eyes, all I can make out is a flannel jacket and a distinct yellow racing stripe on the drivers side of the truck.",
    "And his height. I’m not frail by any means, but this man looks enormous – I guess about 6’4” and the body type of a refrigerator.",
    "Why hasn't he said anything yet?"
  ],
  choices: [{text: "Call out", pg:"pg14a1"}, {text: "Wait for him to approach", pg: "pg14b1"}]
},


pg14a1 : {
  text: [
    "-I chose to call out to the man-",
    "“Excuse me! Hello?” was all I could muster up nervously. The man, now ten feet away, stops and scans my once reliable SUV. After what seems like an eternity, he finally speaks."
  ],
  choices: [{text: "\"Looks like you hit something\” he grumbles to you", pg:"pg15"}]
},


pg14b1 : {
  text: [
    "-I chose to wait for the man to approach-",
    "You almost want to hold your breath while the man lumbers toward you, just as the sun slips out of view. Now ten feet away, he stops and scans my once reliable SUV."
  ],
  choices: [{text: "\"Looks like you hit something\” he grumbles to you", pg:"pg15"}]
},


pg15 : {
  text: [
    "\"No shit\", I think to myself. I decide to be a little more cordial in the end."
  ],
  choices: [{text: "\"Yeah, hit a moose dead on. Lucky to be alive.\"", pg:"pg16"}]
},


pg16 : {
  text: [
    "“No kidding.” He offers back to me. He adjusts his trucker hat and continues:",
    "“I can give you a lift back into town, just a short way away. No trouble.”",
    "I probably don’t know the roads like this leviathan standing now five feet in front of me, but there is definitely not a town anywhere near here.",
    "Even without that blatant falsehood, this guy made me instantly uneasy. It was the way he spoke – his words were too deliberate.",
    "Almost as if he had a hard time believing them.",
    "That said, I could just end up being paranoid. People can be a little different out here in the middle of nowhere..."
  ],
  choices: [{text: "Politely decline", pg:"pg17"}, {text: "Accept his offer", pg:"pg17a"}]
},


pg17 : {
  text: [
    "\"Sorry, but I’m fine just staying here. The RCMP will be here in about 15 minutes to pick me up. I appreciate the gesture though.\"",
    "My new acquaintance doesn’t like the mention of the RCMP at all. He bristles, and speech starts to get more agitated.",
    "\"I insist, my truck’s warm and you can call them from there. Just come back with me.\"",
    "Only now I noticed the shoulder strap around his chest."
  ],
  choices: [{text: "And what was attached to it...", pg:"pg18"}]
},

pg17a : {
  text: [
    "I decide to give this guy the benefit of the doubt. Darkness was fast approaching, and I could really use some food water.",
    "\"Sure, let me call the RCMP first. They're going to want to know where to find me - and what did you say your name was?\"",
    "The man mutters something under his breath that I can't quite make out.",
    "\"I'm sorry?\" I offer to him.",
    "\"I said, \'this was almost too easy\'...\"",
    "You don't have time to ask what that means before a puch knocks you off of your feet. The man leans over you as you slowly fade from consciousness."
  ],
  choices: [{text: "Epilogue", pg:"pg17b"}]
},

pg17b : {
  text: [
    "-six months later-",
    "\"...and now, some chilling news out of northern British Columbia. Authorities are saying that a string of disappearances around the Prince Rupert area are connected. The RCMP is theorizing that at least five disappearances going back two years show evidence too similar to ignore, though they will not divulge what exactly that evidence is.",
    "Of the five cases, only one - the bizarre car wreck and disappearance of a 27 year old young adult - remains open.\"",
    "You have reached ending 1/3 - thanks for playing!"
  ],
  choices: [{text: "retry", pg:"pg16"}, {text: "return to title screen", pg: "pg0"}]
},

pg18 : {
  text: [
    "A hunting rifle. A fucking hunting rifle."
  ],
  choices: [{text: "\"Oh, fuck...\" I automatically tense up, hoping he doesn't notice", pg:"pg19"}]
},


pg19 : {
  text: [
    "Where the hell is that Mountie?",
    "The man starts walking towards me. Thinking fast, I stall him.",
    "\"Give me a second. I just want to grab a couple of things.\""
  ],
  choices: [{text: "I can feel him behind me. If I take too long, he may react.", pg:"pg20"}]
},


pg20 : {
  text: [
    "I look around the passenger’s side of the car for anything that can help me get away from this guy. I notice two things on the floor – a tire iron and my portable battery bank.",
    "I’m pretty sure I can outrun this guy into the forest and hide, so the battery pack might come in handy to contact 911.",
    "However, I could try and dial now, and get the whole conversation on speaker without alerting him. It's risky, but it may lead police right to him if I get taken.",
    "On the other hand, a battery pack is useless if I can’t outrun my new friend – and stunning him with the tire iron might give me the edge I need to get away."
  ],
  choices: [{text: "Take the charger", pg:"pg21a"}, {text: "Take the tire iron", pg: "pg21b"}, {text: "Attempt to call 911", pg: "pg21c"}]
},

pg21a : {
  text: [
    "-I take the phone charger-",
    "I grab the charger and immediately bolt towards the tree line. The man swears loudly and takes the rifle off his back.",
    "You hear the faint sound of a bullet being loaded into a chamber, then the deafening crack of gunfire.",
    "Your right side explodes in pain at the bullet hits somewhere on your right side. Still, you keep running."
  ],
  choices: [{text: "Keep running while you call 911", pg:"pg22a"}, {text: "Circle back and see if the man left", pg: "pg21e"}]
},

pg21b : {
  text: [
    "-I take the tire iron-",
    "You grab the tire iron and wheel around, swinging wildly and praying you connect.",
    "The tire iron strikes the man square in the head, opening up a significant gash above his eye.",
    "He roars loudly, clutching his face. You don’t have time to register anything else as you sprint towards the treeline. You catch a glimpse of the man attempting to load his rifle as you reach the cover of the forest."
  ],
  choices: [{text: "Keep running while you call 911", pg:"pg22b"}, {text: "Circle back and see if the man left", pg: "pg21e"}]
},

pg21c : {
  text: [
    "-I attempt to dial 911 with your back to the man-",
    "I discretely attempt to dial the second \"1\" when I feel the man look over my shoulder.",
    "\"I don't think so\" he growls at me. A split second later, I slump to the ground, the back of my head searing from the impact of what I can only imagine to be a rifle butt end.",
    "I desperately try and cling to consciousness as I'm dragged away by my sweatshirt. Clawing at the pavement, I glance one last time at my car, frozen in time as I drift into darkness..."
  ],
  choices: [{text: "Epilogue", pg:"pg21d"}]
},

pg21d : {
  text: [
    "-six months later-",
    "\"...and now, some chilling news out of northern British Columbia. Authorities are saying that a string of disappearances around the Prince Rupert area are connected. The RCMP is theorizing that at least five disappearances going back two years show evidence too similar to ignore, though they will not divulge what exactly that evidence is.",
    "Of the five cases, only one - the bizarre car wreck and disappearance of a 27 year old young adult - remains open.\"",
    "You have reached ending 1/3 - thanks for playing!"
  ],
  choices: [{text: "retry", pg:"pg20"}, {text: "return to title screen", pg: "pg0"}]
},

pg21e : {
  text: [
    "-I circle back-",
    "While trying to stay hidden, I backtrack to see if I can still see the man. I take a big chance and emerge from the treeline about 50 feet from the car. I don't want to get too lost in these woods.",
    "The man spots me almost immediately from the middle of the road and trains his rifle on me.",
    "\"Get over here - now.\" he says with an almost eerie sense of calm in his voice.",
    "Seems like a lose-lose situation, but I have to do something."
  ],
  choices: [{text: "attempt to run away again", pg:"pg21f"}, {text: "do as the man says", pg: "pg21f"}]
},

pg21f : {
  text: [
    "I take a deep breath, and prepare to make what I think is a horrible decision.",
    "Both of us hear a noise, and two shots break a deafening silence as I stagger backwards.",
    "Instinctively, I check myeslf for additional wounds to find nothing. I pick myself up to find an RCMP officer kicking the gun away that belongs to the man. He's laying on his back in the middle of the road, having got what was coming to him.",
    "A paramedic makes his way over to check me out. \"Are you hurt? Looks like we got here right on time.\"",
    "The RCMP officer examines my car and the moose, then joins the two of us. The paramedic confirms my injuries aren't too serious, but we should get me back to the hospital at Prince Rupert to have me treated.",
    "You phone your parents and brother - they'd been briefed about the accident, but sounded truly shaken after hearing part two of my ordeal. Safe to say I'll be flying home now...",
  ],
  choices: [{text: "Epilogue", pg:"pg21g"}]
},

pg21g : {
  text: [
    "-one week later-",
    "\"...four families in northern British Columbia finally have closure after a scary roadside incident resulted in the death of 49 year old Mick Taylor of Rosswood, BC. After Taylor was killed in a hostage situation on highway 16 last week, the RCMP found an 18 year old woman clinging to life in a cabin on Taylor's property. Sadly, the remains of three other missing persons were also located at the scene. The 18-year old woman remains in critical condition after being airlifted to a Kamloops hospital.",
    "As for the hostage taken by Taylor, the 27 year old was lucky to have escaped with only minor injuries. They have asked that their identity remain anonymous",
    "You have reached ending 2/3. Thanks for playing!"
  ],
  choices: [{text: "return to title screen", pg: "pg0"}]
},

pg22a : {
  text: [
    "-You frantically dial 911 as you run away-",
    "Where the hell is the RCMP?",
    "One ring... ",
    "Two rings...",
    "\"91-"
  ],
  choices: [{text: "Then everything goes black", pg:"pg23a"}]
},

pg22b : {
  text: [
    "-You frantically dial 911 as you run away-",
    "Where the hell is the RCMP?",
    "One ring... ",
    "Two rings...",
    "\"91-"
  ],
  choices: [{text: "Then everything goes black", pg:"pg23b"}]
},

pg23a : {
  text: [
    "You come to, and your head feels as though it’s on fire. Everything is pitch black, and you realize with a sinking feeling that it’s the middle of the night.",
  ],
  choices: [{text: "Where am I?", pg:"pg24a"}],
},

pg23b : {
  text: [
    "You come to, and your head feels as though it’s on fire. Everything is pitch black, and you realize with a sinking feeling that it’s the middle of the night.",
  ],
  choices: [{text: "Where am I?", pg:"pg24b"}, {text: "", pg: "pg24b"}],
},

pg24a : {
  text: [
    "You check your phone.",
    "5 percent battery. Thank god I took my power bank with me.",
    "I plug your phone in and watch your screen get a little brighter. This small action makes me feel a little bit safer.",
    "I examine your hip. It isn’t good – looks like the bullet went clean through just above my right hip. I seem to have lost a lot of blood, too. Christ, if my head wasn’t killing me, I may not have even noticed.",
  ],
  choices: [{text: "Time to get out of wherever the hell I am", pg:"pg25a"}]
},

pg24b : {
  text: [
    "You check your phone.",
    "5 percent battery. Well, at least I’m alive and have a means to defend myself.",
  ],
  choices: [{text: "Time to get out of wherever the hell I am", pg:"pg25b"}]
},

pg25a : {
  text: [
    "I take stock of where the hell I ended up.",
    "How the fuck am I in a hole?",
    "I look around. The hole I fell in in about 7 feet in diameter and about 10 feet tall. To one side, a badly rotting wooden ladder has collapsed in on itself. The thing looks like it would disintegrate if I touched it.",
    "My heart sinks."
  ],
  choices: [{text: "There’s no way I’m getting out of here without help", pg:"pg26a"}]
},

pg25b : {
  text: [
    "I take stock of where the hell I ended up.",
    "How the fuck am I in a hole?",
    "I look around. The hole I fell in in about 7 feet in diameter and about 10 feet tall. To one side, a badly rotting wooden ladder has collapsed in on itself. The thing looks like it would disintegrate if I touched it.",
    "My heart sinks."
  ],
  choices: [{text: "There’s no way I’m getting out of here without help", pg:"pg26b"}]
},

pg26a : {
  text: [
    "Though my phone has no signal, I raise it up over my head to will a bar or two into the ailing device.",
    "As my eyes adjust to the darkness some more, I notice something sunken into the wall.",
    "A door.",
  ],
  choices: [{text: "A door?", pg:"pg27a"}]
},

pg26b : {
  text: [
    "Though my phone has no signal, I raise it up over my head to will a bar or two into the ailing device.",
    "As my eyes adjust to the darkness some more, I notice something sunken into the wall.",
    "A door.",
  ],
  choices: [{text: "A door?", pg:"pg27b"}]
},

pg27a : {
  text: [
    "I inch closer to the door. At first glance, the door looks industrial grade – maybe even military. Either way, it’s designed to keep something very powerful out.",
    "Or in.",
    "I inspect the door and discover it slightly ajar. There’s no light on the other side, and the door itself looks like it hasn’t been used in a long time.",
  ],
  choices: [{text: "Open it further", pg:"pg28a"}]
},

pg27b : {
  text: [
    "I inch closer to the door. At first glance, the door looks industrial grade – maybe even military. Either way, it’s designed to keep something very powerful out.",
    "Or in.",
    "I inspect the door and discover it slightly ajar. There’s no light on the other side, and the door itself looks like it hasn’t been used in a long time.",
  ],
  choices: [{text: "Open it further", pg:"pg28b"}]
},

pg28a : {
  text: [
    "What do I have to lose? My only way out may in...into this absolute \"no thank you\" of whatever the hell this door leads to...",
    "I force the door open another inch or two. Whatever was keeping the door open has now given way.",
    "I see a latch on the door, and no handle on the inside.",
    "What kind of a door is this?",
    "Hesitantly, I conclude that the only way I have a chance of making it out alive is to take my chances with this door.",
    "I’m sure there’s some sort of search party looking for me, and judging by the time of day - you glance at your phone to reveal 12:30am - they don’t seem particularly close.",
    "I was running for a while...damnit..."
  ],
  choices: [{text: "What now?", pg:"pg29a"}]
},

pg28b : {
  text: [
    "What do I have to lose? My only way out may in...into this absolute \"no thank you\" of whatever the hell this door leads to...",
    "I force the door open another inch or two. Whatever was keeping the door open has now given way.",
    "I see a latch on the door, and no handle on the inside.",
    "What kind of a door is this?",
    "Hesitantly, I conclude that the only way I have a chance of making it out alive is to take my chances with this door.",
    "I’m sure there’s some sort of search party looking for me, and judging by the time of day - you glance at your phone to reveal 12:30am - they don’t seem particularly close.",
    "I was running for a while...damnit...",
  ],
  choices: [{text: "What now?", pg:"pg29b"}]
},

pg29a : {
  text: [
    "Wonder where that guy is. Should have hit him with that tire iron...",
    "Either way, there's no turning back now. Stay here, and I may freeze to death or bleed to death - neither of which sound appealing.",
    "I turn on my phone's flashlight. It illuminates a staircase that extends beyond the beam of light.",
    "Passing through the door's frame, it isn't lost on me that I will need to find a different way out.",
    

  ],
  choices: [{text: "Go down the stairs...", pg:"pg30a"}]
},

pg29b : {
  text: [
    "I remember the tire iron I used to take a chunk out of the creepy man. It followed me faithfully into the hole, now resting on the cold earth.",
    "I may have dealt that guy a hit, but man, I would really have appreciated the extra phone power for my flashlight - I can barely see as it is.",
    "Taking further stock of the situation, I realize I have another decision to make:",
    "With no door handle on the inside and this being the only known method of exiting whatever this thing is, I'd have to use the tire iron to prop open the door.",
    "That said, I have no idea what's down there. I could need some means to defend myself"
  ],
  choices: [{text: "Use the tire iron to prop open the door", pg:"pg30b1"}, {text: "Take the tire iron with you", pg: "pg30b2"}]
},

pg30a : {
  text: [
    "The door heavily creaks shut behind me, making me tense up despite knowing it coming",
    "With my phone light at the ready, I limp my way down the stairs.",
  ],
  choices: [{text: "Into the darkness...", pg:"pg31"}]
},

pg30b1 : {
  text: [
    "-I use the tire iron to prop open the door-",
    "You carefully place the tire iron in the door frame to preserve your exit. With your phone almost dead and unable to use the flashlight app, the light from your screen only shines about six inches in front of you.",
    "I can always come back to get it, I think to myself. It isn't particularly reassuring.",
    "With my heart beating in my throat, I make my way down the stairs."
  ],
  choices: [{text: "Into the darkness...", pg:"pg31"}]
},

pg30b2 : {
  text: [
    "-I take the tire iron with me-",
    "This could be one of my all time bad decisions, I think to myself. But this can't be the only way in and out of this thing, and who knows what's waiting at the bottom of these stairs.",
    "The thought of being able to defend myself is comforting for a split second. The fact that my only light source is my phone screen takes away any notion of comfort.",
    "The door heavily creaks shut behind me, making me tense up despite knowing it coming",
    "Taking it step by step, I descend slowly down the stairs."
  ],
  choices: [{text: "Into the darkness...", pg:"pg31"}]
},

pg31 : {
  text: [
    "to be continued in Part II - The Facility...",
    "You have reached ending 3/3. Thanks for playing!"
  ],
  choices: [{text: "return to title screen", pg:"pg0"}]
},
  
  }

  //Function to load text and choices

  function loadPage(page){
      const text = page.text;
      const choices = page.choices

        renderText(text)
        renderChoices(choices)
  }

  function renderText(psgsArr){
      let textHtml = '';
      psgsArr.forEach( function(text){ 
        textHtml += `<p class='passage-text'>${text}</p>`
      })
    
     txtEl.innerHTML = textHtml
    }

    function nextPage(){
      const pageToRender = ''
     // some condition to figure out the next page to render based on the 
     //choice from the button  they clicked on for the event 
    // use conditionals to figure out what page needs to render
        // if (userChoice = "begin") {
        //     loadPage(game["pg1"])
        // }
    // "pg2"
    return pageToRender
    
    }
    
       function renderChoices(choices){
      let choicesHtml = ''
    
      choices.forEach(
        function(choice, idx){
          choicesHtml += `<a class="choice-btn" id="${choice.pg}"" href="#">${choice.text}</a>`
        }
      )
    
      chEl.innerHTML = choicesHtml
    }
    
    // Event Listener
      chEl.addEventListener('click', handleUserChoice)
    
    
    // Page Logic 
    
    // need a function that figures out what page the renderPage fn should receive 
    // based on the choice a user has clicked on
    function handleUserChoice(event){

        const nextPageKey = event.target.id
        const nextPage = game[nextPageKey]
            loadPage(nextPage)

    }
    // figure out what button they clicked
    // get the next page from the id property of the button
    // use that string in the game object game[id] ---> page object
    
     // renderPage() <---- with the page you derive at game[id]
    
    
    
    
    loadPage(game["pg0"])