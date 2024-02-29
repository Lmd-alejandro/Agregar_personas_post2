module.exports = (sequelize, DataTypes) => {
    const Visita = sequelize.define(
      "Visita",
      {
        id: {
          type: DataTypes.BIGINT(20),
          primaryKey: true,
          autoIncrement: true,
        },
        userId: {
          type: DataTypes.BIGINT(20),
          allowNull: false,
        },
        sitioId: {
          type: DataTypes.BIGINT(20),
          allowNull: false,
        },
        // Otras propiedades de la visita
      },
      { tableName: "visitas" }
    );
  
    Visita.associate = function (models) {
      // Asociaciones de Visita con otros modelos si las hubiera
    };
  
    return Visita;
  };
  