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
