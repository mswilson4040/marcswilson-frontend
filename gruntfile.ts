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
            file: 'core/AllstarFull.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'appearances',
            type: 'csv',
            file: 'core/Appearances.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'awardsmanagers',
            type: 'csv',
            file: 'core/AwardsManagers.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'awardsplayers',
            type: 'csv',
            file: 'core/AwardsPlayers.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'awardssharemanagers',
            type: 'csv',
            file: 'core/AwardsShareManagers.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'awardsshareplayers',
            type: 'csv',
            file: 'core/AwardsSharePlayers.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'battings',
            type: 'csv',
            file: 'core/Batting.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'battingposts',
            type: 'csv',
            file: 'core/BattingPost.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'collegeplayings',
            type: 'csv',
            file: 'core/CollegePlaying.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'fieldings',
            type: 'csv',
            file: 'core/Fielding.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'fieldingofs',
            type: 'csv',
            file: 'core/FieldingOF.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'fieldingofsplits',
            type: 'csv',
            file: 'core/FieldingOFSplit.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'fieldingposts',
            type: 'csv',
            file: 'core/FieldingPost.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'halloffames',
            type: 'csv',
            file: 'core/HallOfFame.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'homegames',
            type: 'csv',
            file: 'core/HomeGames.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'managers',
            type: 'csv',
            file: 'core/Managers.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'managershalfs',
            type: 'csv',
            file: 'core/ManagersHalf.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'parks',
            type: 'csv',
            file: 'core/Parks.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'peoples',
            type: 'csv',
            file: 'core/People.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'pitchings',
            type: 'csv',
            file: 'core/Pitching.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'pitchingposts',
            type: 'csv',
            file: 'core/PitchingPost.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'salaries',
            type: 'csv',
            file: 'core/Salaries.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'schools',
            type: 'csv',
            file: 'core/Schools.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'seriesposts',
            type: 'csv',
            file: 'core/SeriesPost.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'teams',
            type: 'csv',
            file: 'core/Teams.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'teamsfranchises',
            type: 'csv',
            file: 'core/TeamsFranchises.csv',
            headerLine: true,
            upsert: true,
            drop: true
          },
          {
            name: 'teamshalfs',
            type: 'csv',
            file: 'core/TeamsHalf.csv',
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
