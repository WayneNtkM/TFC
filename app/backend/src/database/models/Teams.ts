import { DataTypes, Model } from 'sequelize';
import db from '.';

class Teams extends Model {
  declare id: number;
  declare name: string;
  declare teamName: string;
  declare matches: {
    homeTeamGoals: number;
    awayTeamGoals: number;
  }[];

  public static async getAllMatches() {
    return Teams.findAll({
      attributes: ['teamName'],
      include: [{
        association: 'matches',
        attributes: ['awayTeamGoals', 'homeTeamGoals'],
        where: { inProgress: false },
      }, {
        association: 'matchesAway',
        attributes: ['awayTeamGoals', 'homeTeamGoals'],
        where: { inProgress: false },
      }],
    }).then((res) => res.map((e) => e.get({ plain: true })));
  }

  public static async getAllHomeMacthes() {
    return Teams.findAll({
      attributes: ['teamName'],
      include: [{
        association: 'matches',
        attributes: ['awayTeamGoals', 'homeTeamGoals'],
        where: { inProgress: false },
      }],
    }).then((res) => res.map((e) => e.get({ plain: true })));
  }

  public static async getAllAwayMacthes() {
    return Teams.findAll({
      attributes: ['teamName'],
      include: [{
        association: 'matchesAway',
        attributes: ['awayTeamGoals', 'homeTeamGoals'],
        where: { inProgress: false },
      }],
    }).then((res) => res.map((e) => e.get({ plain: true })));
  }
}

export default Teams.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'Teams',
  tableName: 'teams',
  timestamps: false,
});
