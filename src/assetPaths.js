/*
organizing asset paths here
*/
let paths = {};

// bottom menu with ava and icons
paths.bottomMenu = {
    default: require('../assets/bottomMenu/ava/ava_default2.png'),

    // faces
    capShout: require('../assets/bottomMenu/ava/ava_cap_yell.png'),
    capSmileEyesClosed: require('../assets/bottomMenu/ava/ava_cap_eyesClosed_smile.png'),
    capSmile: require('../assets/bottomMenu/ava/ava_cap_smile.png'),
    capSmile2: require('../assets/bottomMenu/ava/ava_cap_smile2.png'),
    capSmile3: require('../assets/bottomMenu/ava/ava_cap_smile3.png'),
    capWave: require('../assets/bottomMenu/ava/ava_cap_wave.png'),
    capFrown: require('../assets/bottomMenu/ava/ava_cap2.png'),
    cap: require('../assets/bottomMenu/ava/ava_cap1.png'),
    shout: require('../assets/bottomMenu/ava/ava_screams.png'),
    eyesClosed2: require('../assets/bottomMenu/ava/ava_eyesClosed2.png'),
    eyesClosed: require('../assets/bottomMenu/ava/ava_eyesClosed.png'),
    smile3: require('../assets/bottomMenu/ava/ava_smile3.png'),
    smile2: require('../assets/bottomMenu/ava/ava_smile2.png'),
    smile1: require('../assets/bottomMenu/ava/ava_smile1.png'),
    wave: require('../assets/bottomMenu/ava/ava_wave.png'),
    frown: require('../assets/bottomMenu/ava/ava_oh-no.png'),

    avaChatInterface: require('../assets/bottomMenu/ava/ava_chat_interface.png'),

    // icons
    calendarIcon: require('../assets/bottomMenu/icons/Calendar-icon.png'),
    homeIcon: require('../assets/bottomMenu/icons/NAV_home-home.png'),
    communityIcon: require('../assets/bottomMenu/icons/NAV_share-home.png'),
    connectIcon: require('../assets/bottomMenu/icons/NAV_connect-home.png'),
    dashboardIcon: require('../assets/bottomMenu/icons/NAV_dash-home.png'),
    exploreIcon: require('../assets/bottomMenu/icons/NAV_explore-home.png'),
    
    tabBackground: require('../assets/bottomMenu/bottomTab.png'),

    // icons on
    communityIconOn: require('../assets/bottomMenu/icons/home-share.png'),
    connectIconOn: require('../assets/bottomMenu/icons/home-connect.png'),
    dashboardIconOn: require('../assets/bottomMenu/icons/home-dash.png'),
    exploreIconOn: require('../assets/bottomMenu/icons/home-explore.png'),

    gradient: require('../assets/bottomMenu/avabottom-gradient.png'),
    relatedBackground: require('../assets/relatedBackground.png'),

    // contextual icons above ava head
    contextIcons: {
        addCalendar: require('../assets/bottomMenu/icons/context-addCalendarEntry.png'),
        addChat: require('../assets/bottomMenu/icons/context-addChat.png'),
        addStory: require('../assets/bottomMenu/icons/context-postStory.png'),
        seeFriends: require('../assets/bottomMenu/icons/context-seeFriends.png'),
        // had to change this because the actual asset was missing which breaks the app
        refresh: require('../assets/bottomMenu/icons/context-refresh.png'),
        profile: require('../assets/bottomMenu/icons/context-system.png'),
        star: require('../assets/bottomMenu/icons/context-star.png'),
        wishlist: require('../assets/bottomMenu/icons/context-wishlist.png'),
    }
};
paths.bottomMenu.homeScreen = {
    avaFace: require('../assets/bottomMenu/ava/Ava_Default.png'),
    communityIcon: require('../assets/bottomMenu/icons/home-share.png'),
    connectIcon: require('../assets/bottomMenu/icons/home-connect.png'),
    dashboardIcon: require('../assets/bottomMenu/icons/home-dash.png'),
    exploreIcon: require('../assets/bottomMenu/icons/home-explore.png'),
    homeIcon: require('../assets/bottomMenu/icons/home-game.png'),
    shopIcon: require('../assets/bottomMenu/icons/Shop-icon.png'),
    gradient: require('../assets/bottomMenu/homescreen_gradient-bottom.png')
}
paths.topMenu = {
    connectIcon: require('../assets/topMenu/NAV_connect-top.png'),
    dashboardIcon: require('../assets/topMenu/NAV_dash-top.png'),
    exploreIcon: require('../assets/topMenu/NAV_explore-top.png'),
    shareIcon: require('../assets/topMenu/NAV_share-top.png'),
    profileIcon: require('../assets/topMenu/NAV_profile.png'),
    shopIcon: require('../assets/shop/nav-top-right.png'),
}
paths.staticScreens = {
    journeyScreen: require('../assets/staticScreens/journey-2x.png'),
    awardScreen: require('../assets/staticScreens/awards-2x.png'),
    badgeScreen: require('../assets/staticScreens/badges-2x.png'),
    eventScreen: require('../assets/staticScreens/AllEvents.png'),
    postModal: require('../assets/staticScreens/post.png'),
    resume: require('../assets/Resume.png'),
    leaderBoard: require('../assets/Leaderboard2.png'),
    wishlist: require('../assets/staticScreens/wishlistModal3.png'),
    badgesOverview: require('../assets/staticScreens/badgeOverlay.png'),
}
paths.homeScreen = {
    chatBubbles: require('../assets/Home_Bubble_Welcome1.png'),
    responseBubbles: require('../assets/Home_Bubble_Response.png'),
    speechInputImage: require('../assets/Speech-input.png'),
    icons: {
        notificationIcon: require('../assets/icons/notificationsHome.png'),
        swipeUpIcon: require('../assets/topMenu/NAV_profile.png'),
        swipeDownIcon: require('../assets/topMenu/NAV_shop.png'),
    }
}
paths.modals = {
    
    articleModal: {
    },

    shareModal: {
        addFriend: require('../assets/icons/shareModals/v2/friend_off.png'),
        close: require('../assets/icons/shareModals/v2/close.png'),
        like: require('../assets/icons/shareModals/v2/heart_off.png'),
        share: require('../assets/icons/shareModals/v2/share.png'),
        star: require('../assets/icons/shareModals/v2/star_off.png'),
        requestSent: require('../assets/icons/shareModals/v2/friend_on.png'),
        likeSolid: require('../assets/icons/shareModals/v2/heart_on.png'),
        starSolid: require('../assets/icons/shareModals/v2/star_on.png'),
    },
    badgeModal: {
        share: require('../assets/icons/badgeModal/share_off.png'),
        star: require('../assets/icons/badgeModal/star_off.png'),
        starSolid: require('../assets/icons/badgeModal/star_on.png'),
        like: require('../assets/icons/badgeModal/like_off.png'),
        likeSolid: require('../assets/icons/badgeModal/like_on.png'),
        close: require('../assets/icons/badgeModal/exit_off.png'),
        
    }
}
paths.stories = {
    marley: require('../assets/share/revised/marley2x.png'),
    supergirls: require('../assets/share/revised/supergirls2x.png'),
    muslim: require('../assets/share/revised/muslimGirls2x.png'),
    smoking: require('../assets/share/revised/secondSmoke2x.png'),
    malala: require('../assets/share/revised/malala2x.png'),
    underwater: require('../assets/share/revised/cookieDive2x.png'),
    nasa: require('../assets/share/revised/space2x.png'),
    cassandra: require('../assets/share/revised/cassandra2x.png'),
    aliceT: require('../assets/share/revised/aliceT2x.png'),
    bellaM: require('../assets/share/revised/bellaM2x.png'),
    jglBridge: require('../assets/share/revised/JGLBridge2x.png'),
    michelleO: require('../assets/share/revised/michelleO2x.png'),
    featuredStories: {

    },
    newStories: {
        storyCard01: require('../assets/Article_2.1.png'),
        storyCard02: require('../assets/Article_2.2.png'),
        storyCard03: require('../assets/Article_2.3.png')
    },
    allStories: {
        storyCard01: require('../assets/Article_2.3.png'),
        storyCard02: require('../assets/Article_2.2.png'),
        storyCard03: require('../assets/Article_2.1.png'),
    }    
}

