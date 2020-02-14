/* eslint-disable no-unused-vars */
import Sequelize from "sequelize";

export default class Users extends Sequelize.Model {
    static init(sequelize, DataValues) {
        return super.init({
            id: {
                type: DataValues.UUID,
                primaryKey: true,
                defaultValue: DataValues.UUIDV4
            },
            email: {
                type: DataValues.STRING,
                allowNull: false
            },
            password: {
                type: DataValues.STRING
            }
        },
        { sequelize })
    }

    static associate(models) {
        this.belongsTo(models.Cards, {
            foreignKey : 'userId'
        });
    }
}
