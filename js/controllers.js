'use strict';
/* Controllers */
var myPortfolioApp = angular.module('myPortfolioApp', []);

myPortfolioApp.controller('itemControllers', function ($scope){
    $scope.apps = [
        { 'name':'SwiftQwizz',
    'description': "SwiftQwizz is a fun study tool for iOS developers. It is quite simple. Just answer 10 questions at the time and it will help you measure and review your knowledge on iOS topics. Initially it has some basic questions about the Swift programming language. More topics coming soon. Any questions or comments please contact Alberto Vega at: elvegag@icloud.com *Graphic design by Armando Duran Sitten.",
    'imageUrl':'./bootstrap-prestructure_files/SwiftQwizz.png',
    'link': 'https://itunes.apple.com/app/id1089762702?mt=8'
    },
        {'name': 'San Carlos, Mex',
    'description': "Get an inside scoop on the best places to explore all over the area of San Carlos, Mexico. Open source project https://github.com/Alberto-Vega/SanCarlosMex",
    'imageUrl': './bootstrap-prestructure_files/SanCarlosApp.png',
    'link': 'https://launchkit.io/websites/u4WrUcER8ko/'},
            { 'name':'Abscond',
    'description': "Finalist at the Expedia Seattle Hackathon (2016). An iOS app for discovering the cheapest flights for spontaneous weekend trips in the coming weekend.Created in two days on a team of three as an official submission in the Expedia Seattle Hackathon.Written in Swift, using Expedia’s Flight Search API, Bitly’s API and Flickr’s Photo Search API.",
    'imageUrl':'./bootstrap-prestructure_files/Abscond.png',
    'link': 'https://github.com/mranisavljevic/abscond'
},
        {'name': 'Walkabout Tours',
    'description': "An iOS app for creating, sharing, and discovering walking tours. Written in Objective-C, I contributed with the select a tour side of the app. I used MapKit, Parse, Core Location, Customized the UI as pair programming work, implemented  predictive search , URL Session, Foursquare API. Localized the app for Spanish and Brazilian Portuguese and some other minor additions.",
    'imageUrl': './bootstrap-prestructure_files/WalkaboutTours.png',
    'link': 'https://github.com/blueharp2/WalkingTour'},
            { 'name':'SayWhat?',
    'description': "SayWhat was a group project built by a team of four, including myself. The app gives you suggestions of responses based on your given text message. We learned a lot about git and merging through xcode, ChatBot API, Parse, regex, and restful API requests.",
    'imageUrl':'./bootstrap-prestructure_files/SayWhat.png',
    'link': 'https://github.com/heidiyee/SayWhat'
},
    ];
});
