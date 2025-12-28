

const service = require('../service/recruiter.service');

exports.getAllRecruiters = async (req, res) => {
    const recruiters = await service.getAll();
    return res.json(recruiters);
}

exports.getRecruiterById = async(req,res) => {
    const recruiter = await service.getById(req.params.id);
    if(!recruiter) {
       return res.status(404).json({"message": "Recruiter Not Found"});
    }
    return res.status(200).json(recruiter);
}

    exports.createRecruiter = async(req,res) => {
 const recruiter = await service.create(req.body);
  res.status(201).json(recruiter);
    };

    exports.updateRecruiter = async (req, res) => {
  const updated = await service.update(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ message: "Recruiter not found" });
  }
  res.json(updated);
};