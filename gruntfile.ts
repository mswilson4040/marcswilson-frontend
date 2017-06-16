/**
 * Created by Marc on 3/29/2017.
 */

module.exports = (grunt) => {

  grunt.initConfig({

    mongoimport: {
      options: {
        db: 'mlbstatsdb',
        collections: [
          {
            name: 'allstarfulls',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/AllstarFull.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'appearances',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/Appearances.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'awardsmanagers',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/AwardsManagers.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'awardsplayers',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/AwardsPlayers.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'awardssharemanagers',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/AwardsShareManagers.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'awardsshareplayers',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/AwardsSharePlayers.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'battings',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/Batting.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'battingposts',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/BattingPost.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'collegeplayings',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/CollegePlaying.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'fieldings',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/Fielding.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'fieldingofs',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/FieldingOF.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'fieldingofsplits',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/FieldingOFSplit.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'fieldingposts',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/FieldingPost.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'halloffames',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/HallOfFame.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'homegames',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/HomeGames.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'managers',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/Managers.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'managershalfs',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/ManagersHalf.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'parks',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/Parks.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'peoples',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/People.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'pitchings',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/Pitching.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'pitchingposts',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/PitchingPost.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'salaries',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/Salaries.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'schools',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/Schools.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'seriesposts',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/SeriesPost.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'teams',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/Teams.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'teamsfranchises',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/TeamsFranchises.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'teamshalfs',
            type: 'csv',
            file: 'public/pages/PortfolioComponent/MLBStats/data/baseballdatabank/core/TeamsHalf.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
        ]
      }
    },
    shell: {
      multiple: {
        command: [
          'ng build',
          'node dist/node-server/server'
        ].join('&&')
      }
    }
  });

  // Load Plugins
  grunt.loadNpmTasks('grunt-mongoimport');
  grunt.loadNpmTasks('grunt-shell');


  // Run Tasks
  grunt.registerTask('importdb', ['mongoimport']);
  grunt.registerTask('build-dev', ['shell']);

};
