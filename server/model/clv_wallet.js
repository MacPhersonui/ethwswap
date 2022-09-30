export default function (sequelize, DataTypes) {
  var clvWallet = sequelize.define('clv_wallet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    address: DataTypes.STRING,
    state: DataTypes.INTEGER
  })
  clvWallet.sync();
  return clvWallet;
}
