export default function(sequelize, Sequelize) {
    const Cards = sequelize.define("Cards", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: "IN_PROGRESS"
        }
    });

    Cards.initRelations = function initRelations() {
        const Users = sequelize.model("Users");

        Cards.belongsTo(Users, {
            foreignKey: "id"
        });
    };

    return Cards;
}
