import { DataTypes, Model } from 'sequelize';
import db from '.';
import Teams from './Teams';

class Matches extends Model {
  declare inProgress: boolean;

  public static getAllMatches(where: { inProgress: boolean; } | undefined) {
    return Matches.findAll({
      where,
      include: [
        {
          association: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          association: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
  }
}

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
  awayTeamGoals: {
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

Matches.belongsTo(Teams, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeamId', as: 'awayTeam' });

Teams.hasMany(Matches, { foreignKey: 'homeTeamId', as: 'matches' });
Teams.hasMany(Matches, { foreignKey: 'awayTeamId', as: 'matchesAway' });
