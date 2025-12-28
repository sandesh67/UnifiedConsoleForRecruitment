const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // ✅ Correct UUID import

const filePath = path.join(__dirname, "../data.json");

// Helper: Read JSON file
async function readFile() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

// Helper: Write JSON file
async function writeFile(data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

// Get all recruiters
exports.getAll = async () => {
  return await readFile();
};

// Get recruiter by ID
exports.getById = async (id) => {
  const recruiters = await readFile();
  return recruiters.find((r) => r.id === id); // ✅ return recruiter or undefined
};

// Create new recruiter
exports.create = async (newData) => {
  const recruiters = await readFile();

  const newRecruiter = {
    id: uuidv4(), // ✅ generate unique id
    ...newData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  recruiters.push(newRecruiter);
  await writeFile(recruiters);

  return newRecruiter; // ✅ return the created recruiter
};

// Update existing recruiter
exports.update = async (id, updateData) => {
  const recruiters = await readFile();

  const index = recruiters.findIndex((r) => r.id === id);
  if (index === -1) return null; // not found

  recruiters[index] = {
    ...recruiters[index],
    ...updateData, // ✅ use correct parameter
    updatedAt: new Date().toISOString(),
  };

  await writeFile(recruiters); // ✅ write back updated data
  return recruiters[index];
};