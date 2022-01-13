import express from 'express'
import chartModel from '../models/chartSettings.js'

const router = express.Router();

//routes
router.get('/all', (req, res) => {

    chartModel.find((err, docs) => {
        if(err) {
            console.log("ERROR: " + err);
            res.status(500).json({
                message: "An error ocurred while reading the data",
                success: false
            });
        } else {
            console.log("All data read successfully");  
            res.status(200).json({
                documents: docs,
                success: true
            });
        }
    });
});

router.get('/:chartId', (req, res) => {
    
    chartModel.findOne({
        _id: req.params.chartId
    }, (err, doc) => {
        
        if(err) {
            console.log("ERROR: " + err);
            res.status(500).json({
                message: "An error ocurred while reading the data",
                success: false
            });
        } else {
            console.log("Data read successfully");  
            res.status(200).json({
                documents: doc,
                success: true
            });
        }
    });

});

export default router;