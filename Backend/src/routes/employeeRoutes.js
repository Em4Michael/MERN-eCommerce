import express from 'express';
import Employees from '../models/employees.js';
import bodyParser from 'body-parser'
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.use(bodyParser.json());

router.get('/', asyncHandler( async (req, res) => {
    const employees = await Employees.find({})
        
            res.send(employees)
        
    }
))


//@desc fetch all Employees
//@route GET /api/Employees
//@access Public
router.get('/', (req, res) => {
    Employees.find({}, (err, Users) => {
        if(err) {
            console.log(err)
        } else {
            res.send(Users)
        }
    })
  
})

//@desc fetch all Employees
//@route POST /api/Employees/id
//@access Public
//let { id } = useParams();
router.get('/:id', asyncHandler( async (req, res) => {
  
    const employees = await Employees.findById(req.params.id)
        if(!employees) {
            console.log(err)
            res.status(404).json({
                message: 'Employees not found'
            })
        } else {
            res.json(employees)
        }
    })
)

//@desc fetch all Employees
//@route POST /api/Employees/add
//@access Public
router.post('/add', (req, res) => {
    const Find = new Employees({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    })
  Find.save((err, user) => {
    res.status(200).json({
        code: 200,
        message: 'User created successfully',
        user: user
  })
})
})


router.put('/edit/:id', (req, res) => {
    const Find = new Employees({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    })
    Employees.findByIdAndUpdate(req.params.id, {$set:Find}, {new:true}, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).json({
                code: 200,
                message: 'Employee updated successfully',
                userUpdate: data
          })
        }
    })
})

router.delete('/delete/:id', (req, res) => {
Employees.findByIdAndDelete(req.params.id, (err, data) => {
    if(err) {
        console.log(err)
    } else {
        res.status(200).json({
            code: 200,
            message: 'Employee deleted successfully',
            userDelete: data
        })
    }
})
})

export default router;