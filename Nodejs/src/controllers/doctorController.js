import doctorService from "../services/doctorService";

let getTopDoctorHome = async (req, res) => {
  try {
    let limit = req.query.limit;
    if (limit) limit = 10;
    let response = await doctorService.getTopDoctorHome(+limit);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server ....",
    });
  }
};

let getAllDoctor = async (req, res) => {
  try {
    let doctors = await doctorService.getAllDoctor();
    return res.status(200).json(doctors);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server ....",
    });
  }
};

let postInforDoctor = async (req, res) => {
  try {
    let response = await doctorService.saveDetailInforDoctor(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server ....",
    });
  }
};

let getDetailDoctorById = async (req, res) => {
  try {
    let data = await doctorService.getDetailDoctorById(req.query.id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server ....",
    });
  }
};

module.exports = {
  getTopDoctorHome,
  getAllDoctor,
  postInforDoctor,
  getDetailDoctorById,
};
