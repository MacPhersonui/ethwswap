export default function (sequelize, DataTypes) {
  var Card = sequelize.define('card', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    address: DataTypes.STRING,
    alreadyGet: DataTypes.STRING
  })
  Card.sync();
  return Card;
}
