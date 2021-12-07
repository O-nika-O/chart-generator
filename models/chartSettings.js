import mongose from 'mongoose';

const chartSchema = new mongose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    labels: [String],
    colors: [String],
    numbers: [Number]
});

export default mongose.model('chartSetting', chartSchema);