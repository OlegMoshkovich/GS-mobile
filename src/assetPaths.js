/*

organizing asset paths here

*/

let paths = {};

// bottom menu with ava and icons
paths.bottomMenu = {
    // ...
    default: require('../assets/bottomMenu/ava/ava_default2.png'),

    // ... 
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





    calendarIcon: require('../assets/bottomMenu/icons/Calendar-icon.png'),
    chatIcon: require('../assets/bottomMenu/icons/Home_Icon_Communication.png'),

    communityIcon: require('../assets/bottomMenu/icons/NAV_share-home.png'),
    connectIcon: require('../assets/bottomMenu/icons/NAV_connect-home.png'),
    dashboardIcon: require('../assets/bottomMenu/icons/NAV_dash-home.png'),
    exploreIcon: require('../assets/bottomMenu/icons/NAV_explore-home.png'),

    communityIconOn: require('../assets/bottomMenu/icons/home-share.png'),
    connectIconOn: require('../assets/bottomMenu/icons/home-connect.png'),
    dashboardIconOn: require('../assets/bottomMenu/icons/home-dash.png'),
    exploreIconOn: require('../assets/bottomMenu/icons/home-explore.png'),

    homeIcon: require('../assets/bottomMenu/icons/NAV_home-home.png'),
    mapIcon: require('../assets/bottomMenu/icons/Map-icon.png'),
    shopIcon: require('../assets/bottomMenu/icons/Shop-icon.png'),

    tabBackground: require('../assets/bottomMenu/bottomTab.png'),

    gradient: require('../assets/bottomMenu/avabottom-gradient.png'),

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
    }
};

paths.bottomMenu.homeScreen = {

    avaFace: require('../assets/bottomMenu/ava/Ava_Default.png'),

    calendarIcon: require('../assets/bottomMenu/icons/Calendar-icon.png'),
    chatIcon: require('../assets/bottomMenu/icons/Home_Icon_Communication.png'),
    communityIcon: require('../assets/bottomMenu/icons/home-share.png'),
    connectIcon: require('../assets/bottomMenu/icons/home-connect.png'),
    dashboardIcon: require('../assets/bottomMenu/icons/home-dash.png'),
    exploreIcon: require('../assets/bottomMenu/icons/home-explore.png'),
    homeIcon: require('../assets/bottomMenu/icons/home-game.png'),
    mapIcon: require('../assets/bottomMenu/icons/Map-icon.png'),
    shopIcon: require('../assets/bottomMenu/icons/Shop-icon.png'),

    gradient: require('../assets/bottomMenu/homescreen_gradient-bottom.png')

}

paths.topMenu = {

    connectIcon: require('../assets/topMenu/NAV_connect-top.png'),
    dashboardIcon: require('../assets/topMenu/NAV_dash-top.png'),
    exploreIcon: require('../assets/topMenu/NAV_explore-top.png'),
    shareIcon: require('../assets/topMenu/NAV_share-top.png'),
    tapHereIcon: require('../assets/topMenu/Tap_here_icon.png'),
    profileIcon: require('../assets/topMenu/NAV_profile.png'),
    shopIcon: require('../assets/shop/nav-top-right.png'),

}

paths.staticScreens = {

    journeyScreen: require('../assets/staticScreens/journey-2x.png'),
    awardScreen: require('../assets/staticScreens/awards-2x.png'),
    badgeScreen: require('../assets/staticScreens/badges-2x.png'),
    avaEndBlue: require('../assets/ava_end.png'),
    avaEndYellow: require('../assets/ava_end_yellow.png'),
    eventScreen: require('../assets/staticScreens/events-2x.png'),
    postModal: require('../assets/staticScreens/post.png'),
    resume: require('../assets/Resume.png'),
    related: require('../assets/Related.png'),
    leaderBoard: require('../assets/Leaderboard.png')

}



paths.homeScreen = {

    chatBubbles: require('../assets/Home_Bubble_Welcome1.png'),
    responseBubbles: require('../assets/Home_Bubble_Response.png'),
    background: require('../assets/Home_Background2.png'),
    speechInputImage: require('../assets/Speech-input.png'),
    icons: {
        notificationIcon: require('../assets/icons/notificationsHome.png'),
        swipeUpIcon: require('../assets/icons/Home_SwipeUp.png'),
        swipeDownIcon: require('../assets/icons/Home_SwipeDown.png'),
    }
}


paths.modals = {

    articleModal: {
        shareIcon: require('../assets/Share.png'),
        starIcon: require('../assets/Star.png'),
        commentIcon: require('../assets/Comment.png'),
        clapIcon: require('../assets/Clap.png'),
        exitIcon: require('../assets/Exit-icon.png'),
        exit: require('../assets/icons/Exit.png'),

    },

    shareModal: {
        addFriend: require('../assets/icons/shareModals/addFriend.png'),
        close: require('../assets/icons/shareModals/close.png'),
        requestSent: require('../assets/icons/shareModals/friendRequestSent.png'),
        like: require('../assets/icons/shareModals/like.png'),
        share: require('../assets/icons/shareModals/share.png'),
        star: require('../assets/icons/shareModals/star.png'),

    }
}


paths.stories = {

    featuredStories: {
        marley: require('../assets/share/featuredMarley2x.png'),
        supergirls: require('../assets/share/featuredSupergirls2x.png'),
        muslim: require('../assets/share/featuredMuslim2x.png'),
        smoking: require('../assets/share/featuredSmoking2x.png'),
        malala: require('../assets/share/featuredMalala2x.png'),
        underwater: require('../assets/share/featuredCookie2x.png'),
        nasa: require('../assets/share/featuredNasa2x.png'),
        cassandra: require('../assets/share/featuredCassanda2x.png'),

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
    },

    storyModal: {
        storyImage: require('../assets/Article_Image_3.png')
    }

}




paths.badges = {

        scienceExpert: require('../assets/badges/badges-science.png'),
        truthSeeker: require('../assets/badges/badges-truth.png'),
        womensHealth: require('../assets/badges/badges-women.png'),
        textile: require('../assets/badges/badges-textile.png'),
        big: {
            seniorFirstAid: require('../assets/badges/badge-big-firstAid.png'),
            socialInnovator: require('../assets/badges/badge-big-social.png'),
            animals: require('../assets/badges/badge-big-animals.png'),
            webDesigner: require('../assets/badges/badge-big-webdesigner.png'),
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

    },


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
        search: require('../assets/shop/icon-search.png'),
        see: require('../assets/shop/see.png'),
        dot: require('../assets/shop/dot.png')
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


export default paths;
