const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const User = require('./User');
const Address = require('./Address');

const Pedido = db.define('Pedido', {
    idpedido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
        get() {
            const rawValue = this.getDataValue('Valor');
            return parseFloat(rawValue).toFixed(2);
        },
        set(value) {
            const roundedValue = parseFloat(value).toFixed(2);
            this.setDataValue('Valor', roundedValue);
        },
    },
});

Pedido.belongsTo(User, { foreignKey: 'UserId' });

User.hasMany(Pedido, { foreignKey: 'UserId' });

module.exports = Pedido;
