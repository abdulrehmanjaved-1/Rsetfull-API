// const users = require("../MOCK_DATA.json");
// const fs = require("fs");
const { usermodel } = require("../Models/user");
const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema
// const userschema=new Schema({
//         first_name: String,
//         last_name: String,
//         body: String,
//         id:Number,
//         email:String,
//         ip_address:Number,
//         gender:String
// })

// //model
// const usermodel=mongoose.Model('usermodel',userschema);

mongoose
  .connect(
    "mongodb+srv://abdulrehmanjaved:BnvH11joVIWwyvbC@cluster1.jywhpnb.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

//functions

// async function getjson(req, res) {
//   try {
//     // Assuming `req.body` contains the user data for creation
//     const newUser = await usermodel.create(req.body);
//     res.status(200).json(newUser);
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ error: "Failed to create user" });
//   }
// }

//get function
async function getall(req, res) {
  try {
    // Assuming you have a User model defined using Mongoose
    const users = await usermodel.find();
    res.status(200).json(users);
  } catch (error) {
    
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
}
//post function
async function makeit(req, res) {
  try {
    const body = req.body;
    // Assuming you have a User model defined using Mongoose
    const users = await usermodel.create({
      id: body.id,
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      ip_address: body.ip_address,
      gender: body.gender,
    });
    console.log("user", users);
    
    return res.status(201).json(users);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Failed to create user" });
  }
}

//update function
async function updateit(req, res) {
  try {
    const update = await usermodel.findByIdAndUpdate(
      req.params.id,
      { first_name: 'abdul2' },
      { new: true }
    );

    return res.status(200).json(update);
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Failed to update user' });
  }
}

//delete function
async function deleteit(req, res) {
  try {
    const del = await usermodel.findByIdAndDelete({ _id: req.params.id });
    if (del) {
      return res.status(200).json(del);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).json({ error: 'Failed to delete user' });
  }
}


//getbyid function
async function findit(req, res) {
  try {
    const found = await usermodel.findById(req.params.id);
    res.status(200).json(found);
  } catch (error) {
    console.error('Error accessing user:', error);
    res.status(500).json({ error: 'Failed to access this user' });
  }
}



// function getbyid(req, res) {
//   function gethtml(req, res) {
//     const html = `
//       <ul>
//       ${users.map((element) => `<li>${element.first_name}</li>`).join("")}
//       </ul>`;
//     res.send(html);
//   }
//   const check=new usermodel();

//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id == id);
//   return res.json(user);
// }
// function postData(req, res) {
//   const newuser = req.body;
//   users.push({ ...newuser, id: users.length + 1 });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//     if (err) {
//       console.error("Error writing to file:", err);
//       return res.status(500).json({ error: "Error writing to file" });
//     }
//     console.log("done");
//     return res.json({ status: "success", id: users.length });
//   });
// }
// function deletejson(req, res) {
//   const givenid = +req.params.id;
//   const findit = users.findIndex((p) => p.id === givenid);
//   if (findit === -1) {
//     return res.status(404).json({ error: "Item not found" });
//   }
//   users.splice(findit, 1);
//   res.status(201).json({ message: "Item deleted successfully" });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//     if (err) {
//       console.error("Error writing to file:", err);
//       return res.status(500).json({ error: "Error writing to file" });
//     }
//     console.log("done");
//     return res.json({ status: "success", id: users.length });
//   });
// }

// function updatejson(req, res) {
//   const givenid = req.params.id;
//   const findit = users.findIndex((p) => p.id == givenid);
//   const product = users[findit];
//   users.splice(findit, 1, { ...product, ...req.body });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//     if (err) {
//       console.error("Error writing to file:", err);
//       return res.status(500).json({ error: "Error writing to file" });
//     }
//     console.log("done");
//     return res.json({ status: "success", id: users.length });
//   });
//   res.status(201).json();
// }

// module.exports = {
//   getall,
//   postData,
//   getbyid,
//   getjson,
//   deletejson,
//   updatejson,
// };

module.exports = {
  getall,
  makeit,
  updateit,
  deleteit,
  findit,
};
