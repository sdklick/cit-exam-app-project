const { adminlogincheck } = require("../models/admincheckmodel");

const handeladmincheck = async (req, res) => {
  let getdata = req.query.ID;
  let response = await adminlogincheck.findOne({
    adminid: getdata.adminid,
    adminpassword: getdata.adminpassword,
  });

  if (response == null) {
    res.send({ found: false });
  } else {
    res.send({ found: true });
  }
};

module.exports = { handeladmincheck };
