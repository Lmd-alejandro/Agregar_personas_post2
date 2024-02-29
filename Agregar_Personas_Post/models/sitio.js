module.exports = (sequelize, DataTypes) => {
    const Sitio = sequelize.define(
      "Sitio",
      {
        id: {
          type: DataTypes.BIGINT(20),
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        direccion: {
          type: DataTypes.STRING(500),
          allowNull: false,
        },
        referencia: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        tipo: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      { tableName: "sitios" }
    );
  
    Sitio.associate = function (models) {
      // Asociaciones de Sitio con otros modelos si las hubiera
    };
  
    return Sitio;
  };
  