paths.microbadges = {

      Card01: require('../assets/badges/microBadgeCard01.png'),
      Card02: require('../assets/badges/microBadgeCard02.png'),
      Card03: require('../assets/badges/microBadgeCard03.png')
  }

paths.badges = {
    default: {
        // default badges are just white without drop shadow
        scienceOfStyle: require('../assets/badges/science-of-style.png'),
        seniorFirstAid: require('../assets/badges/senior-first-aid.png'),
        sky: require('../assets/badges/sky.png'),
        socialInnovator: require('../assets/badges/social-innovator.png'),
        spaceScienceExpert: require('../assets/badges/space-science-expert.png'),
        truthSeeker: require('../assets/badges/truth-seeker.png'),
        textileArtist: require('../assets/badges/textile-artist.png'),
        voiceForAnimals: require('../assets/badges/voice-for-animals.png'),
        webDesigner: require('../assets/badges/web-designer.png'),
        womensHealth: require('../assets/badges/womens-health.png'),
    },
    progress: {
        // progress badges have some transparency at the top to reflect progress
        scienceOfStyle: require('../assets/badges/science-of-style.png'),
        seniorFirstAid: require('../assets/badges/senior-first-aid.png'),
        sky: require('../assets/badges/sky.png'),
        socialInnovator: require('../assets/badges/social-innovator.png'),
        spaceScienceExpert: require('../assets/badges/space-science-expert-progress.png'),
        truthSeeker: require('../assets/badges/truth-seeker-progress.png'),
        textileArtist: require('../assets/badges/textile-artist.png'),
        voiceForAnimals: require('../assets/badges/voice-for-animals.png'),
        webDesigner: require('../assets/badges/web-designer.png'),
        womensHealth: require('../assets/badges/womens-health.png'),
    },
    scienceExpert: require('../assets/badges/badges-science.png'),
    truthSeeker: require('../assets/badges/badges-truth.png'),
    womensHealth: require('../assets/badges/badges-women.png'),
    textile: require('../assets/badges/badges-textile.png'),
    big: {
        seniorFirstAid: require('../assets/badges/badge-big-firstAid.png'),
        socialInnovator: require('../assets/badges/badge-big-social.png'),
        animals: require('../assets/badges/badge-big-animals.png'),
        webDesigner: require('../assets/badges/badge-big-webdesigner.png'),
        scienceExpert: require('../assets/badges/badge-science-style.png'),
        truthSeeker: require('../assets/badges/badge-big-truth.png'),
        womensHealth:require('../assets/badges/badge-big-womensHealth.png'),
        textile: require('../assets/badges/badge-big-textile.png'),
        nasa: require('../assets/badges/badge-big-space.png'),
      }
    },
