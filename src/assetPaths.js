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
    homeIcon: require('../assets/bottomMenu/icons/NAV_home-home.png'),
    mapIcon: require('../assets/bottomMenu/icons/Map-icon.png'),
    shopIcon: require('../assets/bottomMenu/icons/Shop-icon.png'),


    tabBackground: require('../assets/bottomMenu/bottomTab.png'),




    darkGradient: require('../assets/bottomMenu/Nav_Bottom_Revised.png'),


    contextIcons: {
        addCalendar: require('../assets/bottomMenu/icons/context-addCalendarEntry.png'),
        addChat: require('../assets/bottomMenu/icons/context-addChat.png'),
        addStory: require('../assets/bottomMenu/icons/context-postStory.png'),
        seeFriends: require('../assets/bottomMenu/icons/context-seeFriends.png')
    }
    // contextual icons above ava head





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


    darkGradient: require('../assets/bottomMenu/Nav_Bottom_Revised.png')

};


paths.topMenu = {


    connectIcon: require('../assets/topMenu/NAV_connect-top.png'),
    dashboardIcon: require('../assets/topMenu/NAV_dash-top.png'),
    exploreIcon: require('../assets/topMenu/NAV_explore-top.png'),
    shareIcon: require('../assets/topMenu/NAV_share-top.png'),
    tapHereIcon: require('../assets/topMenu/Tap_here_icon.png')





}


paths.staticScreens = {

    journeyScreen: require('../assets/staticScreens/journey-2x.png'),
    awardScreen: require('../assets/staticScreens/awards-2x.png'),
    badgeScreen: require('../assets/staticScreens/badges-2x.png'),
    avaEndBlue: require('../assets/staticScreens/Nav_Avatar_Face_Animations.png'),
    avaEndYellow: require('../assets/staticScreens/ava-yellow-2x.png'),
    eventScreen: require('../assets/staticScreens/events-2x.png'),


}

paths.modals = {


    articleModal: {

        shareIcon: require('../assets/Share.png'),

        starIcon: require('../assets/Star.png'),
        
        commentIcon: require('../assets/Comment.png'),

        clapIcon: require('../assets/Clap.png'),


        exitIcon: require('../assets/Exit-icon.png'),




    }

}


paths.stories = {
    storyCard01: 
        require('../assets/Article_2.1.png'),
        storyCard02: 
        require('../assets/Article_2.2.png'),
        storyCard03: 
        require('../assets/Article_2.3.png')
    
}




export default paths;