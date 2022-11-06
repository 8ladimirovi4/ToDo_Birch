const tasksRouter = require('express').Router();

const { Task } = require('../db/models');

tasksRouter.get('/', async (req, res) => {
  try {
    const task = await Task.findAll({

    });
    res.json({
      error: null,
      data: task,
    });
  } catch (error) {
    res.json({
      error: error.message,
      data: null,
    });
  }
});

tasksRouter.post('/', async (req, res) => {
  const  value = req.body.label;
  if(value){
  try {
    const newTask = await Task.create({
       label: value,
    });
    res.json(newTask);
  } catch ({ message }) {
    res.json({ message: "item not created" });
  }
  }
});


tasksRouter.delete("/:id", async (req, res) => {
  try {
    await Task.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
    res.json({success: true})
  } catch ({message}) {
    ({message: 'task didn\'t deleted'})
  }
})

tasksRouter.put('/:id', async (req,res) => {
  const { id } = req.params
  const { label } = req.body
  try {
    await Task.update({label},{
  where: { id },
      returning: true
    })
    res.json({success: true})
  } catch (error) {
    res.json(error.message)
  }
})
module.exports = tasksRouter;