paths.journeyScreen = {
    journeyCarousel: {
        swipeNavLeft: require('../assets/journey/journey-slidenav-left.png'),
        swipeNavRight: require('../assets/journey/journey-slidenav-right.png'),
        caretLeft: require('../assets/journey/journey-caret-left.png'),
        caretRight: require('../assets/journey/journey-caret-right.png'),
        journeyImage: require('../assets/journey/journey-badge.png'),
        journeyCard: require('../assets/journey/journey-card.png'),
        completed: require('../assets/journey/journey-completed.png'),
    }
},
paths.awardScreen = {
    awardImage: require('../assets/award/award_gold.png'),
    completed: require('../assets/award/award-completed.png'),
    info: require('../assets/award/award-info.png'),
    icons: {
        torch: require('../assets/award/award-torch.png'),
        summit: require('../assets/award/award-journey.png'),
    }
},

paths.systemScreen = {
    icons: {
        account: require('../assets/icons/System/1_Account.png'),
        users: require('../assets/icons/System/2_Users.png'),
        notification: require('../assets/icons/System/3_Notification.png'),
        avatar: require('../assets/icons/System/4_Avatar.png'),
        language: require('../assets/icons/System/5_Language.png'),
        permissions: require('../assets/icons/System/6_Permissions.png'),
        orders: require('../assets/icons/System/7_Orders.png'),
        security: require('../assets/icons/System/8_Security.png'),
        updates: require('../assets/icons/System/9_Updates.png'),
        about: require('../assets/icons/System/10_About.png'),
        info: require('../assets/icons/System/11_Info.png'),
        help: require('../assets/icons/System/12_Help.png'),
    }
},

