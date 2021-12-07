import express from 'express'
import chartModel from '../models/chartSettings.js'

const router = express.Router();


//routes
router.post('/', (req, res) => {

    const input = req.body;
    const newDocument = new chartModel({
        title: input.title,
        description: input.description,
        labels: input.labels,
        colors: input.colors,
        numbers: input.numbers
    });

    newDocument.save((err, doc) => {
        if(err) {
            console.log('ERROR: ' + err)
            res.status(500).json({
                message: 'An error ocurred while saving input data',
                success: false
            });
        } else {
            console.log('Chart settings successfully saved')
            res.status(201).json({
                message: 'Chart settings successfully saved',
                success: true
            });
        }
    });
});

export default router;
