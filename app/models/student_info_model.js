module.exports = (sequelize, Sequelize) => {
  const student_info = sequelize.define("studentInfo", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fatherName: {
      type: Sequelize.STRING
    },
    motherName: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING
    },
    registrationDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    grade: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM("active", "deleted"),
      defaultValue: "active"
    },
    rollNumber: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  });

  return student_info;
};
