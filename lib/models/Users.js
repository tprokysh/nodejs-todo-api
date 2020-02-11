export default function(sequelize, Sequelize) {
    const Users = sequelize.define("Users", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING
        }
    });

    Users.initRelations = function initRelations() {
        const Cards = sequelize.model("Cards");

        Users.hasMany(Cards, {
            foreignKey: "userId"
        });
    };

    return Users;
}
