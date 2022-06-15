'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Board extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) 
        { this.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'userId' }) } }
        
        Board.init(
        {
            boardId: {
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            userId: DataTypes.INTEGER,
            title: DataTypes.STRING,
            content: DataTypes.STRING,
            image: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Board',
        }
    );
    return Board;
};
