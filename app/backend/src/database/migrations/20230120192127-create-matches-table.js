module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      home_team_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'teams'
          },
          key: 'id'
        },
      },
      home_team_goals: Sequelize.INTEGER,
      away_team_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'teams'
          },
          key: 'id'
        },
      },
      away_team_goals: {
        type: Sequelize.INTEGER,
      },
      in_progress: Sequelize.BOOLEAN,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  },
};
