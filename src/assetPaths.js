/*

organizing asset paths here

*/

let paths = {};

// bottom menu with ava and icons
paths.bottomMenu = {
    // ...
    avaFace: require('../assets/bottomMenu/ava/Ava_Default.png'),

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
    resume: require('../assets/Resume.png')

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

    }
}


paths.stories = {

    featuredStories: {
        storyCard01: require('../assets/Article_1.2.png'),
        storyCard02: require('../assets/Article_1.1.png'),
        storyCard03: require('../assets/Article_1.3.png'),
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
        wishlist: require('../assets/shop/shop-wishlist.png'),
        close: require('../assets/shop/shop-close-button.png'),
        search: require('../assets/shop/icon-search.png'),
        see: require('../assets/shop/see.png'),
    },

    productFeatured: require('../assets/shop/shop-featured-01.png'),
    productFeatured2: require('../assets/shop/shop-featured-02.png'),
    bubbleNav: require('../assets/shop/shop-bubbleNav.png'),
    bottomCategories: require('../assets/shop/shop-bottom.png'),

    featuredProductImages: [
        require('../assets/shop/featuredProduct01.png'),
        require('../assets/shop/featuredProduct02.png'),
        require('../assets/shop/featuredProduct03.png'),
        require('../assets/shop/featuredProduct04.png'),
        require('../assets/shop/featuredProduct05.png'),
        require('../assets/shop/featuredProduct06.png'),
    ],


}



export default paths;
