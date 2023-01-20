import { DataTypes, Model } from 'sequelize';
import db from '.';
import Teams from './Teams';

class Matches extends Model {}

export default Matches.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    references: {
      model: Teams,
      key: 'id',
    },
    allowNull: false,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    references: {
      model: Teams,
      key: 'id',
    },
    allowNull: false,
  },
  awayTeamsGoals: {
    type: DataTypes.INTEGER,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'Matches',
  timestamps: false,
  tableName: 'matches',
});

Matches.belongsTo(Teams);

Teams.hasMany(Matches, { foreignKey: 'homeTeamId', as: 'HomeTeam' });
Teams.hasMany(Matches, { foreignKey: 'awayTeamId', as: 'AwayTeam' });