paths.navMenu = {
    dotOn: require('../assets/navMenu/navDot_on.png'),
    dotOff: require('../assets/navMenu/navDot_off.png')
};

paths.shop = {
    icons: {
        wishlist: require('../assets/shop/shop-heart.png'),
        close: require('../assets/shop/shop-close-button.png'),
        search: require('../assets/shop/shopSearch.png'),
        see: require('../assets/shop/see.png'),
        dot: require('../assets/shop/dot.png'),
        trade: require('../assets/shop/trade.png'),
    },
    productFeatured: require('../assets/shop/shop-featured-01.png'),
    productFeatured2: require('../assets/shop/shop-featured-02.png'),
    bubbleNav: require('../assets/shop/shop-bubbleNav.png'),
    bottomCategories: require('../assets/shop/shop-bottom.png'),
    featuredProducts: [
        {
            image: require('../assets/shop/featuredProduct01.png'),
            bubbles: [
                require ('../assets/shop/bubble-helmet.png'),
                require ('../assets/shop/bubble-elbow-pads.png'),
            ],
        },
        {
            image: require('../assets/shop/featuredProduct02.png'),
            bubbles: [
                require ('../assets/shop/bubble-robotics.png'),
            ],
        },
        {
            image: require('../assets/shop/featuredProduct03.png'),
            bubbles: [
                require ('../assets/shop/bubble-beanie.png'),
                require ('../assets/shop/bubble-stove-kit.png'),
            ],
        },
        {
            image: require('../assets/shop/featuredProduct04b.png'),
            bubbles: [
                require ('../assets/shop/bubble-helmet2.png'),
                require ('../assets/shop/bubble-harness.png'),
                require ('../assets/shop/bubble-sneakers.png'),
            ],
        },
        {
            image: require('../assets/shop/featuredProduct05.png'),
            bubbles: [
                require ('../assets/shop/bubble-telescope.png'),
                require ('../assets/shop/bubble-shirt.png'),
            ],
        },
        {
            image: require('../assets/shop/featuredProduct06.png'),
            bubbles: [
                require ('../assets/shop/bubble-headphones.png'),
            ],
        },


        {
            image: require('../assets/shop/featuredProduct00.png'),
            bubbles: [
                require ('../assets/shop/bubble-swaps.png'),
            ],
        },
    ],
    productCards: {
        socks1: require('../assets/shop/card-socks.png'),
        vest: require('../assets/shop/card-vest.png'),
        guide: require('../assets/shop/card-guide.png'),
        scarf: require('../assets/shop/card-scarf3.png'),
        slide: require('../assets/shop/card-slide.png'),
        trefoil_pin: require('../assets/shop/card-pin.png'),
        senior_vest: require('../assets/shop/card-featured.png'),
        socks2: require('../assets/shop/card-socks2.png'),
        shirt_activity: require('../assets/shop/card-shirt.png'),
        backpack: require('../assets/shop/card-backpack.png'),
        hair_ties : require('../assets/shop/card-hairties.png'),
        membership_pin: require('../assets/shop/card-pin2.png'),
        shirt_explorer: require('../assets/shop/card-shirt2.png'),
        fleece: require('../assets/shop/card-fleece.png'),
        bottle: require('../assets/shop/card-bottle.png'),
        scarf_vintage: require('../assets/shop/card-scarf2.png'),
        necklace: require('../assets/shop/card-necklace2.png'),
        daypack: require('../assets/shop/card-daypack.png'),
        shirt_flag: require('../assets/shop/card-shirt3.png'),
        cap: require('../assets/shop/card-cap.png'),
        tent: require('../assets/shop/card-tent.png'),
    },
}
paths.avatars = {
    pink: require('../assets/avatars/avatar01.png'),
    blue: require('../assets/avatars/avatar02.png'),
    green: require('../assets/avatars/avatar03.png'),
    red: require('../assets/avatars/avatar04.png'),
    grey: require('../assets/avatars/avatar05.png'),
    yellow: require('../assets/avatars/avatar06.png'),
    grey_dark: require('../assets/avatars/avatar07.png'),
    grey2: require('../assets/avatars/avatar08.png'),
}

export default paths
