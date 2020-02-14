/* eslint-disable no-unused-vars */
import Sequelize from "sequelize";

export default class Cards extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            status: {
                type: DataTypes.STRING,
                defaultValue: "IN_PROGRESS"
            }
        },
        { sequelize })
    };

    static associate(models) {
        this.belongsTo(models.Users, {
            foreignKey : "id"
        });
    };
}
